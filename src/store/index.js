import Vue from 'vue'
import Vuex from 'vuex'

import stats from './modules/stats'
import modifiers from './modules/modifiers'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    modifiers,
    stats
  },

  state: {
    will: 0,
    baseMaxWill: 10,
    money: 1000
  },

  getters: {
    maxWill (state, getters) {
      var maxWill = state.baseMaxWill
      var activeMods = getters['modifiers/activeMods']

      maxWill += activeMods.reduce((will, mod) => will + mod.will || 0, 0)
      return maxWill
    }
  },

  mutations: {
    resetWill (state) {
      state.will = state.getters.maxWill
    }
  },

  actions: {
    endDay ({ commit }) {
      commit('modifiers/decay')
      commit('resetWill')
    }
  }
})
