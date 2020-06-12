import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: () => import("@/pages/Home.vue"),
      meta: { transitionName: "slide" }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/pages/About.vue"),
      meta: { transitionName: "slide" }
    },
    {
      path: "/favorite",
      name: "Favorite",
      component: () => import("@/pages/Favorite.vue"),
      meta: { transitionName: "slide" }
    },
    {
      path: "/search/sekolah",
      name: "Search",
      component: () => import("@/pages/Search.vue"),
      meta: { transitionName: "slide" }
    },
    {
      path: "/setting",
      name: "Setting",
      component: () => import("@/pages/Setting.vue"),
      meta: { transitionName: "slide" }
    }
  ]
});
