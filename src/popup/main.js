import Vue from 'vue'
import Loader from '@/popup/Loader.vue'
import '@/css/index.css'
import store from '@/store';

import Axios from 'axios'
import { prependRequestsWithDefaults } from '@/network/interceptors.js'
Axios.interceptors.request.use(prependRequestsWithDefaults(), error => (Promise.reject(error)))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,

  render: h => h(Loader)
})
