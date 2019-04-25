<template functional>
  <li class="modifier">
    <div v-if="!props.mod.hidden" class="name">{{ props.mod.display_name }}</div>
    <div v-else class="name hidden">???</div>

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

    <div v-if="!props.mod.hidden" class="description">{{ props.mod.description }}</div>
    <div v-else class="description hidden">There is yet more that binds you. With knowledge comes power, and with power, victory.</div>
  </li>
</template>

<style scoped>
  .modifier {
    padding: 5px;
  }

  .name {
    display: inline-block;
  }

  .hidden {
  }

  .statBonuses {
    padding: 0 5px 0 5px;
    display: inline-block;
  }

  .statBonus {
    margin: 0 5px 0 5px;
    display: inline-block;
  }

  .statBonusName {
    display: inline-block;
    margin-right: 5px;
  }

  .statBonusName:after {
    content: ":";
  }

  .statBonusValue {
    display: inline-block;
  }

  .description {
    font-style: italic;
  }
</style>
