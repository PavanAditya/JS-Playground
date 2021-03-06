/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let cloneStones = stones;
  // get index of max1 value with index
  // get index of max2 value with index (2nd maximum or equal to first max)
  // smash both max1-max2
  // if => result stone == 0, then don't add any element to array
  // if ==> result stone > 0, then it is add to array @ position (of max1 - index)
  // looping above code, if max2 is null/undefined, reutrn max1

  while (true) {
    let indexMax1 = indexOfMaxValue(cloneStones);

    let indexMax2 = indexOfMaxValue(cloneStones, true, indexMax1);

    if (cloneStones.length === 1 || indexMax2 === undefined) {
      break;
    }

    let smashedValue = cloneStones[indexMax1] - cloneStones[indexMax2];

    if (smashedValue === 0) {
      cloneStones.splice(indexMax1, 1);
      cloneStones.splice(indexMax2, 1);
    } else {
      // replace first max element with smashed result
      cloneStones.splice(indexMax1, 1, smashedValue);
      // remove the second max element
      cloneStones.splice(indexMax2, 1);
    }
  }

  return cloneStones[0] === undefined ? 0 : cloneStones[0];
};

let indexOfMaxValue = function (arr, findSecondMax = false, indexMax1 = null) {
  let indexOfMax;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (!findSecondMax && arr[i] >= max) {
      max = arr[i];
      indexOfMax = i;
    }

    if (findSecondMax && arr[i] >= max && i !== indexMax1) {
      max = arr[i];
      indexOfMax = i;
    }
  }

  return indexOfMax; // !Playing with index bcoz- Array Accessing is O(1)

  // return arr.indexOf(Math.max(...arr)); //! O(n^2)
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([2, 9]));
console.log(lastStoneWeight([2, 2]));
