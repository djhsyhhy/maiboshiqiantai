<template>
  <div>
    <div style="margin-bottom: 30px">
      <el-input placeholder="请输入账号" v-model="account">
        <template slot="prepend"><i class="el-icon-s-custom"></i></template>
      </el-input>
    </div>
    <div style="margin-bottom: 30px">
      <el-input placeholder="请输入密码" v-model="password" :type="passwordType">
        <i slot="suffix" class="el-icon-view" style="width: 30px;line-height: 40px;cursor: pointer"
           @click="showPwd"></i>cc
        <template slot="prepend"><i class="el-icon-lock"></i></template>
      </el-input>
    </div>
    <div style="margin-bottom: 40px">
      <span style="padding-left: 10px;cursor: pointer">忘记密码</span><span
      style="float: right;padding-right: 10px;cursor: pointer" @click="go">立即注册</span>
    </div>
    <div style="text-align: center;margin-bottom: 20px">
      <el-button type="success" style="width: 70%;height: 50px;font-size: 20px" @click="login">登录</el-button>
    </div>
    <div style="width: 100%;margin: 0 auto">
      <div style="width: 29%;float: left">
        <el-divider></el-divider>
      </div>
      <div style="width: 42%;float: left;line-height: 45px;text-align: center">使用合作账号登录</div>
      <div style="width: 29%;float: left">
        <el-divider></el-divider>
      </div>
    </div>
    <div>
      <div style="width: 25%;float: left;text-align: center;cursor: pointer">
        <img style="width: 70%;border-radius: 50px;" src="./../../static/img/WeChat.png"/>
        <span style="display: block;margin-top: 10px">微信</span>
      </div>
      <div style="width: 25%;float: left;text-align: center;cursor: pointer">
        <img style="width: 70%;border-radius: 50px;" src="./../../static/img/QQ.png"/>
        <span style="display: block;margin-top: 10px">QQ</span>
      </div>
      <div style="width: 25%;float: left;text-align: center;cursor: pointer">
        <img style="width: 70%;border-radius: 50px;" src="./../../static/img/microblog.png"/>
        <span style="display: block;margin-top: 10px">微博</span>
      </div>
      <div style="width: 25%;float: left;text-align: center;cursor: pointer">
        <img style="width: 70%;border-radius: 50px;" src="./../../static/img/zhifubao.png"/>
        <span style="display: block;margin-top: 10px">支付宝</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import bus from '@/assets/eventbus';


  export default {
    name: "Login",
    computed: {},
    data() {
      return {
        msg: false,
        account: '',
        password: '',
        passwordType: 'password',
        userObject:'',
      }
    },
    methods: {//定义函数

      ...mapActions(["inaction"]),

      go() {
        this.$emit('func', this.msg);
      },

      showPwd() {
        this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password';
        let e = document.getElementsByClassName('el-icon-view')[0];
        this.passwordType === '' ? e.style.color = '#409EFF' : e.style.color = '#c0c4cc';
      },

      login() {
        if (this.account === '' || this.password === '') {
          this.$message.error('账号或密码为空！');
        } else {
          let url = 'http://localhost:8888/user/getUser';
          // console.log(url);
          //  当发起post请求之后， 通过 .then 来设置成功的回调函数
          this.$http.post(url, this.account).then(result => {
            // console.log(result.body);
            if (result.body.length === 0) {
              this.$message.error('该账号不存在！');
            } else {
              if (this.password != result.body[0].password) {
                this.$message.error('密码错误！请检查账号或密码');
              } else {
                // console.log(result.body[0]);
                // let list = result.body[0];
                this.userObject = result.body[0];
                bus.$emit("userObject",this.userObject);//同级组件传值给NavHead
                this.inaction(this.userObject);
                this.$router.push('/');

              }
            }
          }, response => {
            this.$message.error('数据库连接失败！');
          });
        }
      },


    },
  }
</script>

<style scoped>

</style>
