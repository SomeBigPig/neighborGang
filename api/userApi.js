const config = require("./config.js")
const loginUtil = require("../utils/login.js")

// 预登陆
const prepareLogin = (code, encryptedData, iv, success) => {
  let url = '/prepareLogin/'
  let param = {
    jsCode: code,
    encryptedData: encryptedData,
    iv: iv
  }
  config.postHttp(url, {"content-type": "application/x-www-form-urlencoded;charset=UTF-8"}, param, res => {
    if (res.data.code == 0) {
      let data = res.data.data
      app.globalData.unionid = data.unionId
      app.globalData.openid = data.openId
      wx.setStorage({ key: "unionid", data: data.unionId })
      wx.setStorage({ key: "openid", data: data.openId })
      login(code, success)
    } else {
      loginUtil.loginRequestError(res.data.msg)
    }
  },()=> {
    loginUtil.loginRequestError()
  })
}

const login = (code, success) => {
  let url = "/login/"
  let param = {
    unionId: app.globalData.unionid,
    openId: app.globalData.openid,
    code: code,
    userInfo: JSON.stringify(app.globalData.userInfo)
  }
  config.postHttp(url, {"content-type": "application/x-www-form-urlencoded;charset=UTF-8"}, param,res => {
    if (res.data.code == 0) {
      app.globalData.openid = data.openid
      app.globalData.unionid = data.unionid
      wx.hideLoading()
      success(res)
    } else {
      loginUtil.loginRequestError(res.data.msg)
    }
  },() => {
    loginUtil.loginRequestError()
  })
}

module.exports = {
  prepareLogin,
  login,
}