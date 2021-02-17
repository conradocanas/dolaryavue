<template>
  <v-app-bar class="secondaryBack" dark>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-left align-center">
          <h2>DolarYa.ar</h2>
          <span class="d-flex align-end ml-1">
            <img style="max-height: 20px; padding-top: 8px" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="">
          </span>
        </v-col>
        <v-col class="d-flex justify-end align-center">
          <router-link to="/">Home</router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>