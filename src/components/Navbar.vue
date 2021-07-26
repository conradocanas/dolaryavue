<template>
  <v-app-bar class="secondaryBack" dark>
    <v-container class="px-0">
      <v-row>
        <v-col class="d-flex justify-left align-center">
          <h2>DolarYa.ar</h2>
          <span class="d-flex align-end ml-1">
            <img
              style="max-height: 20px; padding-top: 8px"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
              alt=""
            />
          </span>
        </v-col>
        <v-col class="d-flex justify-end align-center">
          <v-tooltip color="primary" v-model="tooltip" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                @click="$emit('drawerStatus')"
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <span style="font-size: 12px">Personaliza tu panel</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    tooltip: true
  }),
  created() {
    this.$vuetify.theme.dark = true;
    setTimeout(() => { this.tooltip = false}, 3000)
  }
};
</script>
