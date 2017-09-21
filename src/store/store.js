import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0,
    page: 'home',
    connected: false

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
    }
};

export default new Vuex.Store({
    state,
    mutations
});
