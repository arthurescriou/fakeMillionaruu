<template lang="html">
  <v-container>
    {{getChartData("BTC_ETH","FIVE_MINUTES",1507811223,1507814823)}}
    <v-card>
        <v-layout>
          <v-flex>
            <v-container>
   <v-card-title primary-title>
             <div>
               <div class="headline">{{currency}}</div>
               <span class="grey--text">{{timePeriod}}</span>
             </div>

   </v-card-title>
   <v-select label="Currency"
  v-model="currency"
  :items="items"
  @change="">
 </v-select>
</v-container>
   </v-flex>
   <v-flex>
   <v-container>
    <v-select label="Candlesticks"
   v-model="candlesticks"
   :items="this.$store.state.order.candlesticks"
   @change="">
  </v-select>
  <v-select label="Time"
 v-model="timePeriod"
 :items="this.$store.state.order.time"
 @change="">
</v-select>
  </v-container>
</v-flex>
</v-layout>
 </v-card>
 <div class="echarts">
   <eChart :option="option"></eChart>
 </div>
</v-container>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
import parseChart from '../JsonParsers/chart.js'
import axios from 'axios';


export default {
  data() {
    return {
      currency: "Ethereum",
      timePeriod: "week",
      items: this.getCurrencies(),
      candlesticks: "15 min",
      img: "/src/assets/images/BTC.png",
      data0: [],
      option: {
        title: {
          text: 'un truc',
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['Une legend']
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: data0.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
        {
          type: 'inside',
          start: 50,
          end: 100
        },
        {
          show: true,
          type: 'slider',
          y: '90%',
          start: 50,
          end: 100
        }
        ],
        series: [
        {
          name: 'ehzafera',
          type: 'candlestick',
          data: data0.values,
          markPoint: {
            label: {
              normal: {
                formatter: function (param) {
                  return param != null ? Math.round(param.value) : ''
                }
              }
            },
            data: [
            {
              name: 'SA aussi',
              coord: ['2013/5/31', 2300],
              value: 2300,
              itemStyle: {
                normal: { color: 'rgb(41,60,85)' }
              }
            },
            {
              name: 'highest value',
              type: 'max',
              valueDim: 'highest'
            },
            {
              name: 'lowest value',
              type: 'min',
              valueDim: 'lowest'
            },
            {
              name: 'average value on close',
              type: 'average',
              valueDim: 'close'
            }
            ],
            tooltip: {
              formatter: function (param) {
                return param.name + '<br>' + (param.data.coord || '')
              }
            }
          },
          markLine: {
            symbol: ['none', 'none'],
            data: [
            [
            {
              name: 'from lowest to highest',
              type: 'min',
              valueDim: 'lowest',
              symbol: 'circle',
              symbolSize: 10,
              label: {
                normal: { show: false },
                emphasis: { show: false }
              }
            },
            {
              type: 'max',
              valueDim: 'highest',
              symbol: 'circle',
              symbolSize: 10,
              label: {
                normal: { show: false },
                emphasis: { show: false }
              }
            }
            ],
            {
              name: 'min line on close',
              type: 'min',
              valueDim: 'close'
            },
            {
              name: 'max line on close',
              type: 'max',
              valueDim: 'close'
            }
            ]
          }
        }
      ]
    }
    };
  },
  methods: {
    getCurrencies() {
      var ret = [];
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        ret.push(this.$store.state.order.currencies[i].name);
      }
      return ret;
    },
    getChartData(pair_currency, period, start, end){
      axios.get(this.$store.state.urlback + this.$store.state.services.chart,
      parseChart.requestChart(pair_currency, period, start, end)
    )
      .then(function(response) {
        console.log(response);
        if (response.data.err)
          if (response.data.err == 200) {
            var categoryData = [];
            var values = [];
            for (var i=0 ; i < response.length ; i++){
              var tmp = response[i]
              categoryData.push(new Date(tmp.date*1000))
              values.push([
                tmp.open,
                tmp.close,
                tmp.low,
							  tmp.high,
              ])
            }
            console.log(categoryData)
            console.console.log(values);
            this.data0 = {
              categoryData: categoryData,
              values: values
            }
          }
        else {
        }
      })
      .catch(function(error) {
        console.log(error.message);
      });
    }
  },
  components: {
    eChart:  IEcharts,
  }
}
</script>

<style scoped>
  .echarts {
    width: 800px;
    height: 400px;
  }
</style>
