import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import VueCompositionAPI from '@vue/composition-api';
import store from '@/store/index';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
