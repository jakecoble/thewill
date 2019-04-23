export default {
  namespaced: true,

  state: {
    medicine: {
      display_name: 'Medicated',
      will: 3,
      duration: 7,
      decay: 7,
      active: false
    },

    tired: {
      display_name: 'Tired',
      will: -2,
      active: false
    },

    hungry: {
      display_name: 'Hungry',
      will: -2,
      addChoices: ['eat'],
      active: true
    }
  },

  getters: {
    activeMods (state) {
      var active = []

      for (let mod in state) {
        if (state[mod].active) {
          active.push(state[mod])
        }
      }

      return active
    }
  },

  mutations: {
  },

  actions: {
  }
}
