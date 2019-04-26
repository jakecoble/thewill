<template>
  <ul class="tasks">
    <Task v-for="task in availableTasks" :task="task" :key="task.display_name" />
  </ul>
</template>

<script>
  import Task from './Task.vue'

  export default {
    name: 'Tasks',
    components: {
      Task
    },

    computed: {
      availableTasks () {
        return this.$store.getters['tasks/availableTasks']
      }
    }
  }
</script>

<style scoped>
</style>
