import Vue from "vue";
import Router from "vue-router";
import Home from "@/routerCom/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Search",
      name: "search",
      component: () =>
        import("@/routerCom/Search.vue")
    },
    {
      path: "/Order",
      name: "order",
      component: () =>
        import("@/routerCom/Order.vue")
    },
    {
      path: "/Personal",
      name: "personal",
      component: () =>
        import("@/routerCom/Personal.vue")
    },
    {
      path: "/Login",
      name: "login",
      component: () =>
        import("@/routerCom/Login.vue")
    }
  ]
});
