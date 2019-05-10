import Vue from 'vue'
import Vuex from 'vuex'

import stats from './modules/stats'
import modifiers from './modules/modifiers'
import tasks from './modules/tasks'

import { ModTypes } from './modules/constants.js'

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
      // computes the player's maximum willpower based on currently active modifiers
      var maxWill = state.baseMaxWill
      var activeMods = getters['modifiers/activeMods']

      maxWill += activeMods.reduce((will, mod) => will + mod.will || 0, 0)
      return maxWill
    }
  },

  mutations: {
    will (state, will) {
      state.will = will
    },

    spend (state, { will, money }) {
      state.will -= will
      state.money -= money
    }
  },

  actions: {
    endDay ({ commit, dispatch, getters, state }) {
      // run all the checks and reset the player's willpower at the end of a turn
      dispatch('modifiers/decay')
      dispatch('diseaseCheck')
      commit('will', getters['maxWill'])
    },

    activateTask ({ commit, dispatch, state }, taskId) {
      // activate a tasks effects if it can be afforded
      dispatch('tasks/activateIfAffordable', {
        taskId,
        will: state.will,
        money: state.money
      }).then(spent => {
        commit('spend', spent)
      }).catch(e => console.log(e))
    },

    diseaseCheck ({ state, commit, getters }) {
      // roll to check if the player develops a disease
      var diseaseRoll = Math.floor(Math.random() * 100)

      if (diseaseRoll < getters['stats/diseaseChance']) {
        var diseases = getters['modifiers/modsByType'](ModTypes.DISEASE)
        var diseaseIdx = Math.floor(Math.random() * diseases.length)

        commit('modifiers/activate', diseases[diseaseIdx].id)
      }
    }
  }
})
