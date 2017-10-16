<template lang="html">
<div>
   {{getNews()}}
  <div v-for="item in $store.state.news.feed">
    <NewsCard :src="item.urlToImage"
              :title="item.title"
              :link="item.url"></NewsCard>
  </div>
</div>
</template>

<script>
import NewsCard from '../tools/NewsCard.vue';
import newsParser from '../JsonParsers/news.js';
import axios from 'axios';
import Store from '../store/store.js';
export default {
  components: {
    NewsCard: NewsCard
  },
  methods: {
    getNews() {
      this.$store.state.news;
      axios.get(this.$store.state.urlback + this.$store.state.services.news,
          newsParser.news(3))
        .then(function(response) {
          Store.state.news.feed = response.data;
        })
        .catch(function(error) {
          console.log(error.message);
        });

    }
  }
}
</script>

<style lang="css">
</style>
