<template>
  <div>
    <Carousel v-bind:parentsrc1="src1" v-bind:parentsrc2="src2" style=""></Carousel>
    <HomeNews></HomeNews>
    <div class="clear"></div>
    <HomeAgricultural></HomeAgricultural>
    <HomeInternet></HomeInternet>
    <HomeKnowledge></HomeKnowledge>
    <HomeAbout></HomeAbout>
  </div>
</template>

<script>
  import NavHead from '../NavHead'
  import Carousel from './Carousel'
  import HomeNews from './news/HomeNews'
  import HomeAgricultural from './agricultural/HomeAgricultural'
  import HomeInternet from './Internet/HomeInternet'
  import HomeKnowledge  from './knowledge/HomeKnowledge'
  import HomeAbout from './about/HomeAbout'
  import HomeBottom from '../HomeBottom'


    export default {
        name: "home",
      components: {
        NavHead,
        Carousel,
        HomeNews,
        HomeAgricultural,
        HomeInternet,
        HomeKnowledge,
        HomeAbout,
        HomeBottom
      },
        data() {
            return {
              src1:'./../../../static/img/banner',
              src2:'.png'
            }
        },
        methods: {//定义函数

        }
    }
</script>

<style>
  .clear{
    clear: both;
  }
</style>
