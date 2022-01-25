<template>
  <div class="input-box-container">
    <div class="input-box-label">inputBox</div>
    <div>
      <input class="inputBox" type="text" :value="inputData" @input="onInput" />
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'inputData',
  },
  props: {
    value: String,
    inputData: String,
  },
  setup(props, context) {
    function onInput(event) {
      context.emit('inputChangeEvent', event.target.value);
    }

    return {
      onInput,
    };
  },
};
</script>

<style>
.input-box-container {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px;
}
.input-box-label {
  display: flex;
  align-items: center;
}
.inputBox {
  font-size: 20px;
  width: 300px;
  height: 50px;
}
</style>
