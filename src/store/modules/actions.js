export default {
  namespaced: true,

  state: {
    doctor: {
      display_name: 'Visit the doctor.',
      will_cost: 5,
      money_cost: 50,
      addMods: ['medicine'],
      available: true
    },

    eat: {
      display_name: 'Eat canned food.',
      will_cost: 1,
      money_cost: 2,
      addMods: [],
      removeMods: ['hungry'],
      available: true
    }
  },

  getters: {
    availableActions (state) {
      var available = []

      for (let action in state) {
        if (state[action].available) {
          available.push(state[action])
        }
      }

      return available
    }
  }
}
