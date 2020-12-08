<template>
  <v-app-bar color="dark accent-4" dark>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      DolarYa.ar
      <div class="dev">codeCave</div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/">Home</router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
