<template>
  <div>
    <span>Count {{ showCount }}</span>
    <button @click="plus">plus</button>
  </div>
</template>

<script>
import { Calculator } from '@/utils/Calculator';
import { ref } from '@vue/composition-api';
export default {
  setup() {
    let calculator = Calculator();

    let showCount = ref(0);

    let plus = () => {
      calculator.plusCount();
      showCount.value = calculator.getCount();
    };

    return {
      showCount,
      plus,
    };
  },
};
</script>

<style></style>
