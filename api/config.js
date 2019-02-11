//  测试环境
const test_hostname = 'https://zsdl.bugahome1.net/' // http 请求
// const test_hostname = 'http://47.106.103.128:8380/' // http 请求

// 生产环境
const production_hostname = 'https://production.sing.bugahome1.net/' // http 请求

// 根据环境配置选择值
const hostname = getApp().globalData.ProductionEnvironment ? production_hostname : test_hostname

// 网络请求
const requestHttp = (path, method, header, params, success, fail, complete) => {
  // 防止重复提交
  wx.request({
    url: hostname + path,
    data: params,
    method: method,
    header: header || {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.statusCode == 200 || res.statusCode == 201) {
        success(res)
      } else {
        if (fail) {
          fail(res)
        }
      }
    },
    fail: function (error) {
      console.log(error)
      if (fail) {
        fail(error)
      }
    },
    complete: function (info) {
      if (complete) {
        complete(info)
      }
      isSumbit = false
    }
  })
}

const getHttp = (path, header, params, success, fail, complete) => {
  requestHttp(path, 'GET', header, params, success, fail, complete)
}

const postHttp = (path, header, params, success, fail, complete) => {
  requestHttp(path, 'POST', header, params, success, fail, complete)
}

module.exports = {
  getHttp,
  postHttp,
}