<template>
  <div class="div">
    <div id="box">
      <h1>Hello div. The prop is {{helloDisplay}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    helloDisplay: Boolean
  },
  data(){
    return {
      displayProp: this.helloDisplay
    }
  },

  watch: {
    helloDisplay: function () {
      this.displayProp= this.helloDisplay

      if(this.displayProp === true){
      document.getElementById('box').style.display = "block";
      console.log('The prop is: ' + this.displayProp)

      } else if (this.displayProp === false) {
        document.getElementById('box').style.display = "none";
        console.log('The prop is: ' + this.displayProp)
      }
    }
  },
  mounted(){
    //stavio sam ovaj if ovde, ali nije radilo
  }
}
</script>
<style>
  #box {
    background-color: red;
  }

</style>