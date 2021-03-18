import state from './userstate'

const user = {

  //store里面定义数据
  // state: {
  //
  // },

  state,

  //getters里面必须返回值  可对数据进行拼装加工
  getters: {

  },

  //mutations 定义方法  对数据进行计算
  mutations:{
    inlogin(state,list){
      state.loginstate = true;
      state.accountstate = list.account;
      state.jurisdictionstate = list.jurisdiction;
      state.emailstate = list.email;
      state.passwordstate = list.password;
    },
    delogin(state){
      state.loginstate = false;
      state.accountstate = '';
      state.jurisdictionstate = '';
      state.emailstate = '';
      state.passwordstate = '';
    },
  },

  //actions 调用mutations的方法对数据计算  还能进行逻辑处理   可发送http请求
  actions:{
    inaction(context,list){
      console.log(list);
       context.commit('inlogin',list);
    },
    deaction(context){
      context.commit('delogin');
    }
  }


};


export default user;
