export function Calculator() {
  let count = 0;
  function plusCount() {
    count = count + 1;
  }

  let minusCount = () => {
    count--;
  };

  let getCount = () => {
    return count;
  };

  return {
    getCount,
    plusCount,
    minusCount,
  };
}
