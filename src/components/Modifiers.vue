<template>
  <ul class="modifiers">
    <Modifier v-for="mod in activeMods" :mod="mod" :key="mod.display_name" />
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Modifier from './Modifier.vue'

  export default {
    name: 'Modifiers',
    components: {
      Modifier
    },

    computed: mapGetters('modifiers', [
      'activeMods'
    ])
  }
</script>

<style scoped>

</style>
