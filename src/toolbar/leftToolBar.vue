<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <v-card dark v-bind:class="$store.state.color.prim">
          <Profil></Profil>
        </v-card>
        <v-card dark v-bind:class="$store.state.color.sec">
          <Wallet></Wallet>
        </v-card>

      </v-flex>
      <OwnTrade></OwnTrade>
    </v-layout>


</v-container>
</template>

<script>
import Store from '../store/store.js';

import Profil from '../components/Profil.vue';
import Wallet from '../components/Wallet.vue';
import OwnTrade from '../components/OwnTrade.vue';


export default {
  store: Store,
  components: {
    Wallet: Wallet,
    Profil: Profil,
    OwnTrade: OwnTrade
  }
}
</script>
