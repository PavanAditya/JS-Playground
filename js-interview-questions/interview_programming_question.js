function x() {

    function y() {
        console.log(a);
    }

    y();

    var a = "I am outside function y()";

}
x(); // output - undefined


// ! the value of a is declared after the function and also after the func invocation, so the value of a is not assigned. Hence the o/p gives old value of a (undefined).


function x() {

    function y() {
        console.log(a);
    }
    var a = "I am outside function y()";
    y();

}
x(); // output - I am outside function y()

// ! though the value of a is declared after the function, by the time of func invocation the value of a is already assigned. Hence the o/p gives latest value of a.


showState(); // output: Ready

function showState() {
    console.log("Ready");
}

var showState = function () {
    console.log("Idle");
};

showState(); // output: Idle

// ! Variable hoisting is done only for declared variable, value is not hoisted. Function hoisting is done along with the function's value.


function outerFun() {
    var a = 400;

    function innerFun() {
        a = 200;
    }
    console.log(a); //output - 

    innerFun();

    console.log(a); //output -
}
outerFun();

// ! Until and unless a function is invoked, the code inside the func will get not executed.


// !---------------------------------------------------------------------------------------

const SPECIES = "human";
SPECIES = "wolf";

console.log(SPECIES); // output - 



const CAR = {
    color: "blue",
    price: 15000
}

CAR.price = 20000;

console.log(CAR); // output- 



const array = [1, 2, 3, 4, 5];

array[1] = 10;

console.log(array); // output- 


// !---------------------------------------------------------------------------------------


function showName(firstName, lastName) {

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    var nameIntro = "My name is ";

    return makeFullName();


}
console.log(showName("Sachin", "Tendulkar")); //output- 



function showName(firstName, lastName) {

    return makeFullName();

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    var nameIntro = "My name is ";


}
console.log(showName("Sachin", "Tendulkar")); // output

// !---------------------------------------------------------------------------------------



var middle = [3, 4];
var arr = [1, 2, middle, 5, 6];
console.log(arr); // output

var middle = [3, 4];
var arr = [1, 2, ...middle, 5, 6];
console.log(arr); // output


var name = "dhoni";
var obj = {
    name: 'sahin',
}

var newObj = {
    name: name,
    ...obj,
}

console.log(newObj) // ouput - 


var name = "dhoni";
var obj = {
    name: 'sahin',
}

var newObj = {
    ...obj,
    name: name
}

console.log(newObj) // output

// !---------------------------------------------------------------------------------------
