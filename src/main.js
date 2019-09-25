import Vue from 'vue';
import { store } from '../store';

import App from './App.vue'
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(SuiVue)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
