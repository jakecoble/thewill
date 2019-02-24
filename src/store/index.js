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
    activate ({ commit, dispatch, state }, choice) {
      let c = state.choices[choice]
      let costs = {
        spoons: c.spoons_cost || 0,
        money: c.money_cost || 0,
        hygiene: c.hygiene_cost || 0,
        org: c.org_cost || 0
      }

      if (state.spoons - costs.spoons >= 0 &&
          dispatch('stats/spend', costs)) {
        commit('spoons', -costs.spoons)

        for (let mod in c.modifiers) {
          dispatch('modifiers/activate', mod)
        }
      }
    },

    endDay ({ commit }) {
      commit('stats/decay')
      commit('modifiers/decay')
    }
  }
})
