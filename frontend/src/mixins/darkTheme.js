export const darkTheme = {
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.darkTheme = true;
        this.$vuetify.theme.dark = true;
      } else {
        this.darkTheme = false;
        this.$vuetify.theme.dark = false;
      }
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
