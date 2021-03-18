<template>
  <div class="kncenter">
    <img :src="parentsrc" style="width: 100%;height: 220px;z-index: 10">
    <div class="Agbottom">
      <div class="sp">
        {{ parentmsg }}
        <div class="xq">查看详情<i class="el-icon-arrow-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "knowledge",
    data() {
      return {}
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

  .kncenter{
    width: 21.25%;
    height: 350px;
  }
  .Agbottom{
    width: 100%;
    height: 100px;
    position: relative;
    top: 10px;
  }
  .sp{
    z-index: 30;
    width: 100%;
    position: absolute;
    font-size: 26px;
    top: 15px;
    color: #60953E;
    font-family: 宋体;
    text-align: center;
    font-weight:700;
  }

  .xq{
    width: 60%;
    height: 30px;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    color: #60953E;
    background-color: rgba(255,255,255,0.3);
    border-radius: 15px;
    border: 1px solid #60953E;
    font-size: 20px;

  }

</style>
