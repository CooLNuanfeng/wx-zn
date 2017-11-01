// pages/index/index.js

const qiniuUploader = require("../../utils/qiniuUploader");
const genToken = require('../../utils/getUpToken.js').genToken;

var options = {
  "scope": "images",
  "deadline": Date.parse(new Date()) + 3600
}

var uploadToken = genToken('-2rQ7jMWwI1PHe_i8c60WOgx7isexE1SI-K5eSPx', 'uWkWvwDwucTA9ekkbSWMDQPMBt4t8KYtFRkkvrMW', options);
console.log(uploadToken)

Page({
  chooseImage: function () {
    var that = this;
    // 选择图片
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var filePath = res.tempFilePaths[0];
        console.log('aa');
        qiniuUploader.upload(filePath, (res) => {
         console.log(res);
        }, (error) => {
		        console.log('error: ' + error);
        }, {
            region: 'ECN',
            uptoken : uploadToken
        });
      }
    })
  }
});