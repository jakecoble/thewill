import { TaskIds, EffectTypes } from './constants.js'

export default {
  namespaced: true,

  state: {
    [TaskIds.VISIT_DOCTOR]: {
      display_name: 'Visit the doctor.',
      will_cost: 5,
      money_cost: 50,
      effects: [
        {
          chance: 0.75,
          type: EffectTypes.ADD_MOD,
          targetId: 'MEDICATED'
        }
      ],
      enabled: true
    },

    [TaskIds.EAT_CANNED_FOOD]: {
      display_name: 'Eat canned food.',
      will_cost: 1,
      money_cost: 2,
      effects: [
        {
          chance: 1,
          type: EffectTypes.REMOVE_MOD,
          targetId: 'HUNGRY'
        }
      ],
      enabled: true
    },

    [TaskIds.VISIT_THERAPIST]: {
      display_name: 'Visit a therapist.',
      will_cost: 2,
      money_cost: 100,
      effects: [
        {
          chance: 1,
          type: EffectTypes.REVEAL_MOD
        }
      ],
      enabled: true
    }
  },

  getters: {
    allTasks (state) {
      return Object.keys(state)
        .map(key => {
          return {
            ...state[key],
            id: key
          }
        })
    },

    availableTasks (state, getters) {
      return getters.allTasks.filter(task => task.enabled)
    }
  },

  mutations: {
    disable (state, taskId) {
      state[taskId].enabled = false
    }
  },

  actions: {
    activate ({ commit, dispatch, state }, taskId) {
      var task = state[taskId]

      if (task.enabled) {
        task.effects.forEach(effect => {
          var fired = Math.random() < effect.chance

          if (fired) {
            switch (effect.type) {
              case EffectTypes.ADD_MOD:
                commit('modifiers/activate', effect.targetId, { root: true })
                break
              case EffectTypes.REMOVE_MOD:
                commit('modifiers/deactivate', effect.targetId, { root: true })
                break
              case EffectTypes.REVEAL_MOD:
                dispatch('modifiers/revealRandom', null, { root: true })
                break
            }
          }
        })

        commit('disable', taskId)
      }
    },

    activateIfAffordable ({ dispatch, state }, { taskId, will, money }) {
      var task = state[taskId]

      return new Promise((resolve, reject) => {
        if (will >= task.will_cost && money >= task.money_cost) {
          dispatch('activate', taskId)

          resolve({
            will: task.will_cost,
            money: task.money_cost
          })
        } else {
          reject(new Error('Attempted to purchase unaffordable task'))
        }
      })
    }
  }
}
