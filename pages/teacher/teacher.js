Page({
  data:{
      name:null,
      password:null
  },
  goclass:function(){
    let that = this;
    console.log("goclass");
    
 if(this.data.name != null&&this.data.password != null)
 {
    // wx.switchTab({url: '../teacher_1_1/teacher_1_1'});
    wx.request({
      url: 'https://www.goeve.xyz/selectTeacher.php',
      success:function(res){
          console.log(res);
          let ensure = 0;
          for(let i = 0;i<res.data.length;i++){
          if(that.data.name == res.data[i].username && that.data.password == res.data[i].password)
            {
              ensure = 1;
            }
          
          }
          if(ensure == 1){
              wx.redirectTo({url: '../teacherInfo/teacherInfo'});

          }
          else{
            wx.showModal({
              title: 'warn',
              content: 'usename or password error',
            })
          }
          
      }
    })
    console.log("null");
 }
 else
    {
         console.log("error");
         wx.showModal({
           title: 'tips',
           content: 'enter name and password',
         })
      }





},
  userinput:function(res){
    console.log(res);
   this.setData({ name:res.detail.value });   
  },
  passwordinput:function(res){
    this.setData({ password: res.detail.value });   
   
  },
  register:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  }
})