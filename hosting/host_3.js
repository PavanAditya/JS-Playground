var showState = function () {
    console.log("Idle");
};

function showState() {
    console.log("Ready");
}

showState(); // ? output: Idle

// ! Explanation in host_2.js

// ! Func showState is hoisted to the top of the file even before executing line 1. Hence show state value will be over written by the variable showState.