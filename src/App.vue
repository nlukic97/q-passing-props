<template>
  <div id="app">
    <div id="nav">      
      <router-view/>
    </div>
    <ul>
      <li v-for="(currency, index) in items" :key="index">
        <h1>{{index}}</h1>
        <p>Symbol: {{currency.symbol}}</p>
        <p>rate: {{currency.rate}}</p>
        <p>rate_float: {{currency.rate_float}}</p>
        <p>--------------------------------------------</p>
      </li>
    </ul>   
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import axios from 'axios';

export default {
  name: 'app',
  data(){
    return {
      items: null,
      text: null
    }
  },
  methods: {
    getData: function(){
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response=>{
        this.items =  response.data.bpi
        console.log(this.items)
      })
      .catch(err=>{
        console.log('Your request could not be processed. ' + err)
      })
    },

    //ovo ovde ne radi
    getString: function(){
      axios.get('data.php')
      .then(response=>{
        this.text =  JSON.parse(response)
        console.log(this.text)
      })
      .catch(err=>{
        console.log('String request could not be processed. ' + err)
      })
    }
  },
  mounted(){
    this.getData()
    this.getString()
  }
}
</script>
