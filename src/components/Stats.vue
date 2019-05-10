<template>
  <ul class="stats">
    <!-- FIXME: We need to sanitize the display name before using it as a key. -->
    <Stat v-for="stat in allStats" :key="stat.display_name">
      {{ stat.display_name }}: {{ stat.value }}
    </Stat>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Stat from './Stat.vue'

  export default {
    computed: {
      ...mapGetters('stats', [
        'allStats'
      ])
    },

    components: {
      Stat
    }
  }
</script>

<style scoped>
  .stats {
  }
</style>
