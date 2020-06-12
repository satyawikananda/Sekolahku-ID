<template>
  <v-bottom-navigation app :value="activeBtn" color="text" grow fixed>
    <v-btn to="/favorite">
      <span>Pin</span>
      <v-icon>mdi-pin</v-icon>
    </v-btn>

    <v-btn to="/">
      <span>Beranda</span>
      <v-icon>mdi-home-circle</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>Tentang</span>
      <v-icon>mdi-alert-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>
