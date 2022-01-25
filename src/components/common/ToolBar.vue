<template>
  <div class="toolbar">
    <router-link to="/store">StoreDataPattern</router-link> |
    <router-link to="/components">ComponentsPattern</router-link> |
    <router-link to="/slot">SlotPattern</router-link> |
    <router-link to="/control">ControlComponent</router-link>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.toolbar {
  color: white;
  font-size: 20px;
  background: #668d66;
  display: flex;
  padding: 8px;
}
</style>
