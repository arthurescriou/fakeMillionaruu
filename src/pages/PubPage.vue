<template>
<v-container>
  {{nolog()}}
  {{runPub()}}
  <div v-if="end" style="text-align: center">
    <v-dialog v-model="dialog" lazy absolute>
      <v-btn v-bind:class="$store.state.color.sec" slot="activator" dark style="text-decoration: none;" large dark>
        {{geticket}}
      </v-btn>

      <v-card>
        <v-card-title>
          <div class="headline">Félicitations</div>
        </v-card-title>
        <v-card-text>
          {{ticketMsg+ticket()}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-bind:class="$store.state.color.sec" dark style="text-decoration: none;" to="/profil">
            {{ret}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </div>
  <div v-else style="text-align: center;">
    <v-progress-linear v-bind:color-front="$store.state.color.sec" v-bind:color-back="$store.state.color.prim" v-model="value"></v-progress-linear>
    <iframe v-bind:src="video" width="640" height="480"></iframe>
  </div>
</v-container>
</template>

<script>
import Repeat from 'repeat';
export default {
  data() {
    return {
      video: "https://www.youtube.com/embed/C8NAYW-Z54o",
      value: 0,
      maxTime: 10,
      time: 0,
      end: false,
      geticket: "mon ticket",
      dialog: false,
      ticketMsg: "Vous avez obtenu le ticket numéro ",
      ret: "retour"
    };
  },
  methods: {
    runPub() {
      if(this.time>this.maxTime || this.end)return;
      this.end = false;
      Repeat(this.tick).every(1000, 'ms').for(this.maxTime + 1, 'sec').start.in(1, 'sec');
    },
    tick() {
      this.time++;
      this.value = ((this.time / this.maxTime)*100);
      if (this.time == this.maxTime) {
        this.end = true;
      }
    },
    clear() {
      this.time = 0;
      this.value = this.time % this.maxTime;
    },
    ticket() {
      return Math.floor(Math.random() * 1000) + 1
    },
    nolog(){
      if(!this.$store.state.connected){
        this.$router.replace('/profil');
      }
    }


  },
  mounted() {},
};
</script>
