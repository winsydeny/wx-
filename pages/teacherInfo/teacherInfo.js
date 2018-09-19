const app = getApp();
Page({
  data:{
    sindex:null,
    cindex:null,
    crindex:null,
    classes:['16数媒3','16数媒2'],
    school:['兰州文理学院'],
    course:['英语','线性代数']
  },
  bindPickerChange:function(res){
    this.setData({ sindex:res.detail.value });
  },
  bindPickerChangeclass:function(res){
    this.setData({ cindex:res.detail.value });
  },
  bindPickerChangecourse:function(res){
    this.setData({ crindex:res.detail.value });
  },
  postTeacherInfo:function(){
    const that = this;


    if(this.data.sindex == null||this.data.cindex == null||this.data.crindex == null){
      wx.showModal({
        title: 'warn',
        content: 'select all choose',
      })
    }
    else{
      // console.log(this.data.sindex);
    app.data.course = this.data.course[this.data.crindex];
    // console.log(this.data.course[this.data.crindex]);
    // console.log(app.data.course);
    wx.request({
      url: 'https://www.goeve.xyz/teacherinfo.php',
      data:{
        course: that.data.course[that.data.crindex],
        classes:that.data.classes[that.data.cindex],
        select:1
      },
      success:function(res){
        console.log(res);
      }
    });
    wx.switchTab({
      url: '../teacher_1_1/teacher_1_1',
    })
  }
  }
})