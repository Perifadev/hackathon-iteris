<template>
<<<<<<< HEAD
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
=======

  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
>>>>>>> 8710952065ad99b20949d1c451e6b418342e48ba
</template>

<script>
import AppTopBar from "../src/components/AppTopBar.vue"
export default {
  name:"App",
  components:{
    AppTopBar
  }
};


</script>

<style lang="scss">

</style>
