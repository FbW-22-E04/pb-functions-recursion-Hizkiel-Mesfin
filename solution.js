//#1
const array = [1, 2, 3, 4, 5, 6];

const sum = (arr) => {
  if (arr.length === 1) return arr[0];

  return arr.pop() + sum(arr);
};

console.log(sum(array));
