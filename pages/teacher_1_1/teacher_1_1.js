const local = require('../../utils/util.js');
const app = getApp();
Page({
  data: {
    numbers: null,
    username: '姓名',
    location: '地点',
    listname:[]
  },
  onLoad: function () {
    let p = []; //
    let list = {}; //object
    let userinfo; //用户名
    let longitude; //经度
    let latitude;  //维度
    const that = this;
    wx.request({
      url: 'https://www.goeve.xyz/postname.php',
      success: function (res) {
        console.log(res);
        let i;
        let num = res.data.length;
        for (i = 0; i < num; i++) {
          userinfo = res.data[i].user_names;
          longitude = res.data[i].longitude;
          latitude = res.data[i].latitude;
          list.name = userinfo;
          list.location = local.getlocal(longitude, latitude);
          // list.location = longitude+'--'+latitude;
          p = that.data.listname;
          p.push(list);
          that.setData({ listname: p });  
        }
        that.setData({ numbers: res.data.length });
        
      }
    })
    

    
  },
  onPullDownRefresh() {
  
    this.data.listname = [];
    let p = []; //
    let list = {}; //object
    let userinfo; //用户名
    let longitude; //经度
    let latitude;  //维度
    const that = this;
   
    wx.request({
      url: 'https://www.goeve.xyz/postname.php',
      success: function (res) {
        // wx.startPullDownRefresh();
        console.log(res);
        let i;
        let num = res.data.length;
        // console.log(num);
        for (i = 0; i < num; i++) {
          userinfo = res.data[i].user_names;
          longitude = res.data[i].longitude;
          latitude = res.data[i].latitude;

          list.name = userinfo;
          list.location = local.getlocal(longitude, latitude);
          // list.longitude = longitude;
          // list.latitude = latitude;
          p = that.data.listname;
          p.push(list);
          that.setData({ listname: p });
        }
        // console.log(that.data);
        // that.data.numbers = that.data.listname.length;
        that.setData({ numbers: res.data.length });
        wx.stopPullDownRefresh();
        
      }
      
    })
  }
})