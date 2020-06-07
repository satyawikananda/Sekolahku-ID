<template>
  <v-layout column align-center justify-center class="ma-5 pb-5">
    <v-img
      alt="Sekolah ku logo"
      class="shrink mt-5 hero-img"
      contain
      src="../../assets/images/undraw_back_to_school_inwc.svg"
      transition="scale-transition"
    />
    <h3
      class="text-center mt-3 pa-3 title font-weight-reguler"
      :style="{ color: $vuetify.theme.themes[theme].text }"
    >
      {{ about.title }}
    </h3>
    <span
      class="pa-3 text-center subtitle-2 font-weight-reguler"
      :style="{ color: $vuetify.theme.themes[theme].text }"
    >
      {{ about.desc }}
    </span>
    <span
      class="pa-3 text-center subtitle-2 font-weight-reguler"
      :style="{ color: $vuetify.theme.themes[theme].text }"
    >
      {{ about.copyright }}
    </span>
  </v-layout>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      about: {
        title: "About Sekolahku ID",
        desc:
          "Sekolahku ID adalah aplikasi yang memberikan data-data sekolah yang ada di Indonesia",
        copyright: "Develop by: Satya wikananda :)"
      }
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
