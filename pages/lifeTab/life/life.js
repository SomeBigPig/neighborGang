// pages/lifeTab/life/life.js
// 邻居生活

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

  // 公告栏
  toNotice: function() {
    wx.navigateTo({
      url: '/pages/lifeTab/notice/notice',
    });
  },

  // 居家服务
  toTask: function() {
    wx.navigateTo({
      url: '/pages/lifeTab/task/task',
    });
  },

  // 公告
  toShopMall: function() {
    wx.navigateTo({
      url: '/pages/lifeTab/shopMall/shopMall',
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