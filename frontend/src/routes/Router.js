import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: () => import("../components/pages/Home.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../components/pages/About.vue")
    },
    {
      path: "/favorite",
      name: "Favorite",
      component: () => import("../components/pages/Favorite.vue")
    },
    {
      path: "/search/sekolah",
      name: "Search",
      component: () => import("../components/pages/Search.vue")
    },
    {
      path: "/setting",
      name: "Setting",
      component: () => import("../components/pages/Setting.vue")
    }
  ]
});
