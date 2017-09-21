<template>
<h1>connexion</h1>
</template>


<script>
  export default {
    data () {
      return {
        mine: "Voir mes tickets"
      };
    },
    methods: {
      pub(){
        this.$store.commit('pub');
      }
    },
    components: {

    }
  }
</script>

<style>
</style>
