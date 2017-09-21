<template>
  <div id="contain-connexion">
    <div class="card" v-bind:class="this.$store.state.colorprim">
      <div v-if="inscription">
        <h5>Inscription</h5>

      <div class="input-field">
        <input v-model="compte" placeholder="user name" id="userName" type="text" v-bind:class="validUserName">
        <label for="userName" v-bind:data-error="errorUserName"></label>
      </div>

      <div class="input-field">
        <input v-model="mail" placeholder="mail" id="userMail" type="text" class="validate">
        <label for="userMail" v-bind:error="errorMail"></label>
      </div>

      <div class="input-field">
        <input v-model="password" placeholder="password" id="password" type="password" v-bind:class="validPassword">
        <label for="userName" v-bind:data-error="errorPass"></label>
      </div>

      <div class="input-field">
        <input v-model="passwordverif" placeholder="confirm password" id="confirmpassword" type="password" v-bind:class="validPassword">
        <label for="userName" v-bind:data-error="errorPass"></label>
      </div>

        <a style="margin :20px;" v-bind:class="this.$store.state.colorsec"
        class="waves-effect waves-light btn" @click="submitInscription()">{{signin}}</a>
        <div class="green darken-1"> {{succesInscription}} </div>
      </div>
    <div v-else>
        <div v-if="!this.$store.state.connected">
          <h5>Connexion</h5>

            <div class="input-field">
          <input v-model="compte" placeholder="mail" id="first_name" type="text" class="validate">
        </div>
          <div class="input-field">
          <input v-model="password" placeholder="password" id="password" type="password" class="validate">
        </div>
          <a style="margin :20px;" v-bind:class="this.$store.state.colorsec"
          class="waves-effect waves-light btn" @click="submitForm()">connect</a>

          <a style="margin :20px;" v-bind:class="this.$store.state.colorsec"
          class="waves-effect waves-light btn" @click="inscr()">sign in</a>


        </div>
        <div v-else>
          <div class="card-content">
            <img style="width : 80%;" class="responsive-img circle" v-bind:src="require('faker').random.image()">
            Signed in as
              <p><b>{{this.$store.state.userName}}</b><br/>
                <i>{{this.$store.state.mail}}</i></p>
                <a style="margin-top :20px" v-bind:class="this.$store.state.colorsec"
                class="waves-effect waves-light btn" @click="deconnect()">deconnect</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>

  export default {
    data () {
      return {
        mail: "",
        password: "",
        passwordverif: "",
        compte: "",
        inscription: false,
        validMail: "validate",
        validUserName: "validate",
        validPassword: "validate",
        errorUserName: "",
        errorMail: "",
        errorPass: "",
        succesInscription: "",
        inscriptionDone: false,
        signin: "sign in"
      };
    },
    methods: {
      pub(){
        this.$store.commit('pub');
      },
      submitForm(){
        //appel login
        var correct = true;
        if(correct){
          this.$store.commit('connexion');
        }
      },
      deconnect(){
        this.$store.commit('deconnexion');
      },
      inscr(){
        this.inscription = true;
      },
      submitInscription(){
        if(this.inscriptionDone){
          this.succesInscription = "";
          this.inscription=false;
          this.signin="sign in";
          this.inscriptionDone = false;
        }
        var retourUserName = true; //TODO
        //ajaxSubmit(compte,mail,password);
        if(retourUserName){
          this.validUserName = "validate valid";
        }else {
          this.validUserName = "validate invalid";
          this.errorUserName = "already use";
        }

        var emailValid = true;//TODO
        if(emailValid){
          this.validMail = "validate valid";
        }else {
          this.validMail = "validate invalid";
          this.errorMail = "mail invalid";
        }

        var PasswordValid = this.password==this.passwordverif;//TODO
        if(PasswordValid){
          this.validPassword = "validate valid";
        }else {
          this.validPassword = "validate invalid";
          this.errorPass = "not the same password"
        }

        this.succesInscription = "Congratulation to your inscription";
        this.signin="back";
        this.inscriptionDone = true;


      }
    },
    components: {

    }
  }
</script>

<style>
</style>
