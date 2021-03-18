<template>
    <div class="main">
      <img class="img1" src="./../../static/img/LoginBgColor.jpg" alt="">
      <div class="zz">
        <div class="LandR">
            <Login v-if="flag" @func="getMsgFormSon"></Login>
            <Register v-else  @func="getMsgFormSon"></Register>
        </div>
      </div>
    </div>
</template>

<script>
  import Login from './Login'
  import Register from './Register'
    export default {
        name: "UserLogin",
      components: {
        Login,
        Register
      },
        data() {
            return {
              flag: '',//是否有账号登录  true为登录状态  false为注册状态
            }
        },
      created() {
        this.getRouterData()
      },
        methods: {//定义函数
          getMsgFormSon(data){
            this.flag = data;
          },
          getRouterData() {
            this.flag = this.$route.params.LoginRegister;
          }

        },
    }
</script>

<style scoped>
  .main{
    margin: 0 auto;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 4000;
  }

  .main .img1{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 4001;
  }

  .zz{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(144,147,153,0.6);
    /*text-align: center;*/
    /*line-height: 50;*/
    z-index: 5000;
  }

  .LandR{
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    margin: 10% auto 0;
    width: 20%;
    height: 50%;
    /*background-color: #e4d448;*/
  }
</style>
