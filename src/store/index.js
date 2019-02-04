import Vue from 'vue'
import Vuex from 'vuex'

import stats from './modules/stats'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
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
    }
  }
})
