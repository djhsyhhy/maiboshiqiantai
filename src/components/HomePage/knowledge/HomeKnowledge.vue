<template>
  <div style="width: 100%;height: 450px;background-color: #F1F1F1;">
    <homesubtitle v-bind:parentmsg="msg"  v-bind:parentcolor="color" style="position: relative;top: 50px"></homesubtitle>
    <div style="width: 70%;height: 350px;margin: 0 auto;padding-top: 70px">
      <knowledge v-bind:parentmsg="msg1" v-bind:parentsrc="src1" style="float: left"></knowledge>
      <knowledge v-bind:parentmsg="msg2" v-bind:parentsrc="src2" style="float: left;margin-left: 5%"></knowledge>
      <knowledge v-bind:parentmsg="msg3" v-bind:parentsrc="src3" style="float: left;margin-left: 5%"></knowledge>
      <knowledge v-bind:parentmsg="msg4" v-bind:parentsrc="src4" style="float: left;margin-left: 5%"></knowledge>
    </div>
  </div>
</template>

<script>
  import homesubtitle from './../HomeSubtitle'
  import knowledge from './knowledge'
  export default {
    name: "HomeKnowledge",
    components: {
      homesubtitle,
      knowledge
    },
    data() {
      return {
        msg: '知识库',
        color: "#F1F1F1",
        msg1:'栽培篇',
        src1:'./../../../../static/img/zs1.png',//农情宝内容1的图片地址
        msg2: '虫害篇',//农情宝内容2
        src2:'./../../../../static/img/zs2.png',//农情宝内容2的图片地址
        msg3: '品种篇',//农情宝内容3
        src3:'./../../../../static/img/zs3.png',//农情宝内容3的图片地址
        msg4: '营养篇',//农情宝内容4
        src4:'./../../../../static/img/zs4.png',//农情宝内容4的图片地址
      }
    },
    methods: {//定义函数

    }
  }
</script>

<style scoped>

</style>
