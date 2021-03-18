<template>
  <div class="swiper-container">
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!--第一屏-->
      <swiper-slide class="section sectionA stop-swiping">
        <div class="bg">
          <div v-show="index === 0" class="bg12 animated fadeInUp"></div>
          <div class="bg13"></div>
          <strong v-show="index === 0" class="animated fadeInLeft">[农情信息采集app]</strong>
          <h3 v-show="index === 0" class="animated fadeInRight">互联网+农业，产业融合新时代</h3>
          <div class="bg14">
            <img src="./../../../static/img/bg14.png">
          </div>
          <div class="bg15">
            <img src="./../../../static/img/phone.png">
          </div>
        </div>
      </swiper-slide>
      <!--第二屏-->
      <swiper-slide class="section sectionB stop-swiping">
        <div v-show="index === 1" class="title animated fadeInDown">
          <span>产品优势</span>
        </div>
        <ul class="content">
          <li  class="" style="margin-left: 100px;">
            <div v-show="index === 1" class="divlg animated fadeInUp">
              <div style="width: 100%;height: 27px;"></div>
              <img src="./../../../static/img/section24.png">
              <div class="cont">
                <h3>App详情</h3>
                <p>农情信息采集App是可以去田间数据采样，为农业科研人员以及从事农业相关的农户提供方便。</p>
              </div>
            </div>
          </li>
          <li>
            <div v-show="index1 === 1" class="divlg animated fadeInUp">
              <div style="width: 100%;height: 27px;"></div>
              <img src="./../../../static/img/section22.png">
              <div class="cont">
                <h3>采样模板</h3>
                <p>采样模板是可以设置行、列数，设置植物品种及施肥方案，采样时间、位置、经纬度以及采样负责人。</p>
              </div>
            </div>
          </li>
          <li>
            <div v-show="index2 === 1" class="divlg animated fadeInUp">
              <div style="width: 100%;height: 27px;"></div>
              <img src="./../../../static/img/section23.png">
              <div class="cont">
                <h3>互联网</h3>
                <p>互联网+农业=产业融合新时代，共创新未来，为农业发展提供更好平台。</p>
              </div>
            </div>
          </li>
          <li>
            <div v-show="index3 === 1" class="divlg animated fadeInUp">
              <div style="width: 100%;height: 27px;"></div>
              <img src="./../../../static/img/section21.png">
              <div class="cont">
                <h3>规划图管理</h3>
                <p>规划图管理会展示一个种植规划图的展示，对已设置的品种以及施肥状况的展示。</p>
              </div>
            </div>
          </li>
        </ul>
      </swiper-slide>
      <!--第三屏-->
      <swiper-slide class="section sectionC stop-swiping">
        <div v-show="index === 2" class="title animated fadeInDown">
          <h2>app页面展示</h2>
        </div>
        <div v-show="index === 2" class="wind animated fadeInUp">
          <div class="maindiv" style=" background:#E7B8DB;left: 750px">
            <img src="./../../../static/img/app1.png">
            <div>
              <h4>施肥种类及方法</h4>
              <p>可根据所选品种，设置相应的施肥种类及方法，同时还可以添加相应的施肥种类及方法。</p>
            </div>
          </div>
          <div class="maindiv" style=" background:#F1A592;left: 780px">
            <img src="./../../../static/img/app2.png">
            <div>
              <h4>清空本地数据</h4>
              <p>在采样模板里可以设置行数、列数、植物品种、植物施肥及方法、编辑采样项目、采样时间、位置、经纬度、采样负责人等数据，所以就有了清空本地数据的功能。</p>
            </div>
          </div>
          <div class="maindiv" style=" background:#DEEC9F;left: 810px">
            <img src="./../../../static/img/app3.png">
            <div>
              <h4>种植规划图</h4>
              <p>种植规划图就是针对之前所设置的各种数据以表格的形式呈现出来，当你点击任一表格就会显示详细的信息数据。</p>
            </div>
          </div>
          <div class="maindiv" style=" background:#ACE059;left: 840px">
            <img src="./../../../static/img/app4.png">
            <div>
              <h4>主页</h4>
              <p>农情采集系统的首页展示，两个主功能，一个是采样模板，它可以设置各种数据，进行田间采样；另一个是规划图管理，针对上一个功能里所设置的各种数据，在规划图管理里以表格的形式展现出来。</p>
            </div>
          </div>
          <div class="maindiv" style=" background:#85E49D;left: 870px">
            <img src="./../../../static/img/app5.png">
            <div>
              <h4>试验田规格设置</h4>
              <p>试验田规格设置有行数、列数、社会植物品种、施肥及方法以及采样时间的设置。</p>
            </div>
          </div>
          <div class="maindiv" style=" background:#9DE5F1;left: 900px">
            <img src="./../../../static/img/app6.png">
            <div>
              <h4>种植规划图</h4>
              <p>种植规划图可以设置各种参数，设置完各种参数后，点击完成即可。</p>
            </div>
          </div>
          <div class="maindiv" style=" background:#B5B9F1;left: 930px">
            <img src="./../../../static/img/app7.png">
            <div>
              <h4>采样模板</h4>
              <p>采样模板是可以设置行、列数，设置植物品种及施肥方案，采样时间、位置、经纬度以及采样负责人。</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!--第四屏-->
      <swiper-slide class="section sectionD stop-swiping">
        <div v-show="index === 3" class="bgD2 animated zoomIn"></div>
        <div v-show="index === 3" class="bgD3 animated zoomIn"></div>
        <a v-show="index1 === 1" class="go animated fadeInUp" href="#">马上体验</a>
          <span style="position: relative; top: 500px">再次向下滚动返回首页</span>
      </swiper-slide>
      <!--第五屏-->
      <swiper-slide class="stop-swiping">
        拜拜
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import './../../../static/css/swiper.css'
  import './../../../static/css/common.css'
  import bus from '@/assets/eventbus';

  export default {
    data() {
      const that = this;
      return {
        swiperOption: {
          direction: 'vertical',//竖向
          slidesPerView: 1,//屏幕展示的屏
          speed: 700,//每页滚动时间
          mousewheel: true,//开启鼠标滚轮
          preventInteractionOnTransition: true,//切换时滑动无效直到切换结束
          noSwiping: true,//禁止鼠标点击滑动 加上下面定义的类就可以了
          allowSlideNext: true,//滑动到下一个
          noSwipingClass: 'stop-swiping',
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          on: {
            slideChangeTransitionStart: function(){
              that.index = this.activeIndex;
              if(this.activeIndex === 4){
                bus.$emit("userDefinedEvent","AgriculturalCenter");//同级组件传值给NavHead
                console.log("我发送了");
                that.$router.push({path:'/',params:{name:'AgriculturalCenter'}});
              }
            },
            slideChangeTransitionEnd: function(){
              that.index = this.activeIndex;
              // if(this.activeIndex === 3){
              //   this.allowSlideNext = false;
              // }else{
              //   this.allowSlideNext = true;
              // }


              //alert(that.index)
              //alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
            init: function(){
              //Swiper初始化了
              that.index = this.activeIndex;
              // alert('当前的slide序号是'+this.activeIndex);
            },
          },
        },
        index:'',
        index1:0,
        index2:0,
        index3:0,
        n:0

        // indexhome:''

      }
    },
    beforeDestroy(){
      this.index = '';
      this.index1=0;
      this.index2=0;
      this.index3=0;
    },
    watch:{
      index(newVal) {
        // swiper-pagination-bullet
        var that = this;
        if (newVal === 1 || newVal === 3){
          setTimeout(function (){
            that.index1 = 1;
          }, 100);
          setTimeout(function (){
            that.index2 = 1;
          }, 200);
          setTimeout(function (){
            that.index3 = 1;
          }, 300);
        }else{
          that.index1 = 0;
          that.index2 = 0;
          that.index3 = 0;
          if (newVal === 2 && this.n === 0){
            this.n=1;
            setTimeout(function (){
              that.initshou();
            }, 300);
          }
        }
      }
    },
    mounted() {

    },
    methods: {
      initshou(){
        var divlist = document.getElementsByClassName('maindiv');
        var arr = new Array();
        var array = new Array();

        for (var i = 0; i < divlist.length; i++) {
          array[i] = divlist[i].style.left;
          // console.log(divlist[i].style.left);
          // console.log(divlist[i].offsetLeft);
          var a = divlist[i].offsetLeft - 750;
          arr[i] = a + "px";

          divlist[i].index = i;
          divlist[i].onmouseover = function () {
            fun(this.index);
          }
        }
        divlist[0].style.left = arr[0];



        function fun1(n) {
          divlist[n].onmouseover = function () {
            fun(divlist[n].index);
          }
        }

        function fun(s) {
          for (var n = 0; n < divlist.length; n++) {
            if (n <= s) {
              zk(n);
            } else {
              gb(n);
            }

          }
        }

        function zk(n) {
          if (divlist[n].style.left === array[n]) {
            divlist[n].style.left = arr[n];
            divlist[n].onmouseover = '';
            divlist[n].onmouseout = function () {
              fun1(n);
            }
          }
        }

        function gb(n) {
          if (divlist[n].style.left != array[n]) {
            // console.log(arr.length);
            divlist[n].style.left = array[n];
          }
        }
      }
    }
  }
</script>


<style>
  .swiper-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1001;
  }

  .swiper-pagination-bullet{
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: #7a7a7a;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active{
    background-color: chartreuse!important;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
