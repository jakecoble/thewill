<template>
  <div id="app">
    will: {{ will }}/{{ maxWill }} | money: {{ money }}
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
      will: store => store.will,
      maxWill: store => store.maxWill,
      money: store => store.money
    })
  }
</script>

<style>
#app {
}
</style>
