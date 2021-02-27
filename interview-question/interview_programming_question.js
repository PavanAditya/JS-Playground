function x() {

    function y() {
        console.log(a);
    }

    y();

    var a = "I am outside function y()";

}
x(); // output -



function x() {

    function y() {
        console.log(a);
    }
    var a = "I am outside function y()";
    y();

}
x(); // output -




// !---------------------------------------------------------------------------------------

showState(); // output: 

function showState() {
    console.log("Ready");
}

var showState = function () {
    console.log("Idle");
};



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
