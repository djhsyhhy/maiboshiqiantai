<template>
  <div class="Agcenter" @mouseenter="enter()" @mouseleave="leave()">
    <img :src="parentsrc" style="width: 100%;height: 290px;z-index: 10">
    <div class="Agbottom"  :style="{ backgroundColor:parentcolor }">
      <transition>
        <div v-show="flag" class="sj" :style="{ borderBottomColor:parentcolor }"></div>
      </transition>
      <div class="sp">
        {{ parentmsg }}
        <div class="gd">更多<i class="el-icon-arrow-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Agricultural",
    data() {
      return {
        flag: false,
      }
    },
    props:[
      'parentmsg',
      'parentcolor',
      'parentsrc'
    ],
    methods: {//定义函数
      enter(){
        this.flag = true;
      },
      leave(){
        this.flag = false;
      }
    }
  }
</script>

<style scoped>
  .Agcenter{
    width: 21.25%;
    height: 400px;
  }
  .Agbottom{
    width: 100%;
    height: 100px;
    background-color: burlywood;
    position: relative;
    top: -5px;
  }

  /*动画的移动距离*/
  .v-enter,
  .v-leave-to {
    transform: translateY(24px);
  }

  /* v-enter-active 【入场动画的时间段】 */
  /* v-leave-active 【离场动画的时间段】 */
  .v-enter-active,
  .v-leave-active{
    transition: all 0.8s ease;
  }

  .sp{
    z-index: 30;
    width: 100%;
    position: absolute;
    font-size: 26px;
    top: 10px;
    color: #FFFFFF;
    font-family: 宋体;
    text-align: center;
  }

  .gd{
    width: 40%;
    height: 30px;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    color: #FFFFFF;
    background-color: rgba(255,255,255,0.3);
    border-radius: 15px;
    font-size: 20px;

  }

  .sj{
    position: relative;
    top: -24px;
    z-index: 20;
    margin: 0 auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    border-width: 0px 14px 24px 14px;
  }
</style>
