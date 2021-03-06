/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //   let maxSum = findMaxValue(nums);
  let maxSum = Math.max(...nums); // !O(n)
  console.log('Initial Max no : ', maxSum);
  let tracerSum = nums[0];
  let i = 0;

  // !O(n^2)- Quadratic T.C
  for (let trace = i + 1; i < nums.length; trace++) {
    // !O(n)
    console.log('i -> ', i, 't ->', trace);
    tracerSum += nums[trace];

    if (tracerSum > maxSum) {
      console.log('** tracerSum ', tracerSum);
      maxSum = tracerSum;
    }

    if (trace >= nums.length - 1) {
      i++; // !O(n)
      trace = i;
      tracerSum = nums[i];
      console.log('new i value', i, trace, ':: maxSum', maxSum);
    }
  }

  return maxSum;
};

/* function findMaxValue(nums) {
    let maxVal = nums[0];
    nums.forEach(ele => {
      if (ele > maxVal) {
        maxVal = ele;
      }
    });
    return maxVal;
  } */

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-1]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-1, 1, 2, 1]));
// console.log(findMaxValue([-2, 1]));

console.log('--------------');

function maxSubArray2(nums) {
  let max = Math.min(...nums);
  // console.log(max);
  // let max = -9999999999999999;
  let endMax = 0;

  for (let i = 0; i < nums.length; i++) {
    endMax += nums[i];

    if (max < endMax) max = endMax;

    if (endMax < 0) endMax = 0;
  }
  return max;
}

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
