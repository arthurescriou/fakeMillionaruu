<template>
<v-container v-bind:class="$store.state.color.third" style="text-align: center">
  <h3>Nous contacter</h3>
  <contactForm></contactForm>
</v-container>
</template>

<script>
import Contact from '../forms/contact.vue';

export default {
  data() {
    return {};
  },
  methods: {
  },
  mounted() {},
  components: {
    contactForm: Contact,
  }
};
</script>
