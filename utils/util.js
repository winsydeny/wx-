const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

function getlocal(longitude,latitude){
     if(longitude>100&&longitude<105&&latitude>32&&latitude<40){
       return '第一教学楼';
     }else return '地址不明';
}




const promise = new Promise((resolve,reject)=>{
    wx.request({
      url: 'https://www.goeve.xyz/selectTeacher.php',
      success(res){
        resolve(res);
      },
      fail(){
          reject();
      }
    })
})










module.exports = {
  formatTime: formatTime,
  getlocal:getlocal,
  promise:promise
}
