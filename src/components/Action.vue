<template functional>
  <li class="action">
    <ul class="costs">
      <li v-if="props.action.will_cost" title="will" class="cost cost-will">
        {{ props.action.will_cost }}
      </li>

      <li v-if="props.action.money_cost" title="money" class="cost cost-money">
        {{ props.action.money_cost }}
      </li>
    </ul>

    <div class="action-name">{{ props.action.display_name }}</div>

    <div class="action-info-card"></div>
  </li>
</template>

<style scoped>
  .action {
    display: flex;
  }

  .costs {
    width: 25px;
  }

  .action-name {
    flex-grow: 1;
  }
</style>
