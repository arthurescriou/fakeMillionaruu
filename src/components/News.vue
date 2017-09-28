<template lang="html">
<div>
  <div v-for="item in $store.state.news.feed">
    <NewsCard :src="item.src"
              :title="item.title"
              :link="item.link"></NewsCard>
  </div>
</div>
</template>

<script>
import NewsCard from '../tools/NewsCard.vue';

export default {
  components: {
    NewsCard: NewsCard
  }
}
</script>

<style lang="css">
</style>
