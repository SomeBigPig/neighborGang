// pages/lifeTab/noticeLaunch/noticeLaunch.js
// 邻居生活-公告栏-发布公告

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: ''
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
  
  // 添加公告图片
  addPhoto: function() {
    wx.chooseImage({
      count: 9,
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{
        wx.showToast({
          title: '添加图片失败...',
          icon: 'none',
        });
      },
    });
  },

  // 输入公告
  bindNotice: function(e) {
    this.setData({
      notice: e.detail.value
    })
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