export default {
  namespaced: true,

  state: {
    hygiene: {
      display_name: 'hygiene',
      baseValue: 100
    },

    health: {
      display_name: 'health',
      baseValue: 100
    },

    org: {
      display_name: 'organization',
      baseValue: 100
    }
  },

  getters: {
    allStats (state, getters, rootState, rootGetters) {
      var stats = {}

      Object.keys(state)
        .forEach(key => {
          var modBonus = rootGetters['modifiers/reducedModBonuses'](key)

          stats[key] = {
            ...state[key],
            value: state[key].baseValue + modBonus
          }
        })

      return stats
    }
  },

  mutations: {
  },

  actions: {
  }
}
