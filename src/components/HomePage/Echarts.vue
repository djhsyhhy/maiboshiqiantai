<template>
    <div>
      <div style="width:100%;height:350px;" :id="echarts" class="echarts"  ref="echarts"></div>
    </div>
</template>

<script>
  // 引入echarts
  import echarts from 'echarts'
  export default {
    name: 'EchartsComponents',
    // props: {
    //   // 接收父组件传递过来的信息
    //   chartData: {
    //     type: Array,
    //     default: ()=>[]
    //   }
    // },
    data () {
      return {
        data1:['10:20', '10:30', '10:40', '10:50', '11:00', '11:10', '11:20','11:30'],
        data2:[1, 2, 4, 5, 7, 10, 14, 22],
      }
    },
    methods: {
      drawChart () {
        // 基于准备好的dom，初始化echarts实例
        var myChart =echarts.init(document.getElementById(this.echarts))
        // 绘制图表
        myChart.setOption({
          xAxis: {
            data: this.data1,
            axisTick:{       //x轴刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false,
            },
            axisLine:{       //y轴
              show:false,
              lineStyle:{
                color:'#FFFFFF',
                width:8,//这里是为了突出显示加上的
              }
            }
          },
          yAxis: {
            axisTick:{       //y轴刻度线
              show:false
            },
            axisLine:{       //y轴
              show:false,
              lineStyle:{
                color:'#FFFFFF',
                width:8,//这里是为了突出显示加上的
              }
            }
          },
          series: [{
            data: this.data2,
            type: 'line',
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: "#FFFFFF",
                lineStyle: {
                  color: "#FFFFFF"
                }
              }
            }
          }]
        })
      }
    },
    computed: {
      echarts() {
        return 'echarts' + Math.random()*100000
      }
    },
    mounted: function () {
      const vm = this;
      vm.$nextTick(()=> {
        vm.drawChart()
      })
    }
  }
</script>

<style scoped>

</style>
