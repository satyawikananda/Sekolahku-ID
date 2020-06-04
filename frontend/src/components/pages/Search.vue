<template>
  <v-layout column align-center justify-center class="ma-5 pb-5">
    <h3
      class="red--text text--darken-2 text-center mt-3 pa-3 title font-weight-reguler"
    >Pilih wilayah</h3>
    <span
      class="red--text text--darken-2 text-center pb-2 subtile-1 font-weight-reguler"
    >Wilayah yang dicari: {{searchWilayah}}</span>
    <v-select
      v-model="searchWilayah"
      menu-props="auto"
      label="Pilih wilayah"
      dense
      outlined
      full-width
      :items="wilayah"
    ></v-select>
  </v-layout>
</template>
<script>
import { getWilayah } from "@/mixins/getWilayah.js";
export default {
  name: "Sekolah",
  mixins: [getWilayah],
  data() {
    return {
      searchWilayah: ""
    };
  }
};
</script>
