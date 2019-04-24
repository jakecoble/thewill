<template>
  <button v-on:click="endDay" class=".btn .end-day-btn">End Day</button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: mapActions([
      'endDay'
    ])
  }
</script>

<style>
</style>
