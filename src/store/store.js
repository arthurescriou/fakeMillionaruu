import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0,
    page: 'home',
    connected: false,
    userName: require('faker').name.findName(),
    mail: require('faker').internet.email(),
    colorprim: "deep-purple darken-4",
    colorsec:"deep-purple lighten-4"

};

const mutations = {
    updateTemplate: (state) => {
				state.count = (state.count+1)%4;
    },
    home:(state) => {
      state.page = 'home';
    },
    form:(state) => {
      state.page = 'form';
    },
    pub:(state) => {
      state.page = 'pub';
    },
    connexion: (state) => {
      state.connected = true;
    },
    deconnexion: (state) => {
      state.connected = false;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
