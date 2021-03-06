var singleNumber = function (nums) {
  let intialCounter = 0;

  // ! O(n^2) -> Quadratic time complexity: every element is meeting everyother element.
  // ! not necessary be nested loops
  for (let i = 0; i < nums.length; i++) {
    /*   console.log(' ++ ', intialCounter, i); */
    if (nums[intialCounter] === nums[i] && i !== intialCounter) {
      /*   console.log('BEFORE', intialCounter, i); */

      intialCounter++;
      // Cannot delete the element -> Bcoz will add time complexity
      // So reseting the i to 0 b'coz above for loop will make it i++;
      i = -1;
      /*  console.log('AFTER', intialCounter, i); */
    }
  }

  return nums[intialCounter];
};

// console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1, 2, 1, 4, 2]));
// console.log(singleNumber([1, 2, 1, 2, 4]));
