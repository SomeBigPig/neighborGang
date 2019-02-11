//app.js
App({
  onLaunch: function () {
    // 版本检查
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      updateManager.applyUpdate()
    })
    
  },
  globalData: {
    openid: '', // 用户openid
    unionid: '',  // 用户unionid
    userInfo: null, // 用户详细信息
    version: '0.0.0', // 当前版本号
    ProductionEnvironment: false, // 是否是生产环境
  }
})