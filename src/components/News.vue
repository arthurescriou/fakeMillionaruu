<template lang="html">
<div>
  {{getNews()}}
  <div v-for="item in $store.state.news.feed">
    <NewsCard :src="item.urlToImage"
              :title="item.title"
              :link="item.url"></NewsCard>
  </div>
  <v-btn @click="refresh()" v-bind:class="this.$store.state.color.sec"> refresh</v-btn>
</div>
</template>

<script>
import NewsCard from '../tools/NewsCard.vue';
import newsParser from '../JsonParsers/news.js';
import axios from 'axios';
import Store from '../store/store.js';
export default {
  data() {
    return {
      dataLoaded: false
    }
  },
  components: {
    NewsCard: NewsCard
  },
  methods: {
    refresh() {
      this.dataLoaded = false
    },
    getNews() {
      if (!this.dataLoaded)
        axios.get(this.$store.state.urlback + this.$store.state.services.news,
          newsParser.news(3))
        .then(function(response) {
          Store.state.news.feed = response.data;
        })
        .catch(function(error) {
          console.log(error.message);
        });
      this.dataLoaded = true;
    }
  }
}
</script>

<style lang="css">
</style>
