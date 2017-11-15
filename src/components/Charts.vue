<template lang="html">
  <v-container >
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
 <div class="echarts" >
   {{getChartData(getPairCurrency(currency),getCandle(),getStart(),getEnd())}}
   <eChart :option="getOption()"></eChart>
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
      candlesticks: "1 d",
      img: "/src/assets/images/BTC.png",
    };
  },
  methods: {
    getOption() {
      console.log("option "+this.$store.state.charts.values);
      return {
        title: {
          text: '',
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
          name: 'stick',
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
    },
    getCurrencies() {
      var ret = [];
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        ret.push(this.$store.state.order.currencies[i].name);
      }
      return ret;
    },
    getChartData(pair_currency, period, start, end) {
      if (!this.dataLoaded) {
        console.log("data "+period);
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
                  Store.state.charts.categoryData.push(new Date(tmp.date * 1000))
                  Store.state.charts.values.push([
                    tmp.open,
                    tmp.close,
                    tmp.low,
                    tmp.high,
                  ])
                  // if(this.option){
                  //   this.option.series.data = Store.state.charts.values
                  //   this.option.xAxis.data = Store.state.charts.categoryData
                  // }
                }
              }
            else {}
          })
          .catch(function(error) {
            console.error(error.message);
          });
        this.dataLoaded = true;
      }
    },
    getPairCurrency() {
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        var current = this.$store.state.order.currencies[i]
        if (this.currency == current.name) {
          return "BTC_" + current.trig
        }
      }
    },
    getCandle() {
      if (this.candlesticks.localeCompare("5 min") == 0) {
        return "FIVE_MINUTES";
      } else if (this.candlesticks.localeCompare("15 min") == 0) {
        return "FIFTEEN_MINUTES";
      } else if (this.candlesticks.localeCompare("30 min") == 0) {
        return "THIRTY_MINUTES";
      } else if (this.candlesticks.localeCompare("2 h") == 0) {
        return "TWO_HOURS";
      } else if (this.candlesticks.localeCompare("4 h") == 0) {
        return "FOUR_HOURS";
      }
      return 'ONE_DAY';
    },
    getEnd() {
      return Math.floor((new Date).getTime()/1000);
    },
    getStart() {
      if (this.timePeriod.localeCompare("year") == 0) {
        return Math.floor((new Date).getTime()/1000 - 31556926);
      } else if (this.timePeriod.localeCompare("month") == 0) {
        return Math.floor((new Date).getTime()/1000 - 2629743);
      } else if (this.timePeriod.localeCompare("week") == 0) {
        return Math.floor((new Date).getTime()/1000 - 604800);
      } else if (this.timePeriod.localeCompare("day") == 0) {
        return Math.floor((new Date).getTime()/1000 - 86400);
      } else if (this.timePeriod.localeCompare("hour") == 0) {
        return Math.floor((new Date).getTime()/1000 - 3600);
      }
      return 0;
    },

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
