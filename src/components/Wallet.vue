<template lang="html">
  <v-container>
    <v-toolbar v-bind:class="$store.state.color.sec" dark>
      <v-toolbar-title>Wallet</v-toolbar-title>
    </v-toolbar>
    <v-list>
           <v-list-tile avatar v-for="item in $store.state.profil.wallet" v-bind:key="item.title" @click="">
             <v-list-tile-avatar>
               <img v-bind:src="item.logo"/>
             </v-list-tile-avatar>
             <v-list-tile-content>
               <v-list-tile-title>{{ item.value }}</v-list-tile-title>
             </v-list-tile-content>
  </v-list-tile>
    </v-list>
    {{getWallet()}}
  </v-container>
</template>

<script>
import conf from '../configurationBack.js';
import walletParser from '../JsonParsers/wallet.js';
import Store from '../store/store.js';
import axios from 'axios';

export default {
  data() {
    return {};
  },
  methods: {
    getWallet() {
      if (this.$store.state.profil.session == "") return;
      if (this.$store.state.profil.getWallet) {
        if ((Date.now() - this.$store.state.profil.timeStampWallet) > 20000) {
          this.$store.state.profil.timeStampWallet = Date.now();
          axios.get(conf.urlback + conf.services.wallet,
              walletParser.requestWallet(this.$store.state.profil.personId))
            .then(function(response) {
              var resp = response.data;
              var tab = Store.state.profil.wallet;
              for (var i = 0; i < tab.length; i++) {
                tab[i].value = resp[tab[i].name];
              }
            })
            .catch(function(error) {
              console.error(error.message);
            });
        }
      }
    }
  },
}
</script>

<style lang="css">
</style>
