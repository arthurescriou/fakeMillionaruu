import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import App from './App.vue';
import Store from './store/store.js';




Vue.use(Vuetify);
Vue.use(Vuex);

new Vue({
  el: '#app',
  Store,
  render: h => h(App),
});
