import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
          dark: {
            primaryBack: "#1C2A35",
            secondaryBack: "#192630",

            background: "#171E24",

            primaryColor: "#f1f1f1",
            secondaryColor: "#f9f9f9",
          },
          light: {
            // Custom colors
            background: "#171E24",
            secondaryBack: "#f1f1f1"
          }
        }
      }
});
