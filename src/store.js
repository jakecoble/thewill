import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spoons: 1,

    stats: {
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
    }
  },
  mutations: {

  },
  actions: {

  }
})
