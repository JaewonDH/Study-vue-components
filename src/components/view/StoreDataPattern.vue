<template>
  <div>
    <div v-for="(user, index) in responseData" :key="index" class="line">
      <router-link :to="`/user/${user.user}`">{{ user.title }}</router-link> |
      <small>{{ user.time_ago }}</small>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, computed } from '@vue/composition-api';
export default {
  setup() {
    const store = getCurrentInstance().proxy.$store;
    store.dispatch('actionNewsList');
    let responseData = computed(() => {
      return store.getters.getNewsList;
    });

    return {
      responseData,
    };
  },
};
</script>

<style>
.line {
  padding: 2px;
}
</style>
