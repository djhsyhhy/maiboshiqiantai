<template>
  <div>
    <div v-show="parentmsg =='vertical'">
      <img :src="parentsrc" style="width: 90%; height: 360px;"/>
      <div style="width: 90%;"><el-divider content-position="left">{{ parenttitle }}</el-divider></div>
      <div style="width: 90%; font-size: 20px;padding-left: 10px;color: #696969"><span>{{ parentnews }}</span></div>

    </div>
    <div v-show="parentmsg =='transverse'" style="margin-bottom: 15px">
      <img :src="parentsrc" style="width: 35%; height: 145px; float: left"/>
      <div style="float: left;width: 60%;padding-left: 10px">
        <div><el-divider content-position="left">{{ parenttitle }}</el-divider></div>
        <div style="font-size: 20px;padding-left: 10px;color: #696969;line-height: 30px"><span>{{ parentnews }}</span></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Newshome",
        data() {
            return {
            }
        },
        props:[
          'parentmsg',
          'parentsrc',
          'parentnews',
          'parenttitle'
        ],
        methods: {//定义函数

        }

    }
</script>

<style scoped>
  .el-divider__text{
    font-size: 25px;
  }

  .clear{
    clear: both;
  }
</style>
