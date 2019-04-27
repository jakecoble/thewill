import { ModIds, ModTypes } from './constants.js'
import { TaskIds, EffectTypes } from '../tasks/constants.js'

export default {
  namespaced: true,

  state: {
    [ModIds.MEDICATED]: {
      display_name: 'Medicated',
      description: 'Sometimes a salve, sometimes an ordeal, always a gamble.',
      will: 3,
      duration: 7,
      currentDecay: 0,
      active: false,
      type: ModTypes.DEFAULT,
      effects: [
        {
          chance: 1,
          type: EffectTypes.REMOVE_MOD,
          targetId: ModIds.MEDICATED
        }
      ]
    },

    [ModIds.TIRED]: {
      display_name: 'Tired',
      description: 'Your body is heavy with the weight of fatigue.',
      will: -2,
      org: -2,
      active: true,
      hidden: true,
      type: ModTypes.DEFAULT,
      effects: []
    },

    [ModIds.HUNGRY]: {
      display_name: 'Hungry',
      description: 'Your stomach rumbles in complaint.',
      will: -2,
      addTasks: [TaskIds.EAT_CANNED_FOOD],
      active: true,
      type: ModTypes.DEFAULT,
      effects: []
    },

    [ModIds.INFECTION]: {
      display_name: 'Infected',
      description: 'Annoying today. Deadly tomorrow.',
      will: -1,
      duration: 2,
      currentDecay: 0,
      active: false,
      type: ModTypes.DISEASE,
      effects: [
        {
          chance: 1,
          type: EffectTypes.REMOVE_MOD,
          targetId: ModIds.INFECTION
        },

        {
          chance: 0.5,
          type: EffectTypes.ADD_MOD,
          targetId: ModIds.BAD_INFECTION
        }
      ]
    },

    [ModIds.BAD_INFECTION]: {
      display_name: 'Badly Infected',
      description: 'This infection has progressed. It can only get worse.',
      will: -3,
      active: false,
      type: ModTypes.DEFAULT,
      effects: []
    },

    'SUPER_DEAD': {
      display_name: 'Super Dead',
      description: 'Just absolutely screwed. (Testing)',
      hygiene: -90,
      active: true,
      type: ModTypes.DEFAULT,
      effects: []
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
    },

    modsByType: (state, getters) => (modType) => {
      return getters.allMods.filter(mod => mod.type === modType)
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

    processEffects ({ commit, dispatch }, effects) {
      effects.forEach(effect => {
        if (Math.random() < effect.chance) {
          switch (effect.type) {
            case EffectTypes.ADD_MOD:
              commit('activate', effect.targetId)
              break
            case EffectTypes.REMOVE_MOD:
              commit('deactivate', effect.targetId)
              break
            case EffectTypes.REVEAL_MOD:
              dispatch('revealRandom')
              break
          }
        }
      })
    },

    decay ({ commit, dispatch, state, getters }) {
      getters.activeMods.forEach(mod => {
        if (mod.duration) {
          commit('decay', mod.id)

          if (mod.currentDecay === mod.duration) {
            commit('resetDecay', mod.id)

            dispatch('processEffects', mod.effects)
          }
        }
      })
    }
  }
}
