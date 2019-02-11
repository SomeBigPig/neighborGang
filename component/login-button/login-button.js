// component/login-button/login-button.js
const login = require('../../utils/login.js')
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scene: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    hasUserInfo: app.globalData.userInfo,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loginHandle: function(e) {
      let that = this
      // 登陆了不重复登陆
      if (app.globalData.userInfo) {
        that.triggerEvent('loginSuccess', {scene: that.data.scene})
        return
      }
      login.autoLogin(e, res => {
        res.scene = that.data.scene
        that.setData({
          hasUserInfo: true
        })
        that.triggerEvent('loginSuccess', res)
      })
    }
  }
})
