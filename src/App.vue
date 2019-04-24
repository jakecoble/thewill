<template>
  <div id="app">
    will: {{ will }}/{{ maxWill }} | money: {{ money }}
    <Stats/>
    <Modifiers/>
    <EndDayButton/>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  import Stats from './components/Stats.vue'
  import Modifiers from './components/Modifiers.vue'
  import EndDayButton from './components/EndDayButton.vue'

  export default {
    name: 'app',
    components: {
      Stats,
      Modifiers,
      EndDayButton
    },
    computed: {
      ...mapGetters([
        'maxWill'
      ]),

      ...mapState({
        will: store => store.will,
        money: store => store.money
      })
    }
  }
</script>

<style>
  body, div, ul, li {
    margin: 0;
    border: 0;
    padding: 0;
    font: inherit;
  }

  ul {
    list-style: none;
  }
</style>
