<template>
  <div id="app">
    Spoons: {{ spoons }}
    <Stats/>
    <EndDayButton/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

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
    })
  }
</script>

<style>
#app {
}
</style>
