// pages/ceshi/ceshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello ceshi,hello minprogram',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [
      {
        message: "hello,world"
      },
      {
        message: "hello,django"
      },
      {
        message: "hello,zz"
      },
      {
        message: "hello,xx"
      }
    ]
  },
  // 点击
  click:function(){
    console.log('点击')
  },

  // 网络测试
  test_network:function(){
    var data=undefined
    wx.request({
      url:'https://www.bilibili.com',
      method:"GET",
      header:{},
      success:function(res){
        data = res.data
        console.log('网络请求成功--->',res.data)
      },
      fail:function(res){
        console.log('网络请求失败',res.errMsg)
      }
    })
    console.log('data:---->',data)
  },
  testnetwork1:function(){
    // 异步
    var result='undefined'
    wx.request({
      // url: 'https://pyq.shadiao.app/',
      // url:'http://httpbin.org/',
      // url: 'http://www.jd.com',
      // url:'https://python.org/',
      url:'http://127.0.0.1:8000/blog/index/',
      method:"GET",
      header:{},
      //success和fail是耗时操作
      success:function(res){
        result = res.data
        console.log('请求成功')
        console.log('结果成功:'+result)
      },
      fail:function(res){
        console.log('结果失败:')
        console.log(res.errMsg)
      }
    })
    console.log('result:--->',result)
  },

  // 失败的上传文件
  shangchuan:function(){
    wx.uploadFile({
      url: 'upload',
      filePath: 'pages/ceshi/abc.jpg',
      name: 'file',
      fromData : {
        'user':'test'
      },
      success(res) {
        console.log(res.data)
      },
      fail(res){
        console.log('上传失败')
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('测试页加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('测试页读取')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('测试页显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('测试页隐藏')
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
    console.log('用户下拉')
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