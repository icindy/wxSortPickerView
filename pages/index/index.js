//index.js
//获取应用实例
var app = getApp()
var wxSortPickerView = require('../../wxSortPickerView/wxSortPickerView.js');
Page({
  data: {
    nimationData: {},
    wxSortPickerData:{textData:[{tag:"A",textArray:["啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄"]},{tag:"B",textArray:["啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄","啊","嗄"]},{tag:"C",textArray:["啊","嗄"]}]}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wxSortPickerView.init([],that);
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
