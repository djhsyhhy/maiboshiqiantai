<template>
    <div style="width: 100%;height: 500px;background-color: #F1F1F1;">
      <homesubtitle v-bind:parentmsg="msg"  v-bind:parentcolor="color" style="position: relative;top: 50px"></homesubtitle>
      <div style="width: 70%;height: 400px;margin: 0 auto;padding-top: 50px">
        <Agricultural v-bind:parentmsg="msg1"  v-bind:parentcolor="color1" v-bind:parentsrc="src1" style="float: left"></Agricultural>
        <Agricultural v-bind:parentmsg="msg2"  v-bind:parentcolor="color2" v-bind:parentsrc="src2" style="float: left;margin-left: 5%"></Agricultural>
        <Agricultural v-bind:parentmsg="msg3"  v-bind:parentcolor="color3" v-bind:parentsrc="src3" style="float: left;margin-left: 5%"></Agricultural>
        <Agricultural v-bind:parentmsg="msg4"  v-bind:parentcolor="color4" v-bind:parentsrc="src4" style="float: left;margin-left: 5%"></Agricultural>
      </div>
    </div>
</template>

<script>
  import homesubtitle from './../HomeSubtitle'
  import Agricultural from './Agricultural'
    export default {
      name: "HomeAgricultural",
      components: {
        homesubtitle,
        Agricultural,
      },
      data() {
          return {
            msg: '农情宝',//小标题内容
            color:'#F1F1F1',//小标题背景色
            msg1: '数据采集',//农情宝内容1
            src1:'./../../../../static/img/nq1.png',//农情宝内容1的图片地址
            color1: '#0599EB',//农情宝内容1的背景色
            msg2: '麦情检测',//农情宝内容2
            src2:'./../../../../static/img/nq2.png',//农情宝内容2的图片地址
            color2: '#5EC241',//农情宝内容2的背景色
            msg3: '品种推荐',//农情宝内容3
            src3:'./../../../../static/img/nq3.png',//农情宝内容3的图片地址
            color3: '#FCA527',//农情宝内容3的背景色
            msg4: '营养检测',//农情宝内容4
            src4:'./../../../../static/img/nq4.png',//农情宝内容4的图片地址
            color4: '#F16937',//农情宝内容4的背景色
          }
      },
      methods: {//定义函数

      }

    }
</script>

<style scoped>

</style>
