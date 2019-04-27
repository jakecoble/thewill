export default {
  namespaced: true,

  state: {
    hygiene: {
      display_name: 'hygiene',
      baseValue: 100,
      diseaseMult: 0.2
    },

    health: {
      display_name: 'health',
      baseValue: 100,
      diseaseMult: 0.5
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
    },

    diseaseChance (state, getters) {
      var stats = getters.allStats

      return Object.keys(stats)
        .reduce((chance, key) => {
          var statChance = Math.floor((stats[key].baseValue - stats[key].value) * stats[key].diseaseMult || 0)
          return chance + statChance
        }, 0)
    }
  },

  mutations: {
  },

  actions: {
  }
}
