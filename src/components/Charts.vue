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
    }
  }
}
</script>
