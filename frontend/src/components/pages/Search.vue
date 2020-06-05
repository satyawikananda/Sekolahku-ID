<template>
  <v-container grid-list-xl>
    <h3
      class="red--text text--darken-2 text-center mt-3 pa-3 title font-weight-reguler"
    >Pilih wilayah</h3>
    <v-layout row justify-space-between>
      <v-flex md4 mx-auto>
        <p
          class="red--text text--darken-2 text-center pb-2 subtile-1 font-weight-reguler"
        >Wilayah yang dicari: {{searchWilayah}}</p>
        <v-select
          v-model="searchWilayah"
          menu-props="auto"
          label="Pilih wilayah"
          solo
          outline
          full-width
          :items="wilayah"
        ></v-select>
      </v-flex>
      <v-flex md4 mx-auto>
        <p
          class="red--text text--darken-2 text-center pb-2 subtile-1 font-weight-reguler"
        >Tingkatan sekolah: {{tingkatanSekolah}}</p>
        <v-select
          v-model="tingkatanSekolah"
          menu-props="auto"
          label="Pilih tingkatan sekolah"
          solo
          outline
          full-width
          :items="bentuk"
        ></v-select>
      </v-flex>
      <v-flex md5 mx-auto>
        <v-btn color="primary" style="width:100%" dark large>Cari sekolah</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { getWilayah } from "@/mixins/getWilayah.js";
export default {
  name: "Sekolah",
  mixins: [getWilayah],
  data() {
    return {
      searchWilayah: "",
      tingkatanSekolah: "",
      bentuk: ["SD", "SMP", "SMA", "SMK"]
    };
  }
};
</script>
