<template>
      <div data-v-b1f3a2d0="" data-v-5c4d57c6="" class="subtitle" style="">
        <div data-v-b1f3a2d0="" class="el-divider el-divider--horizontal">
          <div data-v-b1f3a2d0="" class="el-divider__text is-center" :style="{ backgroundColor:parentcolor }" @click="go()">
            {{ parentmsg }}
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "HomeSubtitle",
        data() {
            return {
              msg:'background:',
              url:'/NavHead'
            }
        },
      props:[
        'parentmsg',
        'parentcolor'
      ],
        methods: {//定义函数
          go(){
            this.$router.push('/');
          }
        },
    }
</script>

<style scoped>

  .subtitle{
    text-align: center;
    margin: 0 auto;
    width: 250px;
    cursor:default;
  }
  .el-divider__text{
    font-size: 25px;
    color: #60953E;
    padding: 0 10px;
    cursor: pointer;
  }
  .el-divider{
    background-color: #60953E;
  }
</style>
