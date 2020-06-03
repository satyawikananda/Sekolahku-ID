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
      class="red--text text--darken-2 text-center mt-3 pa-3 title font-weight-reguler"
    >
      {{ about.title }}
    </h3>
    <span
      class="red--text text--darken-2 mt-3 pa-3 subtitle-2 font-weight-reguler"
    >
      {{ about.desc }}
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
        desc: "Sekolahku ID adalah aplikasi blablabla"
      }
    };
  }
};
</script>
