<template>
  <div id="app">
    <tool-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import eventBus from "./utils/eventBus";
import { onUnmounted } from "@vue/composition-api";
export default {
  name: "App",
  components: { ToolBar },
  setup() {
    eventBus.$on("start:progress", (enable) => {
      console.log("on enable", enable);
    });

    onUnmounted(() => {
      eventBus.$off("start:progress", (enable) => {
        console.log("off enable", enable);
      });
    });
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
