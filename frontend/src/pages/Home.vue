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
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="secondary"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <h3
          class="text-center mt-3 pa-3 title font-weight-reguler"
          :style="{ color: $vuetify.theme.themes[theme].text }"
        >
          {{ home.title }}
        </h3>
        <center>
          <v-btn large color="secondary" to="search/sekolah">
            {{ home.button }}
            <v-icon class="ml-2">mdi-magnify</v-icon>
          </v-btn>
        </center>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.hero-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
}
</style>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      home: {
        title: "Selamat datang di Sekolahku ID",
        button: "Cari sekolah kamu"
      },
      isLoading: false
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
