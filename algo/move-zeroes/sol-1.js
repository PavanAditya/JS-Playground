/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let previousSize = nums.length;

  // in-place alternative to Array.prototype.filter(), bcoz filter gives new array
  //  so using spread to spread elements and splice to glue elements
  nums.splice(0, nums.length, ...nums.filter((ele) => ele !== 0)); // !O(n)

  // [1, 3, 12, 0, 0]

  let sub = previousSize - nums.length;
  while (sub !== 0) {
    // !O(n)
    nums.push(0); // !O(1)
    sub--;
  }
  console.log(nums);
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 0, 0, 2, 0]));
moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([0]);
