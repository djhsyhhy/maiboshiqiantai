<template>
  <div style="width: 30%;height: 100%;">
    <img :src="parentsrc" style="width: 100%;height: 280px;">
    <div class="btn">{{ parentmsg }}</div>
  </div>
</template>

<script>
  export default {
    name: "internetImg",
    data() {
      return {
        msg: ''
      }
    },
    props:[
      'parentmsg',
      'parentsrc'
    ],
    methods: {//定义函数

    }
  }
</script>

<style scoped>
  .btn{
    margin: 20px auto;
    width: 260px;
    height:40px;
    border-radius:20px;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    cursor: pointer;
    background-color: #ED9700;
    color: #FFFFFF;
  }
</style>
