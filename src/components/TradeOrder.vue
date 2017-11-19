<template lang="html">

  <v-container>
    <v-card>
      <v-layout row>
        <v-flex lg6  >
          <v-container>
            <v-layout row>
              <v-flex lg6>
            <v-layout row>
              <v-flex lg6>
            <h2>
              Sell
            </h2>
          </v-flex>
          <v-flex lg6>
            <v-list-tile-avatar>
              <img v-bind:src="getImg(currencySell)"/>
            </v-list-tile-avatar>
          </v-flex>
          </v-layout>
          </v-flex>
          <v-flex lg6>
            <v-container>
              <v-select v-bind:items="getCurrencies()" v-model="currencySell" label="Currency" single-line bottom></v-select>
            </v-container>
          </v-flex>
          </v-layout>
            <v-layout row>
              <v-flex lg6>
                  <v-container>
                  <v-text-field
                      name="input-1"
                      label="Price"
                      id="pricyeBuy"
                      v-model="priceSell"
                      :rules="numRules"
                    ></v-text-field>
                  </v-container>
                </v-flex>
                <v-flex lg6>
                  <v-container>
          <v-text-field
              name="input-1"
              label="Amount"
              id="testing"
              v-model="amountSell"
              :rules="numRules"
            ></v-text-field>
          </v-container>
          </v-flex>
          </v-layout>
          <v-btn class="red lighten-1" @click="submitOrder(false)" dark>Send order
          </v-btn>
        </v-container>
        </v-flex >
          <v-flex lg6>
            <v-container>
              <v-layout row>
                <v-flex lg6>
                  <v-layout row>
                    <v-flex lg6>
                  <h2>
                    Buy
                  </h2>
                </v-flex>
                <v-flex lg6>
                    <v-list-tile-avatar>
                    <img v-bind:src="getImg(currencyBuy)"/>
                  </v-list-tile-avatar>
                </v-flex>
                </v-layout>
            </v-flex>
                <v-flex lg6>
                  <v-container>
                  <v-select v-bind:items="getCurrencies()" v-model="currencyBuy" label="Currency" single-line bottom></v-select>
                </v-container>
                </v-flex>
            </v-layout>
              <v-layout row>
                <v-flex lg6>
                  <v-container>
                  <v-text-field
                      name="input-1"
                      label="Price"
                      id="pricyeBuy"
                      :rules="numRules"
                      v-model="priceBuy"
                    ></v-text-field>
                  </v-container>
                  </v-flex>
                  <v-flex lg6>
                    <v-container>
            <v-text-field
                name="input-1"
                label="Amount"
                id="amountBuy"
                :rules="numRules"
                v-model="amountBuy"
              ></v-text-field>
            </v-container>
            </v-flex>
            </v-layout>
            <v-btn class="light-green lighten-1" @click="submitOrder(true)" dark>Send order
            </v-btn>
      </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>

</template>

<script>
import conf from '../configurationBack.js';
import parseOrder from '../JsonParsers/tradeOrder.js';
import axios from 'axios';

export default {
  data() {
    return {
      currencySell: "",
      currencyBuy: "",
      numRules: [
        (v) => !!v || "Value required",
        (v) => /^[0-9]*([.,][0-9]+)?/.test(v) || "Please enter a correct value"
      ],
      priceBuy: "",
      priceSell: "",
      amountBuy: "",
      amountSell: "",
    };
  },
  methods: {
    getImg(currency) {
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        var current = this.$store.state.order.currencies[i]
        if (currency == current.name) {
          return "/src/assets/images/" + current.trig + ".png";
        }
      }
    },
    getCurrencies() {
      var ret = [];
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        ret.push(this.$store.state.order.currencies[i].name);
      }
      return ret;
    },
    submitOrder(buy) {
      var currency;
      var price;
      var quantity;
      if (buy) {
        currency = this.currencyBuy;
        price = this.priceBuy;
        quantity = this.amountBuy;
      } else {
        currency = this.currencySell;
        price = this.priceSell;
        quantity = this.amountSell;
      }
      axios.get(conf.urlback + conf.services.addOrder,
          parseOrder.addOrder(buy, this.$store.state.profil.personId, quantity, price, currency)
        ).then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error.message);
        });


    }
  }
}
</script>

<style lang="css">
</style>
