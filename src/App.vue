<template>

  <div id="app">
    <div id="content">
      <table>
        <col width="20%">
        <col width="60%">
        <col width="20%">
        <tr>
          <td id="left-toolbar">
            <ul>
              <li>
                <appForm></appForm>
              </li>
              <li>
                <appWallet></appWallet>
              </li>
              <li>
                <appLastTrade></appLastTrade>
              </li>
            </ul>
          </td>
          <td id="main">

            <ul>
              <li>{{pasta}}
                <appChart></appChart>
              </li>
              <li>
                <appOrderForm></appOrderForm>
              </li>
              <li>
                <appGlobalHistory></appGlobalHistory>
              </li>
            </ul>
          </td>
          <td id="right-toolbar">
            <ul>
              <li>
                <appNews></appNews>
              </li>
              <li>
                <appTrollBox></appTrollBox>
              </li>
            </ul>
          </td>
        </tr>

      </table>
  </div>
</div>


</template>


<script>

  import news from './components/news.vue'
  import form from './components/connexion.vue'
  import chart from './components/chart.vue'
  import wallet from './components/wallet.vue'
  import trollBox from './components/trollBox.vue'
  import orderForm from './components/orderForm.vue'
  import bookOrder from './components/bookOrder.vue'
  import lastTrade from './components/lastTrade.vue'
  import globalHistory from './components/globalHistory.vue'

  import Store from './store/store.js'


  export default {
    store: Store,
    name: 'app',
    data () {
      return {
        msg: 'Je suis un message',
        bttn: 'Je suis un bouton',
        showing: false,
        namePage: this.$store.state.page,
        pasta: this.$store.state.ajax.tamer
      };
    },
    methods: {
      state(){
        return this.$store.state.count;
      }
    },
    components: {
      appNews : news,
      appForm : form,
      appChart : chart,
      appWallet : wallet,
      appTrollBox : trollBox,
      appOrderForm : orderForm,
      appBookOrder : bookOrder,
      appLastTrade : lastTrade,
      appGlobalHistory : globalHistory

    }
  }




</script>


<style>

.h1{
  text-decoration-style: double;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #ffffff;

}
#left-toolbar{
  background-color: #ff0000;
}
#right-toolbar{
  background-color: #00ff00;
}
#main{
  background-color: #0000ff;
}


</style>
