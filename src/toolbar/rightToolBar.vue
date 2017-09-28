<template>
  <v-container grid-list-xl wrap>
    <v-layout wrap>
      <v-flex>
        <v-card dark v-bind:class="$store.state.color.sec">
          <v-card-text><News></News></v-card-text>
        </v-card>
        <v-card v-bind:class="$store.state.color.third">
            <TrollBox></TrollBox>
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
