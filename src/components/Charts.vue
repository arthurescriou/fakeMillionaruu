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
{{  makeChart("BTC_LTC",15,"minute",1507800000,1507814823)}}
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
</v-container>
</template>

<script>
import CanvasJS from '../assets/canvasjs-1.9.10/canvasjs.min.js';
export default {
  data() {
    return {
      currency: "Ethereum",
      timePeriod: "week",
      items: this.getCurrencies(),
      candlesticks: "15 min",
      img: "/src/assets/images/BTC.png",
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
    nameToTrig() {
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        if (this.$store.state.order.currencies[i].name == this.currenciy)
          return this.$store.state.order.currencies[i].trig;
      }
    },
    getImgCc() {
      for (var i = 0; i < this.$store.state.profil.wallet.length; i++) {
        if (this.$store.state.profil.wallet[i].name == this.nameToTrig())
          return this.$store.state.profil.wallet[i].logo;

      }
    },
    makeChart(pair_currency, period, period_type, start, end) {
      var dataPoints = [];
      console.log(CanvasJS.Chart);
      // var chart = new CanvasJS.Chart("chartContainer", {
      //   animationEnabled: true,
      //   theme: "dark2", // "light1", "light2", "dark1", "dark2"
      //   exportEnabled: true,
      //   title: {
      //     text: pair_currency
      //   },
      //   axisX: {
      //     title: "time",
      //     intervalType: period_type,
      //     interval: period
      //   },
      //   axisY: {
      //     includeZero: false,
      //     prefix: "฿",
      //     title: "Price"
      //   },
      //   toolTip: {
      //     content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
      //   },
      //   data: [{
      //     type: "candlestick",
      //     yValueFormatString: "$##0.00",
      //     dataPoints: dataPoints
      //   }]
      // });
      var candlePeriod = getCandlePeriod(period, period_type);
      var data = {
        pair_currency: pair_currency,
        period: candlePeriod,
        start: start,
        end: end
      }

      console.log(data);
      $.get("https://fakemillionaruuuu-back.herokuapp.com/getChartData", data, getDataPointsfromJson);

      function getDataPointsfromJson(jsonArray) {
        // var parsed = JSON.parse(jsonArray);
        for (var i = 0; i < jsonArray.length; i++) {
          var tmp = jsonArray[i];
          dataPoints.push({
            x: new Date(tmp.date * 1000),
            y: [
              tmp.open,
              tmp.high,
              tmp.low,
              tmp.close
            ]
          });
        }
        chart.render();
      }

      function getCandlePeriod(period, period_type) {
        switch (period) {
          case 5:
            return "FIVE_MINUTES";
          case 15:
            return "FIFTEEN_MINUTES";
          case 30:
            return "THIRTY_MINUTES";
          case 2:
            return "TWO_HOURS";
          case 4:
            return "FOUR_HOURS";
          case 1:
            return "ONE_DAY";

        }
      }
    }

  }
}
</script>

<style lang="css">
</style>
