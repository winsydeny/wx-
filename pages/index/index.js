Page({
  loginTea:function(){
    wx.navigateTo({
      url: '../teacher/teacher',
    });
  },
  loginStu:function(){
    
    wx.navigateTo({
      url: '../student/student',
    });
  }
})