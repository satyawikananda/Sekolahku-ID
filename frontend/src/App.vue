<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <navbar />
    <v-content>
      <router-view />
    </v-content>
    <NavBottom />
  </v-app>
</template>

<script>
import Navbar from "@/components/master/Navbar.vue";
import NavBottom from "@/components/master/NavBottom.vue";
export default {
  name: "App",
  components: {
    Navbar,
    NavBottom: NavBottom
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
