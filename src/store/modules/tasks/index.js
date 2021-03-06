/* tasks.js
 * Various choices that the player can make. These choices have different
 * effects on the modifiers - activating some, deactivating others. They can
 * also change the player's stats.
 */
import { TaskIds, EffectTypes, ModIds } from '../constants.js'

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
          targetId: ModIds.MEDICATED
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
          targetId: ModIds.HUNGRY
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
      // If the task is available, activate its effects
      var task = state[taskId]

      if (task.enabled) {
        dispatch('modifiers/processEffects', task.effects, { root: true })

        commit('disable', taskId)
      }
    },

    activateIfAffordable ({ dispatch, state }, { taskId, will, money }) {
      // If the player has the resources, activate the chosen task
      var task = state[taskId]

      return new Promise((resolve, reject) => {
        if (will >= task.will_cost && money >= task.money_cost) {
          dispatch('activate', taskId)

          resolve({
            will: task.will_cost,
            money: task.money_cost
          })
        } else {
          // The player shouldn't even have the option to activate a task they
          // can't afford
          reject(new Error('Attempted to purchase unaffordable task'))
        }
      })
    }
  }
}
