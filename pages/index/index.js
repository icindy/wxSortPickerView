//index.js
//获取应用实例
var app = getApp()
var wxSortPickerView = require('../../wxSortPickerView/wxSortPickerView.js');
Page({
  data: {
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
  }
})
