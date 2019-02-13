// pages/personalTab/personal/personal.js
// 我的

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  
  // 我的运动
  toMySport: function() {
    wx.navigateTo({
      url: '/pages/personalTab/mySport/mySport',
    });
  },
  
  // 我的订单
  toMyOrder: function() {
    wx.navigateTo({
      url: '/pages/personalTab/myOrder/myOrder',
    });
  },
  
  // 邀请跑友
  toTeamShare: function() {
    wx.navigateTo({
      url: '/pages/personalTab/teamShare/teamShare',
    });
  },
  
  // 意见反馈
  toSuggestion: function() {
    wx.navigateTo({
      url: '/pages/personalTab/suggestion/suggestion',
    });
  },
  
  // 关于我们
  toAboutUs: function() {
    wx.navigateTo({
      url: '/pages/personalTab/aboutUs/aboutUs',
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})