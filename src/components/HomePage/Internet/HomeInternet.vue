<template>
  <div style="width: 100%;height: 500px;">
    <homesubtitle v-bind:parentmsg="msg"  v-bind:parentcolor="color" style="position: relative;top: 30px"></homesubtitle>
    <div style="width: 70%;height: 400px;margin: 0 auto;padding-top: 30px">
      <div style="width: 450px;margin: 0 auto">
        <div class="btn" @click="flag = true" :style="{backgroundColor:( flag ? '#ED9700':''), color:( flag ? '#FFFFFF':'' )  }">实时气候</div>
        <div class="btn" @click="flag = false" :style="{backgroundColor:( flag ? '':'#ED9700'), color:( flag ? '':'#FFFFFF' )  }" style="margin-left: 90px">实时图像</div>
      </div>
      <div class="clear"></div>
      <transition enter-active-class="bounceIn" leave-active-class="bounceOut" mode="out-in">
        <div class="ssqh animated" :key="1" v-if="flag">
          <div style="float: left;width: 60%;height: 350px;">
            <Echarts></Echarts>
          </div>
          <div style="float: left;width: 40%;height: 330px; padding-top: 20px">
            <div>
              <img src="../../../../static/img/sun.png" style="float: left;width: 150px;height: 150px;">
              <div style="width: 350px;height: 130px;float:left;padding-left: 10px;padding-top:20px;font-size: 20px;color: #FFFFFF;line-height: 40px">
                <div style="width: 170px;height: 130px;float: left">
                  <span>空气湿度；{{ sd }}℃</span><br/>
                  <span>空气湿度；{{ sd1 }}％</span><br/>
                  <span>土壤湿度；{{ ts }}％</span>
                </div>
                <div style="width: 170px;height: 130px;float: left">
                 <span>风速：{{ fs }}ms</span><br/>
                 <span>风向：{{ fx }}度</span><br/>
                </div>
              </div>
              <div class="clear"></div>
              <div style="width: 510px;height: 180px;" align="center">
                <img src="../../../../static/img/wlbz.png" style="margin: 0 auto;width: 400px;height: 160px">
              </div>
            </div>

          </div>
        </div>
        <div v-else class="ssimg animated" :key="2">
          <InternetImg v-bind:parentmsg="msg1" v-bind:parentsrc="src1" style="float: left"></InternetImg>
          <InternetImg v-bind:parentmsg="msg2" v-bind:parentsrc="src2" style="float: left;margin-left: 5%"></InternetImg>
          <InternetImg v-bind:parentmsg="msg3" v-bind:parentsrc="src3" style="float: left;margin-left: 5%"></InternetImg>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import homesubtitle from './../HomeSubtitle'
  import InternetImg from './internetImg'
  import Echarts from './../Echarts'
  export default {
    name: "internet",
    components: {
      homesubtitle,
      InternetImg,
      Echarts
    },
    data() {
      return {
        msg: '物联网',
        color: '#FFFFFF',
        flag:true,
        sd:23,//空气湿度
        sd1:100,//空气湿度百分比
        fs:12.6,//风速
        fx:275,//风向
        ts:37,//土壤湿度
        src1:'./../../../../static/img/wl1.png',//实时图像地址
        msg1:'许昌长葛5号监测站',//实时图像监测站
        src2:'./../../../../static/img/wl2.png',//实时图像地址
        msg2:'许昌长葛5号监测站',//实时图像监测站
        src3:'./../../../../static/img/wl3.png',//实时图像地址
        msg3:'许昌长葛5号监测站',//实时图像监测站
      }
    },
    methods: {//定义函数

    }
  }
</script>

<style scoped>
  .btn{
    float:left;
    width: 180px;
    height:40px;
    border-radius:20px;
    text-align: center;
    font-size: 25px;
    line-height: 40px;
    cursor: pointer;
  }
  .ssqh{
    margin-top: 20px;
    width: 100%;
    height: 350px;
    background-image: url("../../../../static/img/wlw.png");
  }
  .ssimg{
    margin-top: 20px;
    width: 100%;
    height: 350px;
  }
  .clear{
    clear: both;
  }
</style>
