<template>
  <div id="app">
    <Stats/>
    <EndDayButton/>
  </div>
</template>

<script>
import Stats from './components/Stats.vue'
import EndDayButton from './components/EndDayButton.vue'

export default {
  name: 'app',
  components: {
    Stats,
    EndDayButton
  }
}
</script>

<style>
#app {
}
</style>
