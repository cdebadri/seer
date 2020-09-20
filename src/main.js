import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'leaflet/dist/leaflet.css';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';

Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('Slider', Slider);
Vue.component('InputText', InputText);
Vue.component('Sidebar', Sidebar);

Vue.use(ToastService);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
