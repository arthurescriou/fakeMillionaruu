<template lang="html">
  <v-container>
  <v-layout column>
    <v-list column >
      <v-subheader> <h2>Ethereum</h2></v-subheader>
        <template v-for="order in orders">
          <v-list-tile-avatar>
            <img v-bind:src="$store.state.profil.wallet[1].logo">
            </v-list-tile-avatar>
              <v-list-tile-content style="background-color:pink">
                <v-layout row>
                  <v-flex lg6>
                    <v-card-text class='text-lg-middle' style="background-color:green">
                      {{order.quantity}}
                    </v-card-text>
                  </v-flex>
                  <v-flex lg6>
                    <v-card-text class='text-lg-middle'  style="background-color:blue">
                      {{order.price}}
                    </v-card-text>
                  </v-flex>
                  <v-flex lg6>
                    <v-card-text class='text-lg-middle'  style="background-color:red">
                      {{order.offer_uuid}}
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
  </v-layout>
</v-container>
</template>


<script>
export default {
  data: () => ({
    orders: [{
      "quantity": 10,
      "price": 0.3,
      "buying": false,
      "personid": 1,
      "currency": "ETH",
      "offer_uuid": "0471ccf3-0768-475f-9763-954901f3d20c"
    }, {
      "quantity": 0,
      "price": 0.1,
      "buying": false,
      "personid": 1,
      "currency": "ETH",
      "offer_uuid": "e561000f-f539-4785-b17d-f40227542a80"
    }, {
      "quantity": 5,
      "price": 0.2,
      "buying": true,
      "personid": 1,
      "currency": "ETH",
      "offer_uuid": "00fe33bb-2888-4596-8a0b-92f68bfdac2a"
    }, {
      "quantity": 122,
      "price": 1.12,
      "buying": true,
      "personid": 2,
      "currency": "LTC",
      "offer_uuid": "00ce33bb-2888-4596-8a0b-92f68bfdac2a"
    }, {
      "quantity": 1,
      "price": 0.02,
      "buying": true,
      "personid": 1,
      "currency": "BCH",
      "offer_uuid": "e561000f-f429-4785-b17d-f40227542a80"
    }]
  })
}
</script>



<style lang="css">
</style>
