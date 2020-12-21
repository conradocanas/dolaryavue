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

            background: "#171E24"
          },
          light: {
            // Custom colors
            secondaryBack: "#f1f1f1"
          }
        }
      }
});
