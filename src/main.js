import { createApp } from 'vue'
import App from './App.vue'

import store from '@/store/store';
import router from '@/router/router';
import i18n from '@/i18n/i18n';

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

createApp(App).use(store).use(router).use(i18n).use(BootstrapVue3).mount('#app')
