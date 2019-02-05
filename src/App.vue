<template>
  <div id="app">
    Spoons: {{ spoons }}
    <Stats/>
    <EndDayButton/>
    <button v-on:click="activate('doctor')">Visit a doctor.</button>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  import Stats from './components/Stats.vue'
  import EndDayButton from './components/EndDayButton.vue'

  export default {
    name: 'app',
    components: {
      Stats,
      EndDayButton
    },
    computed: mapState({
      spoons: store => store.spoons
    }),
    methods: mapActions([
      'activate'
    ])
  }
</script>

<style>
#app {
}
</style>
