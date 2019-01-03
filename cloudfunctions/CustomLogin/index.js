// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const {opendId,appid}=cloud.getWXContext();
  const db = wx.cloud.database();
  const message="用户名或者密码错误";
  db.collection('user').where({
    UserName:'agan',
    Password:'123456'
  }).get({
    success(res){
      console.log(res);
      if(res!=null){
        message="登录成功!!";
      }
    },
    fail: err => {
      console.log(err);
      console.log("登录遇到问题");
    }
  })
  return {
    message:message,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}