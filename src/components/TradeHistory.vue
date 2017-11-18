<template lang="html">
  <v-container>
    <div>{{getTradeData('ETH', this.buyin,this.sellin)}}</div>
    <v-layout>
    <v-flex lg6>
      <h2 >Buying</h2>
    <v-data-table
     v-bind:headers="ordersHeader"
     :items="buyin"
     hide-actions
     class="elevation-1"
   >
   <template slot="items" scope="props">
     <td>{{ props.item.quantity }}</td>
     <td class="text-xs-right">{{ props.item.price }}</td>
   </template>
 </v-data-table>
</v-flex>
<v-flex lg6>
  <h2>Selling</h2>
  <v-data-table
   v-bind:headers="ordersHeader"
   :items="sellin"
   hide-actions
   class="elevation-1"
  >
  <template slot="items" scope="props">
   <td>{{ props.item.quantity }}</td>
   <td class="text-xs-right">{{ props.item.price }}</td>
  </template>
  </v-data-table>
</v-flex>
</v-layout>
</v-container>
</template>


<script>
import axios from 'axios';
import Store from '../store/store.js';

export default {
  data: () => ({
    dataLoaded: false,
    ordersHeader:[{
          text: 'Quantity',
          align: 'left',
          sortable: false,
          value: 'quantity'
        },
        {
          text: 'Price',
          value: 'price'
        }],
    buyin: [],
    sellin:[],
    props: {
      'v-data-table': {
      },
      'v-edit-dialog': {
      }
    },
    getTradeData(currency, buyin,sellin) {
      if (!this.dataLoaded) {
        axios.get(this.$store.state.urlback + this.$store.state.services.tradeHistory,
          currency
          )
          .then(function(response) {
            if (response.status)
              if (response.status == 200) {
                for (var i = 0; i < response.data.length; i++) {
                  var tmp = response.data[i]
                  if(tmp.buying == true){
                    buyin.push(tmp)
                  }
                  else {
                    sellin.push(tmp)
                  }
                }
              }
            else {}
          })
          .catch(function(error) {
            console.error(error.message);
          });
        this.dataLoaded = true;
      }
    }
  })
}
</script>



<style lang="css">
</style>
