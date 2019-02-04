export default {
  namespaced: true,

  state: {
    money: {
      display_name: 'money',
      value: 50,
      decay: 10,
      mood_decay: 1
    },

    hygiene: {
      display_name: 'hygiene',
      value: 100,
      decay: 10,
      mood_decay: 1
    },

    mood: {
      display_name: 'mood',
      value: 50,
      decay: 10
    },

    room: {
      display_name: 'room',
      value: 100,
      decay: 10,
      mood_decay: 1
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
