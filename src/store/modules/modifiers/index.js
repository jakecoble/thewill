import { ModIds } from './constants.js'
import { TaskIds } from '../tasks/constants.js'

export default {
  namespaced: true,

  state: {
    [ModIds.MEDICATED]: {
      display_name: 'Medicated',
      description: 'Sometimes a salve, sometimes an ordeal, always a gamble.',
      will: 3,
      duration: 7,
      currentDecay: 0,
      active: false
    },

    [ModIds.TIRED]: {
      display_name: 'Tired',
      description: 'Your body is heavy with the weight of fatigue.',
      will: -2,
      org: -2,
      active: true,
      hidden: true
    },

    [ModIds.HUNGRY]: {
      display_name: 'Hungry',
      description: 'Your stomach rumbles in complaint.',
      will: -2,
      addTasks: [TaskIds.EAT_CANNED_FOOD],
      active: true
    }
  },

  getters: {
    allMods (state) {
      return Object.keys(state)
        .map(key => {
          return {
            ...state[key],
            id: key
          }
        })
    },

    activeMods (state, getters) {
      return getters.allMods.filter(mod => mod.active)
    },

    hiddenMods (state, getters) {
      return getters.allMods.filter(mod => mod.hidden)
    },

    reducedModBonuses: (state, getters) => (bonusType) => {
      return getters.activeMods.reduce((bonus, mod) => bonus + (mod[bonusType] || 0), 0)
    }
  },

  mutations: {
    activate (state, modId) {
      state[modId].active = true
    },

    deactivate (state, modId) {
      state[modId].active = false
    },

    reveal (state, modId) {
      state[modId].hidden = false
    },

    decay (state, modId) {
      state[modId].currentDecay += 1
    },

    resetDecay (state, modId) {
      state[modId].currentDecay = 0
    }
  },

  actions: {
    revealRandom ({ commit, getters }) {
      var hidden = getters.hiddenMods
      var idx = Math.floor(Math.random() * hidden.length)

      commit('reveal', hidden[idx].id)
    },

    decay ({ commit, state, getters }) {
      getters.activeMods.forEach(mod => {
        if (mod.duration) {
          commit('decay', mod.id)

          if (mod.currentDecay === mod.duration) {
            commit('deactivate', mod.id)
            commit('resetDecay', mod.id)
          }
        }
      })
    }
  }
}
