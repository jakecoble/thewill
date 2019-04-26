export default {
  namespaced: true,

  state: [
    {
      id: 'VISIT_DOCTOR',
      display_name: 'Visit the doctor.',
      will_cost: 5,
      money_cost: 50,
      effects: [
        {
          chance: 0.75,
          type: 'ADD_MOD',
          targetId: 'MEDICATED'
        }
      ],
      enabled: true
    },

    {
      id: 'EAT_CANNED_FOOD',
      display_name: 'Eat canned food.',
      will_cost: 1,
      money_cost: 2,
      effects: [
        {
          chance: 1,
          type: 'REMOVE_MOD',
          targetId: 'HUNGRY'
        }
      ],
      enabled: true
    },

    {
      id: 'VISIT_THERAPIST',
      display_name: 'Visit a therapist.',
      will_cost: 2,
      money_cost: 100,
      effects: [
        {
          chance: 1,
          type: 'REVEAL_MOD'
        }
      ],
      enabled: true
    }
  ],

  getters: {
    availableTasks (state) {
      var available = []

      for (let task of state) {
        if (task.enabled) {
          available.push(task)
        }
      }

      return available
    }
  },

  mutations: {
    disable (state, taskId) {
      state.find(task => task.id === taskId).enabled = false
    }
  },

  actions: {
    activate ({ commit, dispatch, state }, taskId) {
      var task = state.find(task => task.id === taskId)

      if (task.enabled) {
        task.effects.forEach(effect => {
          var fired = Math.random() < effect.chance

          if (fired) {
            switch (effect.type) {
              case 'ADD_MOD':
                commit('modifiers/activate', effect.targetId, { root: true })
                break
              case 'REMOVE_MOD':
                commit('modifiers/deactivate', effect.targetId, { root: true })
                break
              case 'REVEAL_MOD':
                dispatch('modifiers/revealRandom', null, { root: true })
                break
            }
          }
        })

        commit('disable', task.id)
      }
    },

    activateIfAffordable ({ dispatch, state }, { taskId, will, money }) {
      var task = state.find(task => task.id === taskId)

      if (will >= task.will_cost && money >= task.money_cost) {
        dispatch('activate', task.id)

        return {
          will: task.will_cost,
          money: task.money_cost
        }
      }

      return null
    }
  }
}
