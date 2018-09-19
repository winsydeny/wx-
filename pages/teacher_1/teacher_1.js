const app = getApp();
Page({
  data:{
    nickname:null,
    photo:null,
    course:app.data.course
  },
  detele:function(){
    wx.showModal({
      title: 'message',
      content: '是否下课？',
      success:function(res){
        if(res.confirm){
        wx.request({
          url: 'https://www.goeve.xyz/delete.php',
        });
        wx.redirectTo({
          url: '../index/index',
        })
      }else if(res.cancel){
        console.log("cancel");
      }
      
      }
    })
    
  },
  bindPickerChange:function(res){
      console.log(res.detail.value);
      this.setData({ index:res.detail.value });
  },
  onLoad:function(){
    this.setData({ course:app.data.course });
    wx.getUserInfo({
      success:function(res){
          // console.log(res.userInfo);
          console.log(app.data.course);

      }
    })
  }
})