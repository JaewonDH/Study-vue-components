<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="(item, index) in userList" :key="index">{{ item }}</li>
    </ul>
    <button @click="onClickA">change</button>
    <button @click="onClickB">change</button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    userList: Array,
  },
  setup(props, context) {
    let onClickA = (event) => {
      context.emit("changeArray", true, event);
    };

    let onClickB = (event) => {
      context.emit("changeArray", false, event);
      props.userList.push("aaa");
    };

    return {
      onClickA,
      onClickB,
    };
  },
};
</script>

<style></style>
