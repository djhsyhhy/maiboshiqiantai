<template>
  <div class="head">
    <div class="head_m">
      <div style="display: inline-block; height: 142px;">
        <img src="../../static/img/logo1.png"/>
      </div>
      <el-menu
        :default-active="activeIndex"
        :active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#60953E"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height: 80px; display: inline-block;position: absolute; margin-left: 20px;width: 35%;">
        <el-menu-item id="home" index="1" @click="go('home')" style="width: 17%;">首页</el-menu-item>
        <el-menu-item id="AgriculturalCenter" index="2" @click="go('AgriculturalCenter')" style="width: 18%;">农情宝
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title" style=" height: 80px!important;line-height: 80px!important;width: 20%">物联网</template>
          <el-menu-item index="3-1" class="elMenuItemF" @click="go('InternetImg')" style="width: 100%;">物联网实时图像
          </el-menu-item>
          <el-menu-item index="3-2" class="elMenuItemF" @click="go('InternetClimate')" style="width: 100%;">物联网实时气候
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title" style=" height: 80px!important;line-height: 80px!important; width: 20%">知识库</template>
          <el-menu-item index="4-1" class="elMenuItemF" style="width: 100%;">栽培篇</el-menu-item>
          <el-menu-item index="4-2" class="elMenuItemF" style="width: 100%;">虫害篇</el-menu-item>
          <el-menu-item index="4-3" class="elMenuItemF" style="width: 100%;">品种篇</el-menu-item>
          <el-menu-item index="4-4" class="elMenuItemF" style="width: 100%;">营养篇</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" style="width: 19%;">关于我们</el-menu-item>
      </el-menu>
      <div style="position: absolute; display: inline-block; margin: 20px 20px; left: 63%; width: 14%;">
        <input type="password" style="position: absolute; z-index: -1000;">
        <el-input placeholder="请输入搜索内容" v-model="input1" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div v-if="loginstate" style="position: absolute; display: inline-block; color: #FFF; left: 79%; top: 28px; ">

        <el-dropdown>
      <span class="el-dropdown-link" style="color: white;cursor: pointer">
        {{ accountstate }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="jurisdictionstate === '管理员'|| jurisdictionstate === '超级管理员' "><span
              style="width: 100%;height: 100%" @click="backstage">后台管理</span></el-dropdown-item>
            <el-dropdown-item><span style="width: 100%;height: 100%" @click="signout">退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
      <div v-else style="position: absolute; display: inline-block; color: #FFF; left: 79%; top: 28px; ">
        <span style="cursor: pointer" @click="go('UserLogin',true)">登录</span>
        <el-divider direction="vertical"></el-divider>
        <span style="cursor: pointer" @click="go('UserLogin',false)">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '@/assets/eventbus';
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "head",
    computed: {
      ...mapState({
        loginstate: state => {
          return state.user.loginstate
        },
        accountstate: state => {
          return state.user.accountstate
        },
        jurisdictionstate: state => {
          return state.user.jurisdictionstate
        },
        passwordstate: state => {
          return state.user.passwordstate
        },
      }),
    },
    data() {
      return {
        msg: '',
        activeIndex: "1",
        input1: '',
        Login: true,
        register: false,
        userObj: '',
      }
    },
    watch: {
      msg(newVal) {
        if (newVal === "AgriculturalCenter") {
          if (this.activeIndex === "1") {
            this.activeIndex = 1;
          } else {
            this.activeIndex = "1";
          }
        }
        this.msg = '';
      }
    },
    mounted() {
      var self = this;
      bus.$on("userDefinedEvent", function (msg) {//同级组件接收农情宝的值
        self.msg = msg;
      });
      bus.$on("userObject", function (userObj) {//同级组件接收Login的值
        self.userObj = JSON.stringify(userObj);
      });
    },
    methods: {
      ...mapActions(["deaction"]),
      signout() {
        this.deaction();
      },
      backstage() {
        let url = 'http://localhost:8085/#/login?account=' + this.accountstate + '&password=' + this.passwordstate;
        // console.log(url);
        window.open(url);
        // let url11 = 'http://localhost:8888/user/postUser';
        // this.$http.post(url11, this.userObj).then(result => {
        //   // console.log(result);
        //   if (result.body == 1) {
        //     let url = 'http://localhost:8085/#/login?account='+this.userObj.account+'password='+this.userObj.password;
        //     console.log(url);
        //     window.open(url);
        //   }else{
        //     this.$message.error('请重新进入管理系统！');
        //   }
        // }, response => {
        //   this.$message.error('当前连接人数较多，请稍等！');
        // });
      },
      go(a, s) {
        if (a === 'home') {
          this.$router.push('/');
        } else if (a === 'UserLogin') {
          this.$router.push({
            name: a,
            params: {
              LoginRegister: s,
            }
          });
        } else {
          this.$router.push(a);
        }
      },

    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 80px;
    background-color: #60953E;
  }

  .el-menu {
    border-bottom: 0px;
  }

  .el-menu-item {
    height: 80px !important;
    line-height: 80px !important;
    font-size: 18px;
    text-align: center;
  }

  .elMenuItemF {
    height: 50px !important;
    line-height: 50px !important;
    font-size: 18px;
    text-align: center;
    /*width: 150px;*/
  }

  .head_m {
    width: 70%;
    height: 80px;
    margin: 0 auto;
  }
</style>
<style>
  .el-submenu__title {
    height: 80px !important;
    line-height: 80px !important;
    font-size: 18px;
    padding: 0 38px;
  }

  .el-submenu__title i {
    color: #92f5e2;
  }

  .el-menu--popup {
    min-width: 150px;
  }
</style>
