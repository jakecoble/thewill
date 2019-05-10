<template functional>
  <li class="task">
    <ul class="costs">
      <li v-if="props.task.will_cost" title="will" class="cost cost-will">
        {{ props.task.will_cost }}
      </li>

      <li v-if="props.task.money_cost" title="money" class="cost cost-money">
        {{ props.task.money_cost }}
      </li>
    </ul>

    <div class="task-name" @click="props.callback(props.task.id)">{{ props.task.display_name }}</div>

    <div class="task-info-card"></div>
  </li>
</template>

<style scoped>
  .task {
    display: flex;
    cursor: pointer;
  }

  .costs {
    width: 25px;
  }

  .task-name {
    flex-grow: 1;
  }
</style>
