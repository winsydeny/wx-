const time = require('../../utils/util.js');
const app = getApp();


Page({
  data:{
    name:null,
    times:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad:function(){
    const date = new Date();
    
      console.log(app.data.name);
      this.setData({ name:app.data.name });
      console.log(time.formatTime(date));
      this.setData({ times:time.formatTime(date) });
     

     
      
  }
})