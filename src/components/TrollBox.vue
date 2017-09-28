<template lang="html">
  <v-layout row><v-card>
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
  <v-text-field label="message" v-model="msg" @submit=""></v-text-field>
  <v-btn @click="submit()" v-bind:class="this.$store.state.color.sec" dark>submit</v-btn>
  </v-card>
  </v-layout>





</template>

<script>
import Store from '../store/store.js';
import MessageChat from '../tools/chatMessage.vue';


export default {
  store: Store,
  data() {
    return {
      msg: "",

    }
  },
  methods: {
    submit(){
      this.$store.state.trollbox.chat.push({
        divider: true,
        inset: true
      });
      this.$store.state.trollbox.chat.push({  avatar: this.$store.state.profil.image,
        title: this.$store.state.profil.userName,
        subtitle: this.msg
      });
      this.$store.state.trollbox.chat.reverse();
      this.$store.state.trollbox.chat.pop();
      this.$store.state.trollbox.chat.pop();
      this.$store.state.trollbox.chat.reverse();
    }
  },
  components: {
    MessageChat: MessageChat
  }

}
</script>

<style lang="css">
</style>
