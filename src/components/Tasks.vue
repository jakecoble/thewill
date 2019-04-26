<template>
  <ul class="tasks">
    <Task v-for="task in availableTasks" :task="task" :key="task.id" :callback="activateTask" />
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
    },

    methods: {
      activateTask (taskId) {
        this.$store.dispatch('tasks/activate', taskId)
      }
    }
  }
</script>

<style scoped>
</style>
