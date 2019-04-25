<template>
  <div id="app">
    <div class="resources">
      will: {{ will }}/{{ maxWill }} | money: {{ money }}
    </div>
    <div class="panel-group">
      <Stats class="panel" />
      <Modifiers class="panel" />
      <Choices class="panel" />
    </div>
    <EndDayButton />
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  import Stats from './components/Stats.vue'
  import Modifiers from './components/Modifiers.vue'
  import Choices from './components/Choices.vue'
  import EndDayButton from './components/EndDayButton.vue'

  export default {
    name: 'app',
    components: {
      Stats,
      Modifiers,
      Choices,
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

  .panel-group {
    display: flex;
  }

  .panel {
    flex-grow: 1;
  }
</style>
