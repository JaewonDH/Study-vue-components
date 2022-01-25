<template>
  <div>
    <div v-html="userInfo.about"></div>
    <div>created: {{ userInfo.created }}</div>
    <div>time :{{ userInfo.created_time }}</div>
    <div>karma: {{ userInfo.karma }}</div>
    <div>id: {{ userInfo.id }}</div>
  </div>
</template>

<script>
import { computed, getCurrentInstance, ref } from "@vue/composition-api";
export default {
  setup() {
    const store = getCurrentInstance().proxy.$store;
    const route = getCurrentInstance().proxy.$route;
    store.commit("setUserInfo", "");
    store.dispatch("actionUserInfo", route.params.id);

    let userInfo = computed(() => {
      return store.getters.getUserInfo;
    });

    let time = ref("");

    return {
      userInfo,
      time,
    };
  },
};
</script>

<style></style>
