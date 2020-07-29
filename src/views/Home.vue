<template>
  <div class="home">
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/admin'>Admin</router-link>
    <router-link to='/view3'>view3</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
