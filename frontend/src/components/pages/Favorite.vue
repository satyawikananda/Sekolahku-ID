<template>
  <v-container grid-list-xl>
    <h3
      class="text-center mt-3 pa-3 title font-weight-reguler"
      :style="{ color: $vuetify.theme.themes[theme].text }"
    >
      Dalam pembuatan
    </h3>
  </v-container>
</template>
<script>
export default {
  name: "Favorite",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
