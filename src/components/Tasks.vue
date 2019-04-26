<template>
  <ul class="tasks">
    <Task v-for="task in availableTasks" :task="task" :key="task.id" :callback="activateTask" />
  </ul>
</template>

<script>
  import { mapActions } from 'vuex'

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
      ...mapActions([
        'activateTask'
      ])
    }
  }
</script>

<style scoped>
</style>
