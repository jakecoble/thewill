export default {
  namespaced: true,

  state: {
    medicine: {
      will: 3,
      duration: 7,
      decay: 7,
      active: false
    },

    tired: {
      will: -2,
      active: false
    },

    hungry: {
      will: -2,
      addChoices: ['eat'],
      active: true
    }
  },

  mutations: {
  },

  actions: {
  }
}
