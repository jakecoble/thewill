export default {
  namespaced: true,

  state: {
    money: {
      display_name: 'money',
      value: 1000,
      decay: 20
    },

    hygiene: {
      display_name: 'hygiene',
      value: 100,
      decay: 10
    },

    org: {
      display_name: 'organization',
      value: 100,
      decay: 10
    }
  },

  getters: {
    stat (state, stat) {
      return state[stat]
    },

    affordable (state, payload) {
      let p = {
        money: payload.money || 0,
        hygiene: payload.hygiene || 0,
        org: payload.org || 0
      }

      return state.money - p.money >= 0 &&
        state.hygiene - p.hygiene >= 0 &&
        state.org - p.org >= 0
    }
  },

  mutations: {
    spend (state, payload) {
      state.money -= payload.money
      state.hygiene -= payload.hygiene
      state.org -= payload.org
    },

    decay (state) {
      const d = (stat) => {
        state[stat].value -= state[stat].decay
        state[stat].value = Math.max(state[stat].value, 0)
      }

      d('money')
      d('hygiene')
      d('org')
    }
  },

  actions: {
    spend ({ commit, getters, state }, payload) {
      if (getters.affordable(payload)) {
        commit('spend', payload)
        return true
      }

      return false
    }
  }
}
