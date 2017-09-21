import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import Store from './store/store.js';

new Vue({
  el: '#app',
  Store,
  render: h => h(App)
})
