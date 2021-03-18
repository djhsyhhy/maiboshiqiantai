<template>
  <div class="block">
    <el-carousel trigger="click" height="540px">
      <el-carousel-item v-for="item in 3" :key="item">
        <img :src="parentsrc1+item+parentsrc2" style="width: 100%;height: 100%;" alt="banner">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        name: "Carousel",
        data() {
            return {
            }
        },
        props: ['parentsrc1','parentsrc2'], // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据  props 中的数据，都是只读的，无法重新赋值
        methods: {//定义函数

        }
    }
</script>

<style scoped>

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
