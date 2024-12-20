showState(); // ? output: Ready 

function showState() {
    console.log("Ready");
}

var showState = function () {
    console.log("Idle");
};

showState(); // ? output: Idle

// ! Line : 1 already the showState function in line 3 is hoisted to the top and already given its definition in line 3
// ! Line : 11 the showState is declared as a new varibale and defined with a new value of the function
// ! Code internally operates as below:

// ? function showState() {}
// ? var showState;
// ? showState();
// ? showState() {
// ?     console.log("Ready");
// ? }
// ? showState = function () {
// ?     console.log("Idle");
// ? };
// ? showState();
