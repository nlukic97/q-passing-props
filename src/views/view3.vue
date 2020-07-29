<template>
  <div class="view3">
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/admin'>Admin</router-link>
    <router-link to='/view3'>view3</router-link>
    <h1>This is vue 3</h1>
    <HelloWorld :msg='time'/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'view3',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      time: ''
    }
  },
  methods: {
    calcTime(){
      setInterval(()=>{
        var a = (new Date).toLocaleTimeString();
        this.time = a;
      },1000)
    }
  },
  beforeMount(){
    this.calcTime()
  }
}
</script>