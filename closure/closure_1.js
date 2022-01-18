// ! Example 1

function showName(firstName, lastName) {

    // var nameIntro = "Hi,"; // ? var dec here can be used inside the child func as it is init before return
    return makeFullName();

    function makeFullName() {
        return nameIntro + " " + firstName + " " + lastName;
    }
    
    var nameIntro = "Hi,"; // ? var dec here cannot be used inside the child func as it is init after return
    
}
console.log(showName("I am", "Pavan"));
// ? OP: (Hi, I am Pavan) if var is init before return 
// ? OP: (undefined I am Pavan) if var is init after return 


// ! Example 2

function x() {
    var a = 1;
    return function y() {
        var b = 2;
        return function z() {
            var c = 3;
            console.log(a, b, c); // ?  1 2 3
        }
    }
};

let z = x;
z()()();
// ? Since x is a function & it returns a function, with a nested return function, it is invoked thrice.
// ?  It is similar to the following:
// ?  let z1 = z();
// ?  let z2 = z1();
// ?  let z3 = z2();
// ? OP: 1 2 3


// ! Example 3

function x() {
    var a = 1;
    function y() {
        var b = 2;
        function z() {
            var c = 3;
            console.log(a, b, c); // ?  1 2 3
        }
        return z;
    }
    a = 100;
    return y;
};

let z = x;
z()()(); // ? 100 2 3
// ? The value of a is 100, because the function returned by x is returned along with it's lexical scope.
// ? The Lexical Scope of a function will always remember the reference (or) the location of a variable but not the value of a variable.
// ? Hence the reference location of a is updated with a new value, function y's lexical scope also gets the value of a as 100.