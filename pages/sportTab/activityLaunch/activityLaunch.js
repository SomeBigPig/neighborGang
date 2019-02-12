// pages/sportTab/activityLaunch/activityLaunch.js
// 跑团-活动发起
const util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-12-8',
    time: '19:22',
    startDate: '',
    startTime: '',
    address: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.initPicker()
  },

  // 初始化时间控件
  initPicker: function() {
    let date = util.formatTime('' , 'YYYY-MM-DD')
    let time = util.formatTime('' , 'HH:ii')
    this.setData({
      date: date,
      time: time,
      startDate: date,
      startTime: time
    })
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

  // 活动发起
  submitHandle: function(e) {
    let form = e.detail.value
    console.log(form)
  },

  // 地图点击事件
  chooseMap: function() {
    let that = this
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          address: res.name
        });
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    });
  },

  // 选择日期
  dateChangeHandle: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  // 选择时间
  timeChangeHandle: function(e) {
    this.setData({
      time: e.detail.value
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