import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.red.darken1,
        text: "#D32F2F",
        secondary: colors.red.darken2,
        anchor: colors.red.darken4,
        background: "#fff"
      },
      dark: {
        primary: "#2e2e2e",
        text: "#ecf0f1",
        background: "#212121"
      }
    }
  }
});
