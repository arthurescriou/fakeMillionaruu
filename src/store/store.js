import Vue from 'vue';
import Vuex from 'vuex';
import Faker from 'faker';

Vue.use(Vuex);

const state = {
  count: 0,


  profil: {
    userName: Faker.internet.userName(),
    name: Faker.name.findName(),
    image: "" /*Faker.image.image()*/ ,
    connected: false,
    inscr: false,
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
      },{
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
      title: "Vous ne le croiyez jamais",
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
