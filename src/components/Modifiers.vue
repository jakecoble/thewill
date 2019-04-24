<template>
  <ul class="modifiers">
    <li v-for="mod in activeMods" v-bind:key="mod.display_name">
      {{ mod.hidden ? '???' : mod.display_name }} | org {{ mod.org }}, hygiene {{ mod.hygiene }}, health {{ mod.health }}, will {{ mod.will }}
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Modifiers',

    computed: mapGetters('modifiers', [
      'activeMods'
    ])
  }
</script>

<style scoped>

</style>
