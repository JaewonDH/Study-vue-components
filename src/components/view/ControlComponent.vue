<template>
  <div>
    <CheckBox v-model="checkValue" @input="checkChange" />
    <InputBox v-model="inputValue" @inputChangeEvent="inputChange" />
  </div>
</template>

<script>
import CheckBox from '@/components/common/CheckBox';
import InputBox from '@/components/common/InputBox';
import { ref } from '@vue/composition-api';
export default {
  components: {
    CheckBox,
    InputBox,
  },
  setup() {
    let checkValue = ref(false);
    let inputValue = ref('기본 입력 값입니다.');

    let inputChange = (value) => {
      console.log('inputChange', value);
    };

    let checkChange = (value) => {
      console.log('checkChange', value);
    };

    return {
      checkValue,
      inputValue,
      inputChange,
      checkChange,
    };
  },
};
</script>

<style></style>
