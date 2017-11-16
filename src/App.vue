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
          {{$store.state.test}}
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
  props: {  headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Sodium (mg)', value: 'sodium' },
      { text: 'Calcium (%)', value: 'calcium' },
      { text: 'Iron (%)', value: 'iron' }
    ],
    items: [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ]
},
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
