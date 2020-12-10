import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
          dark: {
            secondaryBack: "#222"
          },
          light: {
            // Custom colors
            secondaryBack: "#f1f1f1"
          }
        }
      }
});
