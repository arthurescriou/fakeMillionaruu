<template>
<v-form v-model="valid" dark>
  <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
  <v-text-field type="password" label="password" v-model="password" :rules="passwordRules" required></v-text-field>
  <v-btn @click="submit()" v-bind:class="this.$store.state.color.sec" dark> envoyer</v-btn>
  <v-btn @click="toInscription()" v-bind:class="this.$store.state.color.sec" dark>inscription</v-btn>
</v-form>
</template>

<script>
import Store from '../store/store.js';


export default {
  data() {
    return {
      store: Store,
      valid: false,
      name: 'arthur',
      nameRules: [
        (v) => !!v || 'Entrer nom d\'utilisateur'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: 'pass',
      passwordRules: [
        (v) => !!v || 'Entrer mot de passe'/*,
        (v) =>*/
      ]
    }
  },
  methods: {
    submit() {
      this.$store.state.profil.userName = this.name;
      this.$store.state.profil.passwordTyped = this.password;
      this.$store.commit("connect");

    },
    toInscription() {
      this.$store.commit("toInscription");
    }
  }
};
</script>

<style>


</style>
