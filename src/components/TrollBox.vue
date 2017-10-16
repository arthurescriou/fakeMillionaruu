<template lang="html">
  <v-layout row><v-card>
    {{fire()}}
     <v-toolbar v-bind:class="$store.state.color.sec" dark>
       <v-toolbar-title>TrollBox</v-toolbar-title>
     </v-toolbar>
   <v-list three-line>
     <template v-for="item in $store.state.trollbox.chat">
       <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
             <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
             <v-list-tile avatar v-else v-bind:key="item.title" @click="">
               <v-list-tile-avatar>
                 <img v-bind:src="item.avatar"/>
               </v-list-tile-avatar>
               <v-list-tile-content>
                 <v-list-tile-title v-html="item.title"></v-list-tile-title>
                 <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
               </v-list-tile-content>
            </v-list-tile>
     </template>
  </v-list>
  <v-text-field label="message" v-model="msg" @submit="submit()"></v-text-field>
  <v-btn @click="submit()" v-bind:class="this.$store.state.color.sec" dark>submit</v-btn>
  </v-card>
  </v-layout>





</template>

<script>
import Store from '../store/store.js';
import MessageChat from '../tools/chatMessage.vue';
import chatParser from '../JsonParsers/chat.js';

export default {
  store: Store,
  data() {
    return {
      msg: "",

    }
  },
  methods: {
    submit() {
      var name = this.$store.state.profil.userName.localeCompare("") == 0 ? "Anonymous" : this.$store.state.profil.userName;
      firebase.database().ref('chats/').push({
        user: name,
        msg: this.msg,
        date: Date.now()
      });
      this.msg="";
    },
    fire() {
      firebase.database().ref('chats/').once('value').then(function(snapshot) {
        Store.state.trollbox.chat = chatParser.parseChat(snapshot.val());
      })
    },
    components: {
      MessageChat: MessageChat
    }
  }
}
</script>

<style lang="css">
</style>
