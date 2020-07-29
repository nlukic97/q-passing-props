<template>
  <div class="about">
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/admin'>Admin</router-link>
    <router-link to='/view3'>view3</router-link>
    <h1>This is an about page with the Hello component</h1>
    <ul>
      <li id="show">Show Hello</li>
      <li id="hide">Hide Hello</li>
    </ul>
    <Hello class="hello" :helloDisplay="display"/>
  </div>
</template>
<script>
import Hello from '@/components/Hello.vue'
export default {
  name: 'About',
  components: {
    Hello
  },
  data(){
    return {
      display: true
    }
  },
  mounted(){
    document.getElementById('show').addEventListener('click',()=>{
      this.display = true;
      console.log('this.display changed to ' + this.display)
    })

    document.getElementById('hide').addEventListener('click',()=>{
      this.display = false;
      console.log('this.display changed to ' + this.display)
    })
  }
}
</script>
<style>
ul {
  display: flex;
  justify-content: space-around;
}
ul li {
  list-style-type: none;
  border:1px solid purple;
  padding:5px 10px;
}

ul li:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
