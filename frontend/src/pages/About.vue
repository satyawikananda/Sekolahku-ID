<template>
  <v-container grid-list-lg>
    <v-layout row justify-space-between>
      <v-flex md5 class="mt-8" mx-auto>
        <v-img
          alt="Sekolah ku logo"
          class="shrink mx-auto hero-img"
          contain
          src="../assets/images/undraw_back_to_school_inwc.svg"
          transition="scale-transition"
        />
        <h3
          class="text-center pa-3 title font-weight-reguler"
          :style="{ color: $vuetify.theme.themes[theme].text }"
        >
          {{ about.title }}
        </h3>
        <p
          class="text-center subtitle-2 font-weight-reguler"
          :style="{ color: $vuetify.theme.themes[theme].text }"
        >
          {{ about.desc }}
        </p>
        <p
          class="text-center subtitle-2 font-weight-reguler"
          :style="{ color: $vuetify.theme.themes[theme].text }"
        >
          {{ about.copyright }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
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
