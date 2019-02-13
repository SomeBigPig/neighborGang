// pages/sportTab/sport/sport.js
// 跑团

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 1,
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

  // 切换选项卡
  changeTab: function(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      tab: index
    })
  },

  // 发起活动
  toActivityLaunch: function() {
    wx.navigateTo({
      url: '/pages/sportTab/activityLaunch/activityLaunch',
    });
  },

  // 活动详情
  toRunActivity: function() {
    wx.navigateTo({
      url: '/pages/sportTab/runActivity/runActivity',
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