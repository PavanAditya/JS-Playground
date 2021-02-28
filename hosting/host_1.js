console.log(state); // ? output: undefined
var state = "ready"; // ? variable declaration + variable assignment (2steps at onces)
console.log(state); // ? output: ready

// ! Line : 1 already the variable state is declared (hoisted to the top without value)
// ! Code internally operates as below:

// ? var state;
// ? console.log(state);
// ? state = "ready";
// ? console.log(state);