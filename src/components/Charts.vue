<template lang="html">
  <v-container>
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
  @change="dataLoaded = false">
 </v-select>
</v-container>
   </v-flex>
   <v-flex>
   <v-container>
    <v-select label="Candlesticks"
   v-model="candlesticks"
   :items="this.$store.state.order.candlesticks"
   @change="dataLoaded = false">
  </v-select>
  <v-select label="Time"
 v-model="timePeriod"
 :items="this.$store.state.order.time"
 @change="dataLoaded = false">
</v-select>
  </v-container>
</v-flex>
</v-layout>
 </v-card>
 <div class="echarts">
     {{getChartData(getPairCurrency(currency),"FIVE_MINUTES",1507811223,1507814823)}}
   <eChart :option="option"></eChart>
   {{this.$store.state.charts}}
 </div>
</v-container>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
import parseChart from '../JsonParsers/chart.js'
import axios from 'axios';
import Store from '../store/store.js';


export default {
  data() {
    return {
      dataLoaded: false,
      currency: "Ethereum",
      timePeriod: "week",
      items: this.getCurrencies(),
      candlesticks: "15 min",
      img: "/src/assets/images/BTC.png",
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
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: this.$store.state.charts.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: {
            onZero: false
          },
          splitLine: {
            show: false
          },
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
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            show: true,
            type: 'slider',
            y: '90%',
            start: 0,
            end: 100
          }
        ],
        series: [{
          name: 'ehzafera',
          type: 'candlestick',
          data: this.$store.state.charts.values,
          markPoint: {
            label: {
              normal: {
                formatter: function(param) {
                  return param != null ? Math.round(param.value) : ''
                }
              }
            },

            tooltip: {
              formatter: function(param) {
                return param.name + '<br>' + (param.data.coord || '')
              }
            }
          },
        }]
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
    getChartData(pair_currency, period, start, end) {
      if (!this.dataLoaded) {
        Store.state.charts.categoryData = [];
        Store.state.charts.values = [];
        axios.get(this.$store.state.urlback + this.$store.state.services.chart,
            parseChart.requestChart(pair_currency, period, start, end)
          )
          .then(function(response) {
            console.log(response);
            if (response.status)
              if (response.status == 200) {
                for (var i = 0; i < response.data.length; i++) {
                  var tmp = response.data[i]
                  console.log(tmp)
                  Store.state.charts.categoryData.push(new Date(tmp.date * 1000))
                  Store.state.charts.values.push([
                    tmp.open,
                    tmp.close,
                    tmp.low,
                    tmp.high,
                  ])
                }
              }
            else {}
          })
          .catch(function(error) {
            console.log(error.message);
          });
          this.dataLoaded = true;
      }
    },
    getPairCurrency(current) {
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        var currency = this.$store.state.order.currencies[i]
        if (current == currency.name) {
          return "BTC_" + currency.trig
        }
      }
    },
    getPeriod(current) {

    }
  },
  components: {
    eChart: IEcharts,
  }
}
</script>

<style scoped>
.echarts {
  width: 800px;
  height: 400px;
}
</style>
