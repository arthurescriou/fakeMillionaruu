import Vue from 'vue';
import Vuex from 'vuex';
import Faker from 'faker';
import axios from 'axios';
import profilParser from '../JsonParsers/profil.js';
import conf from '../configurationBack.js';

Vue.use(Vuex);

const urlback = conf.urlback;

const state = {
  count: 0,
  test: "test",

  services: conf.services,
  profil: {
    userName: "",
    name: "",
    image: "" /*Faker.image.image()*/ ,
    mail: "",
    connected: false,
    inscr: false,
    passwordTyped: "",
    wallet: [{
        name: "BTC",
        value: 12.0125,
        logo: "/src/assets/images/BTC.png"
      },
      {
        name: "ETH",
        value: 1.46,
        logo: "/src/assets/images/ETH.png"
      },
      {
        name: "LTC",
        value: 121112.12,
        logo: "/src/assets/images/LTC.png"
      }, {
        name: "DSH",
        value: 5454.12,
        logo: "/src/assets/images/DSH.png"
      },
    ]
  },
  color: {
    sec: "grey darken-3",
    prim: "grey",
    third: "grey lighten-3"
  },
  trollbox: {
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
      src: "" /*Faker.image.image()*/ ,
      title: "Vuos ne le croiyez jamias",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, {
      src: "" /*Faker.image.image()*/ ,
      title: "Les médecins le deteste",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, {
      src: "" /*Faker.image.image()*/ ,
      title: "Il est devenu riche facilement",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, ]

  }
};

const mutations = {

  connect: (state) => {
    state.test = profilParser.login(state.profil.userName, state.profil.passwordTyped);
    axios.get(urlback + state.services.login,
      profilParser.login(state.profil.userName, state.profil.passwordTyped))
      .then(function(response) {
        console.log(response);
        if (response.data.err)
          if (response.data.err == 200)
            state.profil.connected = true;
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
    state.profil.inscr = false;
  },
  toInscription: (state) => {
    state.profil.inscr = true;
  },
  inscription: (state) => {
    axios.get(urlback + state.services.inscription, {
        params: profilParser.inscription(state.profil.userName, state.profil.passwordTyped, state.profil.mail)
      })

      .then(function(response) {
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
