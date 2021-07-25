<template>
  <v-app>
    <navbar @drawerStatus="drawerStatusChange()"></navbar>
    <div class="background mb-8">
      <router-view></router-view>
    </div>
    <Footer />
    <v-navigation-drawer
      class="secondaryBack"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Personaliza tu panel</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          class="d-flex align-center my-2"
        >
          <div class="text-start" style="width: 50%"><span>{{ item.name }}</span></div>
          <div v-if="!item.required" class="d-flex justify-end align-center" style="width: 50%">
            <v-switch
              v-model="item.status"
              hide-details
              class="mt-0"
              @change="
                $store.dispatch('UPDATE_DASHBOARD_ITEM', {
                  name: item.name,
                  status: item.status
                })
              "
              >Status</v-switch
            >
          </div>
          <div v-else style="width: 50%"></div>
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
          id: "oficial",
          required: true
        },
        {
          name: "Dolar Blue",
          status: true,
          id: "blue",
          required: true
        },
        {
          name: "Dolar Bolsa",
          status: false,
          id: "bolsa",
          required: false
        },
        {
          name: "Dolar Liqui",
          status: true,
          id: "liqui",
          required: false
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
      this.$store.commit("DASHBOARD_ITEM", {
        name: "Dolar Liqui",
        status: false
      });
      this.menuItems[3].status = false;
      this.menuItems[4].status = false;
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
