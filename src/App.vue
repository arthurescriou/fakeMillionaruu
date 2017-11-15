<template>
<v-app id="app" v-bind:color="$store.state.color.third">
  <main>
    <v-container>

      <v-layout row wrap>

        <v-flex lg3 xl2>
          <v-navigation-drawer permanent light>
            <v-toolbar flat>
              <v-list>
                <Left></Left>
              </v-list>
            </v-toolbar>
          </v-navigation-drawer>

        </v-flex>

        <v-flex lg12 xl8>
          <Chart></Chart>
          <Order></Order>
          <Story></Story>
          {{$store.state.profil.wallet}}
        </v-flex>

        <v-flex lg3 xl2>
          <v-navigation-drawer permanent light right>
            <v-toolbar flat>
              <v-list>
                <Right></Right>
              </v-list>
            </v-toolbar>
          </v-navigation-drawer>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
  <!-- <v-footer v-bind:class="$store.state.color.prim" dark>
        <span>© 2017 - Argent</span>
      </v-footer> -->
</v-app>
</template>

<script type="text/babel">
import Store from './store/store.js';

import Left from './toolbar/leftToolBar.vue';
import Order from './components/TradeOrder.vue';
import Chart from './components/Charts.vue';
import Right from './toolbar/rightToolBar.vue';
import Story from './components/TradeHistory.vue';

export default {
  store: Store,
  data() {
    return {
      rettt: "ICI",
    };
  },
  methods: {

  },
  components: {
    Left: Left,
    Order: Order,
    Right: Right,
    Chart: Chart,
    Story: Story
  }
};
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>
