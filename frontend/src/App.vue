<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <navbar />
    <v-content>
      <transition :name="transitionName" mode="out-in">
        <router-view />
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
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";

        this.transitionName = transitionName || transition;
        next();
      }
    });
  }
};
</script>
<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
