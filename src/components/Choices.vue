<template>
  <ul class="choices">
    <Choice v-for="choice in availableChoices" :choice="choice" :key="choice.display_name" />
  </ul>
</template>

<script>
  import Choice from './Choice.vue'

  export default {
    name: 'Choices',
    components: {
      Choice
    },

    computed: {
      availableChoices () {
        return this.$store.getters['choices/availableChoices']
      }
    }
  }
</script>

<style scoped>
</style>
