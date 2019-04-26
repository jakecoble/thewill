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
    availableTasks (state) {
      var available = []

      for (let task in state) {
        if (state[task].available) {
          available.push(state[task])
        }
      }

      return available
    }
  }
}
