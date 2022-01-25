import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/store",
      component: () => import("@/components/StoreDataPattern"),
    },
    {
      path: "/components",
      component: () => import("@/components/ComponentsPattern"),
    },
    {
      path: "/jobs",
      component: () => import("@/components/JobsView"),
    },
    {
      path: "/slot",
      component: () => import("@/components/SlotPattern"),
    },
    {
      path: "/user/:id",
      component: () => import("@/components/UserView"),
    },
    {
      path: "/control",
      component: () => import("@/components/ControlComponent"),
    },
  ],
});

export default router;
