<template lang="html">
  <div >

  <v-divider inset></v-divider>
  <v-list-tile avatar v-bind:key="title" @click="">
    <v-list-tile-avatar>
      <img v-bind:src="avatar"/>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-sub-title v-html="message"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</div>
</template>

<script>
import Store from '../store/store.js';
import Faker from 'faker';
import MessageChat from '../tools/chatMessage.vue';


export default {
  store: Store,
  data() {
    return {
      msg: "",

    }
  },
  props: ['avatar', 'title', 'message'],

}
</script>
