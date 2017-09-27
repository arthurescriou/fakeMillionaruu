<template>
<v-container style="text-align: center;" v-bind:class="$store.state.color.third">
  <ul class="list" v-bind:class="$store.state.color.third">
    <li>
      <iframe v-bind:src="video" width="640" height="480"></iframe></li>
    <li>
      <v-btn v-bind:class="$store.state.color.sec" dark style="text-decoration: none;" to="/tirage">
        {{ticket}}
      </v-btn>
    </li>
    <li>
      <v-btn v-bind:class="$store.state.color.sec" dark style="text-decoration: none;" to="/profil">
        {{mine}}
      </v-btn>
    </li>
  </ul>

</v-container>
</template>

<script>
export default {
  data() {
    return {
      video: "https://www.youtube.com/embed/C8NAYW-Z54o",
      ticket: "Je veux un ticket",
      mine: "Voir mes tickets"
    };
  },

  mounted() {},
};
</script>
