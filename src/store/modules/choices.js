export default {
  namespaced: true,

  state: {
    doctor: {
      display_name: 'Visit the doctor.',
      will_cost: 5,
      money_cost: 50,
      addMods: ['medicine']
    },

    eat: {
      display_name: 'Eat canned food.',
      will_cost: 1,
      money_cost: 2,
      addMods: [],
      removeMods: ['hungry']
    }
  }
}
