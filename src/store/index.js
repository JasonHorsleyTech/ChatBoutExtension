import Vue from 'vue'
import Vuex from 'vuex'
import VuexWebExtensions from 'vuex-webextensions';

import Axios from 'axios';
const hasha = require('hasha');

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [VuexWebExtensions({
    persistentStates: ['local_url', 'traveler_uuid']
  })],

  state: {
    local_url: 'https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string',

    location: {},

    traveler_uuid: null,

    traveler_name: null,
  },

  mutations: {
    setLocalUrl(state, url = null) {
      state.local_url = url;
    },

    setLocation(state, locationData = {}) {
      state.location = locationData
    },

    setTravelerUuid(state, uuid = null) {
      state.traveler_uuid = uuid
    },

    setTravelerName(state, name = null) {
      state.traveler_name = name
    }
  },

  actions: {
    async registerTraveler({ commit }, name) {
      let { data } = await Axios.post('/traveler', { name })

      commit('setTravelerUuid', data)
    },

    async travel({ commit }, { url }) {
      let location_key = hasha(url, {
        algorithm: 'sha256',
      })

      let { data } = await Axios.post(`/location`, { location_key })

      commit('setLocation', data)
    },

    async updateTravelerName({ commit }, name) {
      let { data } = await Axios.patch(`/traveler`, { name })

      commit('setTravelerName', data.name)
    },

    async mark({ state }, content) {
      let { data } = await Axios.post(`/mark`, {
        location_key: hasha(state.local_url, { algorithm: 'sha256' }),
        content
      })

      return data
    }
  },

  getters: {
    /**
     * Is the traveler registered on API?
     * 
     * @param {Object} state 
     * @returns Boolean
     */
    isRegistered(state) {
      console.log(state.traveler_uuid)
      return state.traveler_uuid !== null
    }
  }
})

