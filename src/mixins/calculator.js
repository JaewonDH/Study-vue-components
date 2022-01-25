export const calculator = {
  data() {
    return {
      count: 2, // mixin 가져다 쓰는 곳에서 this 참조 가능
    };
  },
  created() {
    console.log('calculator create 호출 됨.');
  },
  methods: {
    plusCount() {
      // mixin 가져다 쓰는 곳에서 this 함수 참조 가능

      console.log('calculator.js plusCount');
      this.count++;
    },
    minusCount() {
      this.count--;
    },
  },
};
