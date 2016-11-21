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
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()
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
