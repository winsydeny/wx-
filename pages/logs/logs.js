const http = require('../../utils/util.js');
Page({
  onLoad(){
    http.promise.then((res)=>{
      console.log(res.data);  
    },(res)=>{
      console.log(res);
    });

    
  }
})