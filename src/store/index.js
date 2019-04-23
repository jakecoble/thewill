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
    spoons: 1
  },

  mutations: {
    spoons (state, spoons) {
      state.spoons += spoons
    }
  },

  actions: {
    endDay ({ commit }) {
      commit('modifiers/decay')
    }
  }
})
