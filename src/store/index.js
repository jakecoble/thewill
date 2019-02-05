import Vue from 'vue'
import Vuex from 'vuex'

import stats from './modules/stats'
import modifiers from './modules/modifiers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modifiers,
    stats
  },

  state: {
    spoons: 1
  },

  mutations: {
  },

  actions: {
    endDay ({ commit }) {
      commit('stats/decay')
      commit('modifiers/decay')
    }
  }
})
