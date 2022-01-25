<template>
  <div id="app">
    <tool-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "../src/components/common/ToolBar.vue";
export default {
  name: "App",
  components: { ToolBar },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
