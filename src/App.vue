<template>
  <v-app>
    <navbar />
    <v-content>
      <home />
    </v-content>
    <NavBottom />
  </v-app>
</template>

<script>
import Navbar from "@/components/master/Navbar.vue";
import NavBottom from "@/components/master/NavBottom.vue";
import Home from "@/components/pages/Home.vue";
export default {
  name: "App",
  components: {
    Navbar,
    NavBottom: NavBottom,
    Home
  },
  data: () => ({
    //
  })
};
</script>
