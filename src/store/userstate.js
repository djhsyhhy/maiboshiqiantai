
var state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')).user : {
  loginstate: false,//登录状态
  accountstate:'',//登录的账号
  passwordstate:'',//密码
  jurisdictionstate:'',//登录的账号的权限
  emailstate:'',//登录账号的邮箱
};


export default state
