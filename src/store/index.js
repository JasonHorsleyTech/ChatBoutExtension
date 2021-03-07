import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import VuexWebExtensions from 'vuex-webextensions';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [VuexWebExtensions({
    persistentStates: ['timer']
  })],

  state: {
    timer: 0,

    location: null,
  },

  mutations: {
    setTimer(state, number) {
      console.log(number)
      state.timer = number
    },

    setLocation(state, data) {
      state.location = data
    }
  },

  actions: {
    incrementTimer({ state, commit }) {
      commit('setTimer', state.timer + 1);
    },

    async updateLocation({ commit }, { url }) {
      let { data } = await axios.post(`/traveler`, { url })

      commit('setLocation', data)
    }
  },

  modules: {
  }
})
