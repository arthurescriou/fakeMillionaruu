<template>
<v-app id="app" v-bind:color="$store.state.color.third">
  <main>
    <v-container>

      <v-layout row wrap>

        <v-flex lg2 xl2>
          <v-navigation-drawer permanent light>
            <v-toolbar flat>
              <v-list>
                <Left></Left>
              </v-list>
            </v-toolbar>
          </v-navigation-drawer>

        </v-flex>

        <v-flex lg8 xl8>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <Chart></Chart>
          <Order></Order>
          <Story></Story>
        </v-flex>

        <v-flex lg2 xl2>
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
    return {};
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
