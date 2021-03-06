import Vue from 'vue';
import Vuex from 'vuex';
import Faker from 'faker';
import axios from 'axios';
import profilParser from '../JsonParsers/profil.js';
import chatParser from '../JsonParsers/chat.js';
import conf from '../configurationBack.js';

Vue.use(Vuex);

const urlback = conf.urlback;

const state = {
  count: 0,
  test: "test",
  urlback: urlback,
  services: conf.services,
  profil: {
    session: "",
    personId: 0,
    userName: "",
    name: "",
    image: "/src/assets/images/BTC.png" /*Faker.image.image()*/ ,
    mail: "",
    connected: false,
    inscr: false,
    passwordTyped: "",
    wallet: [{
        name: "BTC",
        value: 0.0,
        logo: "/src/assets/images/BTC.png"
      },
      {
        name: "ETH",
        value: 0.0,
        logo: "/src/assets/images/ETH.png"
      },
      {
        name: "LTC",
        value: 0.0,
        logo: "/src/assets/images/LTC.png"
      }, {
        name: "DASH",
        value: 0.0,
        logo: "/src/assets/images/DASH.png"
      }, {
        name: "XRP",
        value: 0.0,
        logo: "/src/assets/images/XRP.png"
      }, {
        name: "BCH",
        value: 0.0,
        logo: "/src/assets/images/BCH.png"
      },
    ],
    getWallet: false,
    timeStampWallet: Date.now(),
  },
  color: {
    sec: "grey darken-3",
    prim: "grey",
    third: "grey lighten-3"
  },
  order: {
    currencies: [{
        name: "Ethereum",
        trig: "ETH"
      },
      {
        name: "Bitcoin Cash",
        trig: "BCH"
      },
      {
        name: "Ripple",
        trig: "XRP"
      },
      {
        name: "LiteCoin",
        trig: "LTC"
      },
      {
        name: "Dash",
        trig: "DASH",
      }
    ],
    time: [
      'all', 'year', 'month', 'week', 'day', 'hour'
    ],
    candlesticks: [
      '5 min', '15 min', '30 min', '2 h', '4 h', '1 d'
    ]
  },
  trollbox: {
    test: "",
    chat: [{
        avatar: "" /*Faker.image.image()*/ ,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: "" /*Faker.image.image()*/ ,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: "" /*Faker.image.image()*/ ,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: "" /*Faker.image.image()*/ ,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: "" /*Faker.image.image()*/ ,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
    ]
  },
  news: {
    feed: [{
      urlToImage: "" /*Faker.image.image()*/ ,
      title: "Erreur",
      url: ""
    }, {
      urlToImage: "" /*Faker.image.image()*/ ,
      title: "Erreur",
      url: ""
    }, {
      urlToImage: "" /*Faker.image.image()*/ ,
      title: "Erreur",
      url: ""
    }, ]

  },
  charts: {
    categoryData: [],
    values: [],

  }

};

const mutations = {

  connect: (state) => {
    axios.get(urlback + state.services.login,
        profilParser.login(state.profil.userName, state.profil.passwordTyped))
      .then(function(response) {
        console.log(response);
        if (response.data.err)
          if (response.data.err == 200) {
            if (response.data.session) {
              state.profil.connected = true;
              state.profil.session = response.data.session;
              state.profil.personId = response.data.personId;
              state.profil.getWallet = true;
              state.profil.timeStampWallet = 0;
            }
          }
        else {

        }
      })
      .catch(function(error) {
        console.log(error.message);
      });

    state.passwordTyped = "";
  },
  deconnect: (state) => {
    state.profil.connected = false;
    sstate.profil.getWallet = false;
    state.profil.inscr = false;
    axios.get(urlback + state.services.logout,
        profilParser.logout(0))
      .then(function(response) {
        console.log(response);
        if (response.data.err)
          if (response.data.err == 200) {
            state.profil.session = "";
            state.profil.personId = 0;
          }
        else {
          state.profil.connected = false;
        }
      })
      .catch(function(error) {
        console.log(error.message);
      });
  },
  toInscription: (state) => {
    state.profil.inscr = true;
  },
  inscription: (state) => {
    axios.get(urlback + state.services.inscription,
        profilParser.inscription(state.profil.userName, state.profil.passwordTyped, state.profil.mail)
      ).then(function(response) {
        console.log(response);
        state.profil.inscr = false;
      })
      .catch(function(error) {
        console.log(error.message);
      });

    state.passwordTyped = "";
  }

};

export default new Vuex.Store({
  state,
  mutations
});
