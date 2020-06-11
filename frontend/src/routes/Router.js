import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: () => import("@/pages/Home.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/pages/About.vue")
    },
    {
      path: "/favorite",
      name: "Favorite",
      component: () => import("@/pages/Favorite.vue")
    },
    {
      path: "/search/sekolah",
      name: "Search",
      component: () => import("@/pages/Search.vue")
    },
    {
      path: "/setting",
      name: "Setting",
      component: () => import("@/pages/Setting.vue")
    }
  ]
});
