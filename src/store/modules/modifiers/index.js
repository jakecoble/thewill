import { ModIds } from './constants.js'
import { TaskIds } from '../tasks/constants.js'

export default {
  namespaced: true,

  state: [
    {
      id: ModIds.MEDICATED,
      display_name: 'Medicated',
      description: 'Sometimes a salve, sometimes an ordeal, always a gamble.',
      will: 3,
      duration: 7,
      currentDecay: 0,
      active: false
    },

    {
      id: ModIds.TIRED,
      display_name: 'Tired',
      description: 'Your body is heavy with the weight of fatigue.',
      will: -2,
      org: -2,
      active: true,
      hidden: true
    },

    {
      id: ModIds.HUNGRY,
      display_name: 'Hungry',
      description: 'Your stomach rumbles in complaint.',
      will: -2,
      addTasks: [TaskIds.EAT_CANNED_FOOD],
      active: true
    }
  ],

  getters: {
    activeMods (state) {
      var active = []

      for (let mod of state) {
        if (mod.active) {
          active.push(mod)
        }
      }

      return active
    },

    hiddenMods (state) {
      return state.filter(mod => mod.hidden)
    },

    reducedModBonuses: (state, getters) => (bonusType) => {
      return getters.activeMods.reduce((bonus, mod) => bonus + (mod[bonusType] || 0), 0)
    }
  },

  mutations: {
    activate (state, modId) {
      state.find(mod => mod.id === modId).active = true
    },

    deactivate (state, modId) {
      state.find(mod => mod.id === modId).active = false
    },

    reveal (state, modId) {
      state.find(mod => mod.id === modId).hidden = false
    },

    decay (state, modId) {
      state.find(mod => mod.id === modId).currentDecay += 1
    },

    resetDecay (state, modId) {
      state.find(mod => mod.id === modId).currentDecay = 0
    }
  },

  actions: {
    revealRandom ({ commit, getters }) {
      var hidden = getters.hiddenMods
      var idx = Math.floor(Math.random() * hidden.length)

      commit('reveal', hidden[idx].id)
    },

    decay ({ commit, state }) {
      state.forEach(mod => {
        commit('decay', mod.id)

        if (mod.currentDecay === mod.duration) {
          commit('deactivate', mod.id)
          commit('resetDecay', mod.id)
        }
      })
    }
  }
}
