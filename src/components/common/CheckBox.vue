<template>
  <div>
    <div class="check-box-container">
      <div class="check-box-label">checkBox</div>
      <div>
        <input
          class="checkBox"
          type="checkbox"
          :value="value"
          @click="clickChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
// check값을 외부 컴포넌트에서 받아서 처리
/*
  부모 컴포넌트로 받은 v-model을 통해 받은 value 값을 기준으로 현재 체크박스에 설정
  체크 박스 이벤트 발생 시 emit으로 초기 설정한 값의 반대 값을 설정하여 부모 컴포넌트로 올려주면 v-model과 같은 형태를 만들 수 있음
*/

export default {
  props: ["value"],
  setup(props, context) {
    let clickChange = () => {
      console.log();
      context.emit("input", !props.value);
    };
    return {
      clickChange,
    };
  },
};
</script>

<style>
.check-box-container {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px;
}
.check-box-label {
  display: flex;
  align-items: center;
}
.checkBox {
  width: 50px;
  height: 50px;
}
</style>
