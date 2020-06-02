<template>
  <v-bottom-navigation :value="activeBtn" color="primary" grow fixed>
    <v-btn>
      <span>Favorite</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Home</span>
      <v-icon>mdi-home-circle</v-icon>
    </v-btn>

    <v-btn>
      <span>About</span>
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
