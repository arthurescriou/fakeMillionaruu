<template>
<v-container wrap>
  <v-layout >
    <v-flex>
      <v-card v-bind:class="$store.state.color.prim">
        <v-card-media class="white--text" height="50px" v-bind:src="src">
          <v-container fill-height fluid>
            <v-layout fill-height>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span>{{title}}</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat v-bind:class="$store.state.color.sec" :href="link" target="_blank">Link</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
export default {
  props: ['src', 'title', 'link'],
  methods: {
    externLink() {
    }
  }
}
</script>

<style lang="css">
</style>
