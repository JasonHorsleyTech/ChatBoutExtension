import Axios from 'axios';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
const hasha = require('hasha');

// See? Not doing anything with it.
const generateTravelerPrint = async () => {
    let fp = await FingerprintJS.load()
    let { visitorId } = await fp.get()
    let hash = hasha(visitorId, {
        algorithm: 'sha256',
    })
    return hash
}

export default {
    namespaced: true,

    state: {
        traveler_print: null,

        /**
         * 
         */
        location: {},

        traveler_uuid: null,

        traveler_name: null,
    },

    mutations: {
        /**
         * Set the traveler's print
         * 
         * @param {Object} state 
         * @param {String} print 
         */
        setPrint(state, print = null) {
            state.traveler_print = print
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
            let print = await generateTravelerPrint()

            let { data } = await Axios.post('/traveler', { print, name })

            commit('setPrint', print)
            commit('setTravelerUuid', data)
        },

        async travel({ commit }, { url }) {
            let { data } = await Axios.post(`/location`, { location_key: url })

            commit('setLocation', data)
        },

        async updateTravelerName({ state, commit }, name) {
            let { data } = await Axios.patch(`/traveler/${state.traveler_uuid}`, { name })

            commit('setTravelerName', data.name)
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
            return state.traveler_uuid !== null
        }
    }
}