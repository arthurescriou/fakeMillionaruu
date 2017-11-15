<template lang="html">

  <v-container>
    <v-card>
      <v-layout row>
        <v-flex lg6  >
          <v-container>
            <h2>
              Sell
            </h2>
            <v-layout row>
              <v-flex lg6>
                <v-container>
                <v-select v-bind:items="getCurrencies()" v-model="e1" label="Currency" single-line bottom></v-select>
              </v-container>
                </v-flex>
                <v-flex lg6>
                  <v-container>
          <v-text-field
              name="input-1"
              label="Amount"
              id="testing"
            ></v-text-field>
          </v-container>
          </v-flex>
          </v-layout>
        </v-container>
        </v-flex >
          <v-flex lg6>
            <v-container>
              <h2>
                Buy
              </h2>
              <v-layout row>
                <v-flex lg6>
                  <v-container>
                  <v-select v-bind:items="getCurrencies()" v-model="e1" label="Currency" single-line bottom></v-select>
                </v-container>
                  </v-flex>
                  <v-flex lg6>
                    <v-container>
            <v-text-field
                name="input-1"
                label="Amount"
                id="testing"
              ></v-text-field>
            </v-container>
            </v-flex>
            </v-layout>
      </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      t1: "",
    };
  },
  methods: {
    getCurrencies() {
      var ret = [];
      for (var i = 0; i < this.$store.state.order.currencies.length; i++) {
        ret.push(this.$store.state.order.currencies[i].name);
      }
      return ret;
    }
  }
}
</script>

<style lang="css">
</style>
