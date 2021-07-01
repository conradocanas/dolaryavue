<template>
  <v-app>
    <navbar @drawerStatus="drawerStatusChange()"></navbar>
    <div class="background mb-8">
      <router-view></router-view>
    </div>
    <Footer />
    <v-navigation-drawer class="secondaryBack" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Personaliza tu panel</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          class="d-flex justify-space-around"
          v-for="(item, i) in menuItems"
          :key="i"
        >
          <span>{{ item.name }}</span>
          <v-switch
            v-model="item.status"
            @change="$store.dispatch('UPDATE_DOLAR_BOLSA', item.status)"
            :readonly="item.id !== 'bolsa'"
            >Status</v-switch
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          name: "Dolar Oficial",
          status: true,
          id: "oficial"
        },
        {
          name: "Dolar Blue",
          status: true,
          id: "blue"
        },
        {
          name: "Dolar Bolsa",
          status: true,
          id: "bolsa"
        }
      ]
    };
  },
  methods: {
    drawerStatusChange() {
      this.drawer = !this.drawer;
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  },
  mounted() {
    if (this.mobile) {
      this.menuItems[2].status = false;
      this.$store.dispatch("UPDATE_DOLAR_BOLSA", false);
    }
  }
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
