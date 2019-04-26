export default {
  namespaced: true,

  state: [
    {
      id: 'VISIT_DOCTOR',
      display_name: 'Visit the doctor.',
      will_cost: 5,
      money_cost: 50,
      addMods: ['medicine'],
      removeMods: [],
      enabled: true
    },

    {
      id: 'EAT_CANNED_FOOD',
      display_name: 'Eat canned food.',
      will_cost: 1,
      money_cost: 2,
      addMods: [],
      removeMods: ['hungry'],
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
    activate ({ commit, state }, taskId) {
      var task = state.find(task => task.id === taskId)

      if (task.enabled) {
        task.addMods.forEach(mod => commit('modifiers/activate', mod, { root: true }))
        task.removeMods.forEach(mod => commit('modifiers/deactivate', mod, { root: true }))

        commit('disable', task.id)
      }
    },

    activateIfAffordable ({ dispatch, state }, task, { will, money }) {
      if (will >= state[task].will_cost && money >= state[task].money_cost) {
        dispatch('activate', task)
      }
    }
  }
}
