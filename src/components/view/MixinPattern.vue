<template>
  <div>
    <span>Count {{ count }}</span> <button @click="plusCount()">plus</button>
  </div>
</template>

<script>
import { calculator } from '@/mixins/calculator.js';
// mixin 패턴은 Vue3 Composition api에서는 사용하지 않도록 하며 option api에서 사용 해야함.
export default {
  mixins: [calculator],
  created() {
    console.log('MixinPattern.vue create 호출 됨.', this.count);
  },
};
</script>

<style></style>
