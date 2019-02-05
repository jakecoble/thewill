export default {
  namespaced: true,

  state: {
    money: {
      display_name: 'money',
      value: 1000,
      decay: 20,
    },

    hygiene: {
      display_name: 'hygiene',
      value: 100,
      decay: 10,
    },

    organization: {
      display_name: 'organization',
      value: 100,
      decay: 10,
    }
  },

  mutations: {
    decay (state) {
      for (var stat in state) {
        state[stat].value -= state[stat].decay
        state[stat].value = Math.max(state[stat].value, 0)
      }
    }
  }
}
