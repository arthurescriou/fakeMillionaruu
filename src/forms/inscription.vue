<template>
<v-form v-model="valid">
  <v-text-field label="Pseudo" v-model="name" :rules="nameRules" required></v-text-field>
  <v-text-field label="Mail" v-model="email" :rules="emailRules" required></v-text-field>
  <v-text-field label="password" v-model="password" :rules="passwordRules" required type="password"></v-text-field>
  <v-text-field label="password" v-model="passwordVerif" :rules="passwordVerifRules" required type="password"></v-text-field>
  <v-btn @click="submit()" v-bind:class="this.$store.state.color.sec" dark>submit</v-btn>
</v-form>
</template>

<script>
import Store from '../store/store.js';
export default {
  data() {
    return {
      store: Store,
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Entrer nom d\'utilisateur'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Entrer mot de passe' 
      ],
      passwordVerif: '',
      passwordVerifRules: [
        (v) => v == this.password || 'Pas le même mot de passe'
      ]
    }
  },
  methods: {
    submit() {
      this.$store.state.profil.name = this.name;
      this.$store.state.profil.email = this.email;
      this.$store.state.profil.passwordTyped = this.password;
      this.$store.commit("inscription");
    }
  }
};
</script>

<style>


</style>
