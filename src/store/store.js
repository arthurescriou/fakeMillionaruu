import Vue from 'vue';
import Vuex from 'vuex';
import Faker from 'faker';

Vue.use(Vuex);

const state = {
  count: 0,


  profil: {
    userName: Faker.internet.userName(),
    name: Faker.name.findName(),
    image: Faker.image.image(),
    connected: true,
    inscr: false,
    wallet: {
        btc: 12,
        eth: 123
      }
  },
  color: {
    sec: "grey darken-3",
    prim: "grey",
    third: "grey lighten-3"
  }
};

const mutations = {
  connect: (state) => {
    state.profil.connected = true;
  },
  deconnect:(state) => {
    state.profil.connected = false;
    state.profil.inscr = false;
  },
  toInscription:(state) => {
    state.profil.inscr = true;
  },
  inscription:(state) => {
    state.profil.connected = true;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
