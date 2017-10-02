<template>
<v-container grid-list-xl wrap>
  <v-layout wrap>
    <News></News>
    <TrollBox></TrollBox>

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
