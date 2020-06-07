<template>
  <div>
    <v-expansion-panel-header>{{ sekolah }}</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>NPSN</v-list-item-title>
          <v-list-item-subtitle>{{ npsn }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Bentuk sekolah</v-list-item-title>
          <v-list-item-subtitle>{{ bentuk }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Status sekolah</v-list-item-title>
          <v-list-item-subtitle>{{ status }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Alamat sekolah</v-list-item-title>
          <v-list-item-subtitle>{{ alamat }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Provinsi sekolah</v-list-item-title>
          <v-list-item-subtitle>{{ provinsi }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Kabupaten sekolah</v-list-item-title>
          <v-list-item-subtitle>{{ kab }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Kecamatan sekolah</v-list-item-title>
          <v-list-item-subtitle>{{ kec }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-btn disabled color="secondary" class="ma-2 white--text">
        Pin
        <v-icon right dark>mdi-pin</v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        class="ma-2 white--text"
        :href="
          'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng
        "
        :title="sekolah"
      >
        Cari alamat
        <v-icon right dark>mdi-map</v-icon>
      </v-btn>
    </v-expansion-panel-content>
  </div>
</template>
<script>
export default {
  props: [
    "sekolah",
    "npsn",
    "bentuk",
    "status",
    "alamat",
    "provinsi",
    "kab",
    "kec",
    "lat",
    "lng"
  ]
};
</script>
