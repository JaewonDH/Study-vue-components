<template>
  <div>
    <app-header :title="title" />
    <AppBody
      :list="listArray"
      :userList="userList"
      @changeArray="onChangeArray"
    />
    <button @click="deleteUserItem">삭제</button>
  </div>
</template>

<script>
import AppBody from '@/components/common/ComponentBody';
import AppHeader from '@/components/common/ComponentHeader';
import { ref } from '@vue/composition-api';
export default {
  components: {
    AppHeader,
    AppBody,
  },
  setup() {
    let title = ref('AppHeader title');
    let listArray = ref([10, 20, 30]);

    let userList = ref(['a', 'b', 'c', 'd']);

    let onChangeArray = (change) => {
      console.log('userList', userList.value);

      if (change) {
        listArray.value = [60, 70, 80, 90, 100];
      } else {
        listArray.value = [10, 20, 30];
      }
    };

    let deleteUserItem = () => {
      userList.value = [];
    };

    return {
      title,
      listArray,
      userList,
      onChangeArray,
      deleteUserItem,
    };
  },
};
</script>

<style></style>
