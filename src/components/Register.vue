<template>
  <div>
    <div style="margin-bottom: 20px">
      <input type="password" style="position: absolute; z-index: -1000;">
      <el-input placeholder="请输入账号" v-model="account" autocomplete="off">
        <template slot="prepend"><i class="el-icon-s-custom"></i></template>
      </el-input>
    </div>
    <div style="margin-bottom: 20px">
      <el-input placeholder="请输入密码" v-model="password" autocomplete="off" show-password="true">
        <template slot="prepend"><i class="el-icon-lock"></i></template>
      </el-input>
    </div>
    <div style="margin-bottom: 40px">
      <el-input placeholder="请确认密码" v-model="password1" autocomplete="off" show-password="true">
        <template slot="prepend"><i class="el-icon-lock"></i></template>
      </el-input>
    </div>
    <div style="margin-bottom: 20px">
      <el-input placeholder="邮箱验证" v-model="Email" type="email">
        <template slot="prepend"><i class="el-icon-message"></i></template>
        <template slot="append">
          <el-button @click="send" style="cursor: pointer" :disabled="Disabled">{{ sends }}</el-button>
        </template>
      </el-input>
    </div>
    <div style="margin-bottom: 20px">
      <div style="width: 38%;display: inline-block">邮箱验证码：</div>
      <el-input style="width: 60%;" v-model="code" placeholder="请输入邮箱验证码"></el-input>
    </div>

    <div style="text-align: center;margin-bottom: 20px">
      <el-button type="success" @click="submit()" style="width: 70%;height: 50px;font-size: 20px">注册</el-button>
    </div>

    <div>
      <el-checkbox v-model="agree" label="1" style="margin-right: 10px">同意</el-checkbox>
      <a href="" style="display: inline-block">麦博士条款</a>
      <span style="float: right;padding-right: 10px;cursor: pointer;font-size: 14px" @click="go">已有账号，前去登录</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Message} from 'element-ui';

  Vue.prototype.$message = Message;
  export default {
    name: "Register",
    data() {
      return {
        msg: true,
        account: '',
        password: '',
        password1: '',
        Email: '',
        sends: '发送',
        Disabled: false,
        code: '',
        codes: '',
        agree: '',
      }
    },
    methods: {//定义函数
      go() {
        this.$emit('func', this.msg);
      },

      send() {
        let that = this;
        var regEmail = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;
        if (this.Email === '') {
          this.$message.error('输入邮箱为空');
          // this.$message({
          //   message: '输入邮箱为空',
          //   type: 'warning'
          // });
        } else if (!regEmail.test(this.Email)) {
          this.$message.error('邮箱格式不正确');
        } else {

          this.sends = 60;
          this.Disabled = true;
          this.timer = setInterval(function () {
              that.sends--;
              if (that.sends === -1) {
                that.sends = '重新发送';
                that.Disabled = false;
                clearInterval(that.timer);
                that.codes = '';
              }
            }
            , 1000);


          let url = 'http://localhost:8888/mail/getCode';
          // let email = '1446152100@qq.com';

          // console.log(url);
          //  当发起post请求之后， 通过 .then 来设置成功的回调函数
          this.$http.post(url, this.Email).then(result => {
            this.$message.success('邮件已发送！');
            this.codes = result.body.data;
            // console.log(result);

          }, response => {
            this.$message.error('邮件发送失败！');
          });
        }
      },

      submit() {
        if (this.account === '' || this.password === '' || this.password1 === '') {
          this.$message.error('账号或密码为空，请重新输入！');
        } else if (this.code === '') {
          this.$message.error('验证码为空');
        } else if (this.code === this.codes) {
          let url1 = 'http://localhost:8888/user/getUser';
          // console.log(url);
          //  当发起post请求之后， 通过 .then 来设置成功的回调函数
          this.$http.post(url1, this.account).then(result => {
            // console.log(result.body);
            if (result.body.length === 0) {
              if (this.password === this.password1) {
                let user = {
                  "account": this.account,
                  "password": this.password,
                  "email": this.Email,
                  "jurisdiction": "普通成员"
                };
                user = JSON.stringify(user);
                console.log(user);
                let url = 'http://localhost:8888/user/insertUser';
                // console.log(url);
                //  当发起post请求之后， 通过 .then 来设置成功的回调函数
                this.$http.post(url, user).then(result => {
                  this.$message.success('注册成功！');
                  this.go();
                  // console.log(result);
                }, response => {
                  this.$message.error('注册失败！');
                });
              } else {
                this.$message.error('密码不一致，请重新输入！');
              }
            } else {
              this.$message.error('该账号已存在！');
            }
          }, response => {
            this.$message.error('数据库连接失败！');
          });
        } else {
          this.$message.error('验证码错误');
        }
      }
    },
  }
</script>

<style>
  .el-message {
    z-index: 4100 !important;
  }
</style>
