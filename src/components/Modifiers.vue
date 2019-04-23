<template>
  <ul class="modifiers">
    <li v-for="mod in activeMods" v-bind:key="mod.display_name">
      {{ mod.display_name }} | will {{ mod.will }}
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
