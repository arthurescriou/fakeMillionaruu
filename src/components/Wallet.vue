<template lang="html">
  <v-container>
    <v-toolbar v-bind:class="$store.state.color.sec" dark>
      <v-toolbar-title>Wallet</v-toolbar-title>
    </v-toolbar>
    <v-list>
           <v-list-tile avatar v-for="item in $store.state.profil.wallet" v-bind:key="item.title" @click="">
             <v-list-tile-avatar>
               <img v-bind:src="item.logo"/>
             </v-list-tile-avatar>
             <v-list-tile-content>
               <v-list-tile-title>{{ item.value }}</v-list-tile-title>
             </v-list-tile-content>
             <!-- <v-list-tile-action>
               <v-btn icon ripple>
                 <v-icon class="grey--text text--lighten-1">info</v-icon>
               </v-btn>
             </v-list-tile-action> -->
  </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
