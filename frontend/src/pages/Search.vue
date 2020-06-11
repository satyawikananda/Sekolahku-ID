<template>
  <v-container grid-list-xl>
    <h3
      class="text-center mt-3 pa-3 title font-weight-reguler"
      :style="{ color: $vuetify.theme.themes[theme].text }"
    >
      Pilih wilayah
    </h3>
    <v-layout row justify-space-between>
      <v-flex md4 mx-auto>
        <p
          class="text-center pb-2 subtile-1 font-weight-reguler"
          :style="{ color: $vuetify.theme.themes[theme].text }"
        >
          Wilayah yang dicari
        </p>
        <v-select
          menu-props="auto"
          label="Pilih wilayah"
          solo
          outline
          full-width
          :items="wilayah"
          item-value="kode_wilayah"
          item-text="nama"
          v-model="kode_wilayah"
        ></v-select>
      </v-flex>
      <v-flex md4 mx-auto>
        <p
          class="text-center pb-2 subtile-1 font-weight-reguler"
          :style="{ color: $vuetify.theme.themes[theme].text }"
        >
          Tingkatan sekolah
        </p>
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
        <v-btn
          color="primary"
          @click.prevent="search"
          style="width:100%"
          dark
          large
          >Cari sekolah</v-btn
        >
      </v-flex>
    </v-layout>
    <div v-if="isLoading">
      <loading loading="Mohon tunggu" />
    </div>
    <div v-if="data.length == 0">
      <v-layout row justify-space-between>
        <v-flex md8 mx-auto>
          <h3
            class="text-center pb-2 subtile-1 font-weight-reguler"
            :style="{ color: $vuetify.theme.themes[theme].text }"
          >
            Data tidak di temukan
          </h3>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row justify-space-between v-else>
      <v-flex md8 mx-auto>
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(data, index) in data" :key="index">
            <v-expansion-panel-header>{{
              data.sekolah
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>NPSN</v-list-item-title>
                  <v-list-item-subtitle>{{ data.npsn }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Bentuk sekolah</v-list-item-title>
                  <v-list-item-subtitle>{{ data.bentuk }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Status sekolah</v-list-item-title>
                  <v-list-item-subtitle>{{
                    data.status === "N" ? "Negeri" : "Swasta"
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Alamat sekolah</v-list-item-title>
                  <v-list-item-subtitle>{{
                    data.alamat_jalan
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Provinsi sekolah</v-list-item-title>
                  <v-list-item-subtitle>{{
                    data.propinsi
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Kabupaten sekolah</v-list-item-title>
                  <v-list-item-subtitle>{{
                    data.kabupaten_kota
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Kecamatan sekolah</v-list-item-title>
                  <v-list-item-subtitle>{{
                    data.kecamatan
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-btn
                disabled
                color="secondary"
                class="ma-2 white--text"
                @click="
                  pinSekolah(
                    data.sekolah,
                    data.npsn,
                    data.bentuk,
                    data.status,
                    data.alamat_jalan,
                    data.propinsi,
                    data.kabupaten_kota,
                    data.kecamatan
                  )
                "
              >
                Pin
                <v-icon right dark>mdi-pin</v-icon>
              </v-btn>
              <v-btn
                target="blank"
                color="secondary"
                class="ma-2 white--text"
                :href="
                  'https://www.google.com/maps/search/?api=1&query=' +
                    data.lintang +
                    ',' +
                    data.bujur
                "
                :title="data.sekolah"
              >
                Cari alamat
                <v-icon right dark>mdi-map</v-icon>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { getWilayah } from "@/mixins/getWilayah.js";
import { getSekolah } from "@/mixins/getSekolah.js";
// import sekolah from "@/components/data/Data.vue";
import loading from "@/components/loading/Loading.vue";
export default {
  name: "Sekolah",
  mixins: [getWilayah, getSekolah],
  data() {
    return {
      bentuk: ["SD", "SMP", "SMA", "SMK"]
    };
  },
  components: {
    loading
    // sekolah
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
