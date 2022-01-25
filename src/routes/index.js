import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/store',
      component: () => import('@/components/view/StoreDataPattern'),
    },
    {
      path: '/components',
      component: () => import('@/components/view/ComponentsPattern'),
    },
    {
      path: '/slot',
      component: () => import('@/components/view/SlotPattern'),
    },
    {
      path: '/user/:id',
      component: () => import('@/components/view/UserView'),
    },
    {
      path: '/control',
      component: () => import('@/components/view/ControlComponent'),
    },
    {
      path: '/mixin',
      component: () => import('@/components/view/MixinPattern'),
    },
  ],
});

export default router;
