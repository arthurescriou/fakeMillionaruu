<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <v-card dark v-bind:class="$store.state.color.sec">
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
        </v-card>
        <v-card v-bind:class="$store.state.color.third">
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
        </v-card>

      </v-flex>
    </v-layout>


</v-container>
</template>

<script>
import News from '../components/News.vue';
import TrollBox from '../components/TrollBox.vue';


export default {
  components: {
    News: News,
    TrollBox: TrollBox
  }
}
</script>
