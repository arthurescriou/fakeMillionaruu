<template lang="html">
  <v-container>
    <v-card>

        <v-layout>
          <v-flex>
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

</v-container>
</template>

<script>
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
    }
  }
}
</script>

<style lang="css">
</style>
