<template>
  <ul class="actions">
    <Action v-for="action in availableActions" :action="action" :key="action.display_name" />
  </ul>
</template>

<script>
  import Action from './Action.vue'

  export default {
    name: 'Actions',
    components: {
      Action
    },

    computed: {
      availableActions () {
        return this.$store.getters['actions/availableActions']
      }
    }
  }
</script>

<style scoped>
</style>
