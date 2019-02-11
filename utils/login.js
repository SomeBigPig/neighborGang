/**
 * 小程序授权登陆工具类
 */
const app = getApp()
const config = require("../api/config.js")
const userApi = require('../api/userApi.js')


// 调用login,getUserInfo,获取微信登录信息
const weixinLogin = (success) => {
  wx.showLoading({
    title: "登录中...",
    icon: "loading"
  })
  wx.login({
    success: function (res) {
      if (res.code) {
        // 获取用户信息
        wx.getUserInfo({
          withCredentials: true,
          success: function (res_user) {
            app.globalData.userInfo = res_user.userInfo
            // 如果本地有unionID和openID则跳过预登录
            let unionid = wx.getStorageSync("unionid")
            let openid = wx.getStorageSync("openid")
            if (unionid && openid) {
              app.globalData.unionid = unionid
              app.globalData.openid = openid
              login(res.code, success)
              return
            }
            preLogin(res.code, res_user.encryptedData, res_user.iv, success)
          },
          fail: function (error) {
            loginRequestError(error)
          }
        })
      } else {
        loginRequestError()
      }
    },
    fail: function () {
      loginRequestError()
    }
  })
}

// 预登陆获取用户unionid和openid
const preLogin = (code, encryptedData, iv, success) => {
  userApi.prepareLogin(code, encryptedData, iv, success)
}

// 登陆服务器获取用户信息
const login = (code, success) => {
  userApi.login(code, success)
}

// 请求错误
const loginRequestError = msg => {
  wx.hideLoading()
  wx.showToast({
    title: !msg ? "登录失败，请重试" : msg,
    icon: "none"
  })
}

// 用户已授权scope.userInfo, 直接自动登陆
const autoLogin = (success, cancel) => {
  // 不重复登陆
  if (app.globalData.userInfo) {
    cancel()
    return
  }
  // 判断授权
  wx.getSetting({
    success: (res) => {
      // 已授权就自动登录
      if (res.authSetting['scope.userInfo']) {
        autoLogin(success);
      } else {
        cancel()
      }
    }
  })
}

// 手动登录
const activeLogin = (e, success) => {
  if (e.detail.errMsg.indexOf("ok") > 0) {
    // 授权成功
    wx.showLoading({
      title: "登录中...",
      icon: "loading"
    })
    // app.globalData.userInfo = e.detail.userInfo
    // 先调用微信登录
    weixinLogin(success)
  } else {
    // 授权失败
    wx.getNetworkType({
      success: function (res) {
        wx.showToast({
          title: res.networkType == "none" ? "网络异常，请连接网络后重试" : "登录异常，请重试",
          icon: "none"
        })
      }
    })
  }
}

module.exports = {
  autoLogin,
  activeLogin,
  loginRequestError
}