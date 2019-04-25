<template>
  <ul class="modifiers">
    <Modifier v-for="mod in sortedActiveMods" :mod="mod" :key="mod.display_name" />
  </ul>
</template>

<script>
  import Modifier from './Modifier.vue'

  export default {
    name: 'Modifiers',
    components: {
      Modifier
    },

    computed: {
      sortedActiveMods () {
        return this.$store.getters['modifiers/activeMods'].slice().sort((a, b) => {
          if ((!a.hidden && b.hidden) || a.display_name < b.display_name) {
            return -1
          } else if ((a.hidden && !b.hidden) || a.display_name > b.display_name) {
            return 1
          } else {
            return 0
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
