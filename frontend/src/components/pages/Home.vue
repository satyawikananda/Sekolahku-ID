<template>
  <v-layout column align-center justify-center class="ma-5 pb-5">
    <v-img
      alt="Sekolah ku logo"
      class="shrink mt-5 hero-img"
      contain
      src="../../assets/images/undraw_back_to_school_inwc.svg"
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
      class="red--text text--darken-2 text-center mt-3 pa-3 title font-weight-reguler"
    >
      {{ home.title }}
    </h3>
    <v-btn large color="secondary" to="search/sekolah">
      {{ home.button }}
      <v-icon class="ml-2">mdi-magnify</v-icon>
    </v-btn>
  </v-layout>
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
  }
};
</script>
