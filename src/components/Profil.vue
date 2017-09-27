<template>
  <v-container>
    <div v-if="$store.state.profil.connected">
        <v-card-media v-bind:src="this.$store.state.profil.image" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{this.$store.state.profil.name}}</h3>
            <br/>{{this.$store.state.profil.userName}}
          </div>
        </v-card-title>
        <v-card-actions>
        <v-btn @click="deco()" v-bind:class="this.$store.state.color.sec">Déconnexion</v-btn>
      </v-card-actions>
    </div>
    <div v-else>
        <div v-if="$store.state.profil.inscr">
          <Insc></Insc>
        </div>
        <div v-else>
          <Connect></Connect>
        </div>
    </div>

  </v-container>
</template>

<script>
import Store from '../store/store.js';

import Connect from '../forms/connect.vue';
import Insc from '../forms/inscription.vue';

export default {
  store: Store,
  data() {
    return {
    };
  },
  methods: {
    deco(){
      this.$store.commit("deconnect");
    }
  },
  components: {
    Connect: Connect,
    Insc: Insc
  }
}
</script>
