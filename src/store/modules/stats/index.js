export default {
  namespaced: true,

  state: {
    hygiene: {
      display_name: 'hygiene',
      value: 100
    },

    health: {
      display_name: 'health',
      value: 100
    },

    org: {
      display_name: 'organization',
      value: 100
    }
  },

  getters: {
    hygiene (state, getters, rootState, rootGetters) {
      var modBonus = rootGetters['modifiers/reducedModBonuses']('hygiene')
      return {
        ...state.hygiene,
        value: state.hygiene.value + modBonus
      }
    },

    health (state, getters, rootState, rootGetters) {
      var modBonus = rootGetters['modifiers/reducedModBonuses']('health')
      return {
        ...state.health,
        value: state.health.value + modBonus
      }
    },

    org (state, getters, rootState, rootGetters) {
      var modBonus = rootGetters['modifiers/reducedModBonuses']('org')
      return {
        ...state.org,
        value: state.org.value + modBonus
      }
    },

    // TODO: I don't know yet if returning getters like this will mess with reactivity.
    allStats (state, getters) {
      return [
        getters.hygiene,
        getters.health,
        getters.org
      ]
    }
  },

  mutations: {
  },

  actions: {
  }
}
