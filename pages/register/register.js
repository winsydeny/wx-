Page({
  data:{
    username:null,
    password:null,
    // course:null
  },
  usernameinput:function(res){
       console.log(res);
       this.setData({ username:res.detail.value })
  },
  passwordinput:function(res){
    console.log(res.detail.value);
    this.setData({ password:res.detail.value })
  },
  // course:function(res){
  //   console.log(res.detail.value);
  //  this.setData({ course:res.detail.value });
  // },
  register:function(){
    var that = this;
    let username = that.data.username;
    let password = that.data.password;
    let course = that.data.course;
    if(username != null && password != null && course != null)
     {
      wx.request({
        url: 'https://www.goeve.xyz/register.php',
        data: {
          username: username,
          password: password,
          course:course
        },
        success: function (res) {

          console.log(res);
          if(res.data == "error"){
            wx.showModal({
              title: 'tips',
              content: 'the username had been registered',
            })
          }else{
          wx.showModal({
            title: 'infomation',
            content: 'success',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../teacher/teacher',
                })
              } else if (res.cancel) {
                console.log("you click cancle");
              }
            }
          });
          }
        },
        fail: function () {
          console.log("error");
        }
      })
     }else{
       wx.showModal({
         title: 'warn',
         content: 'check your username or password',
       });
     }
  }
})