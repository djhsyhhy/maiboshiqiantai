<template>
  <div  style="width: 100%;height: 450px;">
    <homesubtitle v-bind:parentmsg="msg"  v-bind:parentcolor="color" style="position: relative;top: 30px"></homesubtitle>
    <div style="width: 70%;height: 300px;margin: 0 auto;padding-top: 60px">
      <img src="../../../../static/img/our.png" style="width: 46%; height: 330px; float: left"/>
      <div style="float: left;width: 50%;padding-left: 30px">
        <div><el-divider content-position="left">小麦的生产过程</el-divider></div>
        <div style="font-size: 20px;padding-left: 10px;color: #696969;line-height: 36px;">
          <span> 麦博士是关于小麦相关知识的一个网站，为从事农业科研工作和农户种植学习的一个平台。</span><br />
          <span> 小麦是新石器时代的人类对其野生祖先进行驯化的产物，栽培历史已有1万年以上。中亚的广大地区，曾在史前原始社会居民点上发掘出许多残留的实物，其中包括野生和栽培的小麦小穗、籽粒，炭化麦粒、麦穗和麦粒在硬泥上的印痕。</span>
        </div>
        <el-button type="success" style="position: relative; top: 10px">查看详情</el-button>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import homesubtitle from './../HomeSubtitle'
  export default {
    name: "HomeAbout",
    components: {
      homesubtitle,
    },
    data() {
      return {
        msg: '关于我们',
        color:'#FFFFFF',
      }
    },
    methods: {//定义函数

    }
  }
</script>

<style scoped>
  .el-divider__text{
    font-size: 25px;
    color: #60953E;
  }
</style>
