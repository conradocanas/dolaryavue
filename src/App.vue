<template>
  <v-app>
    <navbar></navbar>
    <div class="background">
      <router-view></router-view>
    </div>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
