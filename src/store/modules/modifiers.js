export default {
  namespaced: true,

  state: [
    {
      id: 'MEDICATED',
      display_name: 'Medicated',
      description: 'Sometimes a salve, sometimes an ordeal, always a gamble.',
      will: 3,
      duration: 7,
      decay: 7,
      active: false
    },

    {
      id: 'TIRED',
      display_name: 'Tired',
      description: 'Your body is heavy with the weight of fatigue.',
      will: -2,
      org: -2,
      active: true,
      hidden: true
    },

    {
      id: 'HUNGRY',
      display_name: 'Hungry',
      description: 'Your stomach rumbles in complaint.',
      will: -2,
      addTasks: ['EAT_CANNED_FOOD'],
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

    reducedModBonuses: (state, getters) => (bonusType) => {
      return getters.activeMods.reduce((bonus, mod) => bonus + (mod[bonusType] || 0), 0)
    }
  },

  mutations: {
    activate (state, modId) {
      var mod = state.find(mod => mod.id === modId)
      mod.active = true
    },

    deactivate (state, modId) {
      var mod = state.find(mod => mod.id === modId)
      mod.active = false
    }
  },

  actions: {
  }
}
