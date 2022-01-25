<template>
  <div>
    <ul>
      <SlotItem v-for="(item, index) in array" :key="index">
        {{ item }}
      </SlotItem>
    </ul>
    <hr />
    <ul>
      <SlotItem>{{ "문자열 slot" }} <button>버튼도 추가 가능</button></SlotItem>
      <SlotItem>{{ "문자열 slot" }} </SlotItem>
    </ul>
    <SlotBody>
      <template v-slot:header>{{ "header" }} </template>
      <template v-slot:body>{{ "body" }} <button>바디 버튼</button></template>
    </SlotBody>
  </div>
</template>

<script>
import SlotItem from "./common/SlotItem";
import SlotBody from "./common/SlotBody";
import { ref } from "@vue/composition-api";
export default {
  components: {
    SlotItem,
    SlotBody,
  },
  setup() {
    let array = ref([10, 20, 30, 40]);

    return {
      array,
    };
  },
};
</script>

<style></style>
