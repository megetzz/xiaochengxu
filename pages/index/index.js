//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World,hello minprogram',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    message:"Hello,world,hello django ,hello zz",
    name:'我是张三',
    // 数组 列表渲染
    array:[
      {
        message:"hello,world"
      },
      {
        message:"hello,django"
      },
      {
        message:"hello,zz"
      }
    ]
  },
  // 绑定事件--> 点击
  tapName:function(){
    console.log('触发点击事件')
  },
  // 微信api ----> 网络请求
  testNetwork: function(event){
    var data= 'undefined'
    wx.request({
      url: 'http://www.bilibili.com',
      method: "GET",
      header:{},
      success:function(res){
        console.log('in seccess,异步')
        data = res.data
        console.log('网络请求成功,具体内容如下:',res.data)
      },
      fail: function(res){
        console.log('网络请求失败')
      }
    })
    console.log('data',data)
  },

  //本地缓存api 
  //将数据存储在本地缓存中指定的key中,数据存储生命周期跟小程序本身一致
  // wx.setStorage  把数据保存在指定的key
  // wx.getStorage  把数据从key中取出来
  // wx.removeStorage   把数据从本地缓存中删除
  // wx.clearStorage    把本地所以的缓存都删除,操作所以缓存
  testStorage:function(){
    // 此处读写是 异步
    // 写缓存
    wx.setStorage({
      key: 'test',
      data: 'data',
    })
    // 读缓存
    wx.getStorage({
      key: 'test',
      success: function(res) {
        var data = res.data
        console.log('数据缓存来源(异步),data from storage1:',data)
      },
    })
    //次处读写是同步
    var data=wx.getStorageSync('test')
    console.log('数据缓存来源(同步),data from storage2:',data)
  },
  // 文件系统api
  
  // 全局文件管理器,增删改查,文件夹操作
  // 全局文件管理器获取: var fs=wx.getFileSystemManager()
  
  // 文件的增删改查 完全覆盖编程语言对文件的各种操作
  // fs.saveFile  保存文件
  // fs.removeSavedFile 删除保存文件
  // fs.writeFile 写
  // fs.readFile  从文件读取内容
  // fs.appendFile  往文件追加内容
  
  // 文件夹操作 
  // fs.mkdir   创建
  // fs.rmdir   删除
  // fs.isDirectory 判断指定路径是否是文件夹
  // fs.isFile      判断指定路径是否是文件

  // 开放能力   // 用户数据 wx.getUserInfo()  // openid等敏感数据  
  // 推送消息
  // 运营数据
  

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
