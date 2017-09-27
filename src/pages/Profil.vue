<template>
<v-container v-bind:class="$store.state.color.third">
  <div v-if="$store.state.connected">
    <v-card>
      <v-card-media v-bind:src="$store.state.profil.image" height="300px">
        <v-container fill-height fluid>
          <v-layout fill-height>

          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs8>
            <h2>{{$store.state.profil.name}}</h2>
          </v-flex>
          <v-flex xs4 style="text-align: center;">
            <v-btn @click="deconnect()" v-bind:class="this.$store.state.color.sec" dark right>{{deco}}</v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>


      <v-card-actions v-bind:class="$store.state.color.prim">
        <h4>Mes tirages</h4>
      </v-card-actions>
      <template v-for="(item, index) in $store.state.profil.tirage">
            <h5>
              <div>
              {{item.num}}
            </div>
          </h5>
          </template>
      <v-list>

      </v-list>
    </v-card>
  </div>
  <div style="text-align: center" v-else>
    <ul class="list" v-bind:class="$store.state.color.third">
      <li>
        <v-card-text>
          <h3>Vous n'êtes pas connecté</h3>
        </v-card-text>
      </li>
      <li>
        <v-btn v-bind:class="inscColor" @click="inscript()" dark style="text-decoration: none;" large dark>
          {{inscr}}
        </v-btn>
        <li>
          <div v-if="inscTrigger">
            <signForm></signForm>
          </div>
        </li>
      </li>
      <li>
        <v-btn v-bind:class="connectColor" @click="connection()" dark style="text-decoration: none;" large dark>
          {{connect}}
        </v-btn>
      </li>
      <li>
        <div v-if="connectTrigger">
          <connectForm></connectForm>
        </div>
      </li>
    </ul>
  </div>
</v-container>
</template>

<script>
import Connect from '../forms/connect.vue';
import Inscription from '../forms/inscription.vue';

export default {
  data() {
    return {
      inscColor: this.$store.state.color.sec,
      connectColor: this.$store.state.color.sec,
      inscr: "Inscription",
      connect: "Connexion",
      inscTrigger: false,
      connectTrigger: false,
      deco: "Deconnexion"
    };
  },
  methods: {
    inscript() {
      this.inscTrigger = !this.inscTrigger;
      this.inscColor = (this.inscTrigger) ? this.$store.state.color.third : this.$store.state.color.sec;
    },
    connection() {
      this.connectTrigger = !this.connectTrigger;
      this.connectColor = (this.connectTrigger) ? this.$store.state.color.third : this.$store.state.color.sec;
    },
    deconnect() {
      this.$store.commit("deconnect");
    }
  },
  mounted() {},
  components: {
    connectForm: Connect,
    signForm: Inscription,
  }
};
</script>
