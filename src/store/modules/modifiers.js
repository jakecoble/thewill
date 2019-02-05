export default {
  namespaced: true,

  state: {
    medicine: {
      spoon_multi: 2,
      duration: 7,
      decay: 7,
      active: false
    }
  },

  mutations: {
    activate (state, modifier) {
      state[modifier].active = true
    },

    decay (state) {
      const d = (modifier) => {
        state[modifier].decay -= 1

        if (state[modifier].decay === 0) state[modifier].active = false
      }

      d('medicine')
    }
  },

  actions: {
    decay ({ commit }) {
      commit('decay')
    }
  }
}
