//index.js
//获取应用实例
var app = getApp()
var wxSortPickerView = require('../../wxSortPickerView/wxSortPickerView.js');
Page({
  data: {
    nimationData: {},
    wxSortPickerData:{textData:[{tag:"A",textArray:["啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄"]},{tag:"B",textArray:[]},{tag:"A",textArray:["啊","嗄"]}]}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    var testData = wxSortPickerView.query("你好嘛");
    that.setData({
      testData:testData
    })
  },
  onShow: function(){
    var animation = wx.createAnimation({
        transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
    })

    this.animation = animation

    animation.height(10).top(30).left(30).step()
    var temData = this.data.wxSortPickerData;
    temData.animationData = animation.export()
    this.setData({
      wxSortPickerData:temData,
      animationData:animation.export()
    })

    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  }
})
