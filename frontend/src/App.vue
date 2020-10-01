<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <navbar />
    <v-content>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </v-content>
    <NavBottom />
  </v-app>
</template>

<script>
import Navbar from "@/components/master/Navbar.vue";
import NavBottom from "@/components/master/NavBottom.vue";
const transition = "fade";
export default {
  name: "App",
  data() {
    return {
      transitionName: transition
    };
  },
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
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
