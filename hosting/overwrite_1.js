// ! Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;

console.log(x); // ? output: 2

console.log('----Ex-2----');

// ! Attempt to overwrite a variable declared with let
let y = 1;
// let y = 2; // ? Throws an error as redeclaring and changing the scope of varibale "y" from this point isn't possible

console.log(y); // ? output: 1