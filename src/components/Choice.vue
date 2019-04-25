<template functional>
  <li class="choice">
    <ul class="costs">
      <li v-if="props.choice.will_cost" title="will" class="cost cost-will">
        {{ props.choice.will_cost }}
      </li>

      <li v-if="props.choice.money_cost" title="money" class="cost cost-money">
        {{ props.choice.money_cost }}
      </li>
    </ul>

    <div class="choice-name">{{ props.choice.display_name }}</div>

    <div class="choice-info-card"></div>
  </li>
</template>

<style scoped>
  .choice {
    display: flex;
  }

  .costs {
    width: 25px;
  }

  .choice-name {
    flex-grow: 1;
  }
</style>
