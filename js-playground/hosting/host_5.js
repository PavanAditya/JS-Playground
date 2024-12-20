function hoist() {
    if (true) {
        var x = 200;
        let x1 = 200;
    }
    console.log(x);
    // console.log(x1); // ? Gives an error as the x1 variable is declared inside the if condtion and is block-scoped only to that if condition
}
hoist();

console.log('--------Ex-2-----------');

function hoist2() {
    var y = 400;
    let y1 = 400;
    if (true) {
        y = 200;
        console.log(y1, 'inside if'); // ? Wont Give any error as the y1 variable is declared outside the if condtion and is block-scoped to that entire func
    }
    console.log(y);
    console.log(y1, 'outside if'); // ? Wont Give any error as the y1 variable is declared outside the if condtion and is block-scoped to that entire func
}
hoist2();

console.log('-----------Ex-3--------');

function hoist3() {
    var z = 400;
    function hoist4() {
        z = 200;
    }
    console.log(z);
    hoist4();
    console.log(z);
}
hoist3();

// ! all the functions are hoisted to the top of the code and the variables inside the funcitons are hoisted to the top of the function.
// ! Variables inside the function aren't hoisted and can't be accessed outside the func as they are inside a closure. Their scope is restricted.
// ! Code internally operates as below:

// ? function hoist() { }
// ? function hoist2() { }
// ? function hoist3() { }

// ? hoist() {
// ?     var x;
// ?     if (true) {
// ?         let x1;
// ?         x = 200;
// ?         x1 = 200;
// ?     }
// ?     console.log(x);
// ?     console.log(x1); //> Error
// ? }
// ? hoist();

// ? console.log('--------Ex-2-----------');
// ? hoist2() {
// ?     var y;
// ?     let y1;
// ?     console.log(x);
// ?     y = 400;
// ?     y1 = 400;
// ?     if (true) {
// ?         y = 200;
// ?         console.log(y1);
// ?     }
// ?     console.log(y);
// ?     console.log(y1);
// ? }
// ? hoist2();

// ? console.log('-----------Ex-3--------');
// ? hoist3() {
// ?     var z;
// ?     z = 400;
// ?     function hoist4() {
// ?         z = 200;
// ?     }
// ?     console.log(z);
// ?     hoist4();
// ?     console.log(z);
// ? }
// ? hoist3();