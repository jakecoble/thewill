<template functional>
  <li class="modifier">
    <div v-if="!props.mod.hidden" class="name hidden">???</div>
    <div v-else class="name">{{ props.mod.display_name }}</div>
    <ul class="statBonuses">
      <li v-if="props.mod.will" class="statBonus">
        <div class="statBonusName">will</div>
        <div class="statBonusValue">{{ props.mod.will }}</div>
      </li>

      <li v-if="props.mod.org" class="statBonus">
        <div class="statBonusName">org</div>
        <div class="statBonusValue">{{ props.mod.org }}</div>
      </li>

      <li v-if="props.mod.health" class="statBonus">
        <div class="statBonusName">health</div>
        <div class="statBonusValue">{{ props.mod.health }}</div>
      </li>

      <li v-if="props.mod.hygiene" class="statBonus">
        <div class="statBonusName">hygiene</div>
        <div class="statBonusValue">{{ props.mod.hygiene }}</div>
      </li>
    </ul>
  </li>
</template>

<style scoped>
</style>
