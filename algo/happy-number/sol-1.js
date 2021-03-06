var isHappy = function (n) {
  // do while bcoz- first any length number (single or not) should be applied with logic
  do {
    // converte push digit of number to array
    let arr = spiltToDigits(n); // ! Quadratic T.C O(n^2)
    // square each element in the array
    arr = arr.map((element) => squareDigit(element));
    // sum all the values of an array
    n = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  } while (!isSingleDigit(n.toString())); // !O(n)

  // Happy number in single digits are 1 and 7
  return n === 1 || n === 7 ? true : false;
};

// sum -> String
function isSingleDigit(sum) {
  return sum.length === 1 ? true : false;
}

// using spread operator converte nums to num array, where each element is digit
function spiltToDigits(num) {
  let arr = [...num.toString()]; // !O(n)
  return arr.map((element) => Number.parseInt(element));
}

function squareDigit(digit) {
  return Math.pow(digit, 2);
}

// console.log(isHappy(19));
// console.log(isHappy(32));
// console.log(isHappy(5));
// console.log(isHappy(7));
console.log(isHappy(1111111));
