//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    message:"Hello,world,hello django ,hello zz",
    // 数组 列表渲染
    array:[
      {
        message:"hello,world"
      },
      {
        message:"hello,django"
      },
      {
        message:"hello,zz",
      }
    ]
  },
  // 绑定事件--> 点击
  tapName:function(){
    console.log('触发点击事件')
  },
  // 微信api ----> 网络请求
  testNetwork: function(event){
    wx.request({
      url: 'http://www.bilibili.com',
      method: "GET",
      header:{},
      success:function(res){
        console.log('网络请求成功,具体内容如下:',res.data)
      },
      fail: function(res){
        console.log('网络请求失败')
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
