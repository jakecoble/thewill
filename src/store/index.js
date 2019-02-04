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
    decay ({ stats }) {
      for (var stat in stats) {
        stats[stat].value -= stats[stat].decay
        stats[stat].value = Math.max(stats[stat].value, 0)
      }
    }
  },

  actions: {
    endDay ({ commit }) {
      commit('decay')
    }
  }
})
