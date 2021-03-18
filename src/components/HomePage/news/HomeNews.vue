<template>
    <div style="width: 70%;height: 500px;margin: 0 auto;">
      <homesubtitle :parentmsg="msg"  :parentcolor="color" style="margin-top: 50px;"></homesubtitle>
      <div class="vertical">
        <newshome :parentmsg="vertical" :parentsrc="src1" :parentnews="news1" :parenttitle="title1"></newshome>
      </div>
      <div class="transverse">
        <newshome :parentmsg="transverse" :parentsrc="src2" :parentnews="news2" :parenttitle="title2"></newshome>
        <newshome :parentmsg="transverse" :parentsrc="src3" :parentnews="news3" :parenttitle="title3"></newshome>
        <newshome :parentmsg="transverse" :parentsrc="src4" :parentnews="news4" :parenttitle="title4"></newshome>
      </div>
    </div>
</template>

<script>
  import homesubtitle from '../HomeSubtitle'
  import newshome from './Newshome'
  import api from './../../../api/index'
    export default {
        name: "HomeNews",
      components: {
        homesubtitle,
        newshome,
      },
        data() {
            return {
              msg: '新闻中心',
              transverse:'transverse',//横着
              vertical:'vertical',//竖着
              src1:'./../../../../static/img/news1.png',//四张图片的地址
              src2:'./../../../../static/img/news2.png',
              src3:'./../../../../static/img/news3.png',
              src4:'./../../../../static/img/news4.png',
              news1:'',//消息内容
              news2:'',//消息内容
              news3:'',//消息内容
              news4:'',//消息内容
              color:'#FFFFFF',
              title1:'',
              title2:'',
              title3:'',
              title4:'',
            }
        },
      mounted() {//第四个生命周期函数 已渲染到页面中
        var that = this;
        this.getT();
        setInterval(function () {
            that.getT();
          }
          ,5000);
      },
      methods: {//定义函数
        getT() { // 发起get请求
          var that = this;
          //  当发起get请求之后， 通过 .then 来设置成功的回调函数
          this.$http.get('http://localhost:8888/getpage?pageNum=1&pageSize=4').then(function (result) {
            // 通过 result.body 拿到服务器返回的成功的数据
            // console.log(result.body[0]);
            for(var i = 0; i < result.body.length; i++){
              switch (i){
                case 0:
                  that.title1 = result.body[i].btitle;
                  that.news1 = result.body[i].introduction;
                case 1:
                  that.title2 = result.body[i].btitle;
                  that.news2 = result.body[i].introduction;
                case 2:
                  that.title3 = result.body[i].btitle;
                  that.news3 = result.body[i].introduction;
                case 3:
                  that.title4 = result.body[i].btitle;
                  that.news4 = result.body[i].introduction;
              }
            }
          })
        },
      }
    }
</script>

<style scoped>

  .vertical{
    float: left;
    width: 45%;
  }
  .transverse{
    float: left;
    width: 55%
  }
  .clear{
    clear: both;
  }

</style>
