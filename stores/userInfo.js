var extendObservable = require('../libs/mobx').extendObservable;

//获取应用实例
var app = getApp()

var userInfo = function(){
  extendObservable(this,{
    title: 'Hello World',
    data: {}
  })
  this.receive = function(){
    var that = this
    app.getUserInfo(function (userInfo) {
      that.data = userInfo
    })
  }
}

module.exports = {
  default: new userInfo
}
