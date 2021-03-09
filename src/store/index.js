import Vue from 'vue'
import Vuex from 'vuex'
import VuexWebExtensions from 'vuex-webextensions';

import traveler from '@/store/traveler/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [VuexWebExtensions({
    persistentStates: ['timer']
  })],

  modules: {
    traveler,
  }
})
