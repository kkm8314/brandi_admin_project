import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';



Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
