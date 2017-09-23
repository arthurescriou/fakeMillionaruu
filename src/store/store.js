import Vue from 'vue';
import Vuex from 'vuex';
import Faker from 'faker';

Vue.use(Vuex);

const state = {
    count: 0,
    page: 'home',
    connected: false,
    login: {
      userName: Faker.name.findName(),
      mail: Faker.internet.email(),
      image: Faker.random.image()
    },
    color: {
      colorprim: "indigo lighten-2",
      colorsec:"deep-purple lighten-4"
    },
    colorprim: "indigo lighten-2",
    colorsec:"deep-purple lighten-4",
    ajax: {
      inscription: {
        username: "",
        password: "",
        mail:""
      }
    }

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
