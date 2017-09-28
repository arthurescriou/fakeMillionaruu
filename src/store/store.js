import Vue from 'vue';
import Vuex from 'vuex';
import Faker from 'faker';

Vue.use(Vuex);

const state = {
  count: 0,


  profil: {
    userName: Faker.internet.userName(),
    name: Faker.name.findName(),
    image: ""/*Faker.image.image()*/,
    connected: false,
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
  },
  trollbox: {
    chat: [{
        avatar: ""/*Faker.image.image()*/,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar:""/*Faker.image.image()*/,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar:""/*Faker.image.image()*/,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar:""/*Faker.image.image()*/,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: ""/*Faker.image.image()*/,
        title: Faker.name.findName(),
        subtitle: Faker.lorem.sentence(),
      },
    ]
  },
  news: {
    feed: [{
      src: ""/*Faker.image.image()*/,
      title: "Top 5 des techniques pour ",
      link: "www.google.com"
    }, {
      src: ""/*Faker.image.image()*/,
      title: "Vous ne le croiyez jamais",
      link: ""
    }, {
      src:""/*Faker.image.image()*/,
      title: "Les médecins le deteste",
      link: ""
    }, {
      src: ""/*Faker.image.image()*/,
      title: "Il est devenu riche facilement",
      link: ""
    }, ]

  }
};

const mutations = {
  connect: (state) => {
    state.profil.connected = true;
  },
  deconnect: (state) => {
    state.profil.connected = false;
    state.profil.inscr = false;
  },
  toInscription: (state) => {
    state.profil.inscr = true;
  },
  inscription: (state) => {
    state.profil.connected = true;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
