<template>
  <div style="background-color: #60953E;">
    <div style="width: 70%;height: 100px;margin: 0 auto;text-align: center">
      <span> {{ msg }} </span><br />
      <span> {{ msg1 }} </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBottom",
    data() {
      return {
        msg: '麦博士 版权所有 ©2018 地址：中国•河南•郑州农业路63号(450002)　豫ICP备05002484号',
        msg1:'信息维护：党委宣传部 E-mail：63558627@163.com',
      }
    },
    methods: {//定义函数

    }
  }
</script>

<style scoped>
  span{
    color: #FFFFFF;
    font-size: 20px;
    line-height: 40px;
    position: relative;
    top: 10px;
  }
</style>
