<template>
  <ul class="stats">
    <Stat v-for="stat in stats">{{ stat.display_name }}: {{ stat.value }}</Stat>
  </ul>
</template>

<script>
 import { mapState } from 'vuex';
 import Stat from './Stat';

 export default {
   computed: mapState({
     stats: store => store.stats
   })
 }
</script>
