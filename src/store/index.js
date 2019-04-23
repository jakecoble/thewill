import Vue from 'vue'
import Vuex from 'vuex'

import stats from './modules/stats'
import modifiers from './modules/modifiers'
import choices from './modules/choices'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    choices,
    modifiers,
    stats
  },

  state: {
    will: 0,
    maxWill: 10
  },

  mutations: {
    resetWill (state) {
      state.will = state.maxWill
    }
  },

  actions: {
    endDay ({ commit }) {
      commit('modifiers/decay')
      commit('resetWill')
    }
  }
})
