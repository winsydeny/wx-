const app = getApp();
Page({
  data:{
    name:null,
    array:[],
    index:null,
    longitude:null,
    latitude:null
  },
  loginClass:function(){
    const patt = /^[0-9]+/;
    const patt2 = /^[a-z]+/;
    const patt3 = /^[A-Z]+/;
    const judge = this.data.name.match(patt) || this.data.name.match(patt2) || this.data.name.match(patt3); //判断名字的合法性
    const that = this;
    if(this.data.name == null||judge||this.data.index == null){
      wx.showModal({
        title: 'warnning',
        content: 'please enter your real name',
      })
    }
    else{
    wx.redirectTo({
      url: '../student_1/student_1',
    });
    wx.getLocation({
      success: function(res) {
        let longitude = res.longitude;
        let latitude = res.latitude;
        wx.request({
            url: 'https://www.goeve.xyz/smartName.php',
            data: 
            {
                use: that.data.name,
                longitude:longitude,
                latitude:latitude
            },
            success: function () 
            {
               console.log("succeed");

            }
        })
      },
    })
    }
  },
  name:function(res){
    console.log(res.detail.value);
    this.setData({ name:res.detail.value });
    app.data.name = res.detail.value;
  },
  bindPickerChange:function(res){
      this.setData({ index:res.detail.value })
  },
  onLoad:function(){
    console.log("load");
    const that = this;
    let p=[];
    wx.request({
      url: 'https://www.goeve.xyz/teacherinfo.php?select=0',

      success:function(res){
        console.log(res);
        // console.log(res.data[1].class);
        let len = res.data.length;
        console.log(len);
        for(let i=0;i<len;i++)
           p.push(res.data[i].class);
        console.log(p);
           that.setData({ array:p });


      }
    })
  }
})