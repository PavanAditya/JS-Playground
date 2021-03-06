/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], '::', arr[j]);
      if (arr[i] + 1 === arr[j] && arr[i] !== arr[j]) {
        console.log('-------------', arr[i], '__', arr[j]);
        ++counter;
        j = arr.length;
      }
    }
  }

  return counter;
};
// !QUADRATIC Time Complexity

// console.log(countElements([1, 2, 3]));
console.log(countElements([1, 3, 2, 3, 5, 0]));
