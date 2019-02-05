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
    spendSpoons (state, spoons) {
      state.spoons -= spoons
    },

    spendMoney (state, money) {
      state.stats.money.value -= money
    }
  },

  actions: {
    activate (store, choice) {
      choice = store.state.choices[choice]
      store.commit('spendSpoons', choice.spoons_cost)
      store.commit('spendMoney', choice.money_cost)

      for (let mod in choice.modifiers) {
        store.commit('modifiers/activate', mod)
      }
    },

    endDay ({ commit }) {
      commit('stats/decay')
      commit('modifiers/decay')
    }
  }
})
