<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div id="nav">      
            <router-view/>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">E</v-col>
        <v-col cols="4">E</v-col>
        <v-col cols="4">E</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
