<template>
  <ul class="stats">
    <!-- FIXME: We need to sanitize the display name before using it as a key. -->
    <Stat v-for="stat in stats" :key="stat.display_name">
      {{ stat.display_name }}: {{ stat.value }}
    </Stat>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import Stat from './Stat.vue'

  export default {
    computed: mapState({
      stats: store => store.stats
    }),

    components: {
      Stat
    }
  }
</script>

<style scoped>
  .stats {
  }
</style>
