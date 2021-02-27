1) What is Scope in JS and expalin two types of scopes in JS ?
2) What is lexical scoping ? Explain with code, (give code-snippet to give o/p)
3) What is hosting in JS, explain variable hosting and function hosting with example ?
which will hosted at top variable hosting or function hosting (give code-snippet to give o/p)
4) What is difference b/w function declaration and function expression ? which of them will be hosted 
 completely (give code-snippet to give o/p)
5) Best practice to avoid hosting ?
6) const value can be reassigned ? (give code-snippet to give o/p)
7) What is Closure ? (give code-snippet to give o/p)





ES-6 features?
Callback ?
Prmoises ?
Async-Await ?
Prototypal Inheritance ?
Spread operator and Code snippet ?




directives ?
Different level of service injection ?
Angular -6? Angular elements (Web compoent) ? Ivy render ? 
what is service worker ? Progressive web ?  how will u develope pwa in angular ?
Http Interceptors ?
Redux pattern work flow ? how to achieve redux pattern in angular ?
difference b/w tap() and map() operator ?
Difference b/w Observable and Promise ?
Design pattern - Singleton, Observer-subscriber pattern, Facotry
what is Testbed, use of BeforeEach() function ?
Effects ? diference b/w @Effects and switch case in reducer function
different way of commuincation b/w component ?

 


-----------------------------------------------------------------------------------------------------
1) What is Scope in JS ? Explain lexical scoping ? 

Ans -
In JavaScript their two scopes :
Global Scope
Local Scope

Global Scope is - Any variable declared outside the fuction is called Global scope, this variable can be
accessiable any where in you code.

Local Scope- Each fuction has its own scope, any variable declared inside the fucntion is accessiable
to that function scope and its nested function. This is bcoz local scope in javascript is created by
function (this is also called fucntion scope)

 Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function.

o/p-

 function x() {

    function y() {
        console.log(a);
    }

    y();

    var a = "I am outside function y()"; 

}
x(); // output - undefined



 function x() {

    function y() {
        console.log(a);
    }
    var a = "I am outside function y()";
    y();

}
x(); // output - I am outside function y()



2)What is hosting in JS, explain variable hosting and function hosting with example ?

We already know that any variable declared within a scope belongs to that scope. But what we don’t know yet, is that no matter where variables are declared within a particular scope, all variable declarations are moved to the top of their scope (global or local). This is called hoisting, as the variable declarations are hoisted to the top of the scope. Note that hoisting only moves only the declaration. Any assignments are left in place.

function declaration hosting -
Function declarations are hoisted completely. This means that the entire function’s body is moved to the top. This allows you to call a function before it has been declared:

Functions are hoisted first, and then variables.

o/p - 
showState(); // output: Ready

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



(behind the scene)

function outerFun(){
    function innerFun(){
        a =200;
    }
    var a;
    a=400;
    clg(a);// 400
    innerFun();
    clg(a);//  200
}
outerFun();

3) What is difference b/w const and let ? What is the output - 

const SPECIES = "human";
SPECIES = "wolf";

console.log(SPECIES); // output - Assignment to constant variable.



const CAR = {
    color: "blue",
    price: 15000
}

CAR.price = 20000;

console.log(CAR); // output- {color:"blue", price: 20000}



const array = [1, 2, 3, 4, 5];

array[1] = 10;

console.log(array); // output- [1,10,3,4,5]

Bcoz-const values cannot be reassigned, but they can be mutable.



4) Best practice to avoid hosting ?
->Because of hoisting, it’s considered a best practice to always declare your variables at the top of their respective scopes. This way there are no undesirable effects. 
->You should also always try to initialize variables when you declare them.


5) What is Closure ?
->A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
->The closure has three scope chains: it has access to its own scope (variables defined between its curly   brackets), it has access to the outer function’s variables, and it has access to the global variables.
->The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.

o/p-

function showName(firstName, lastName) {

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    var nameIntro = "My name is ";

    return makeFullName();


}
console.log(showName("Sachin", "Tendulkar")); //output- My name is Scahin Tendulkar





function showName(firstName, lastName) {

    return makeFullName();

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    var nameIntro = "My name is ";


}
console.log(showName("Sachin", "Tendulkar")); // UndefinedScahin Tendulkar


6) ES-6 features?

Template Literals
Arrow Functions
Promises
Classes
Modules
Destructuring Assignment
Enhanced Object Literals
Block-Scoped - Let and Const
Spread operator
 (example of dpread operator)

 var middle = [3, 4];
var arr = [1, 2, middle, 5, 6];
console.log(arr); // [1, 2, [3, 4], 5, 6]

var middle = [3, 4];
var arr = [1, 2, ...middle, 5, 6];
console.log(arr); // [1, 2, 3, 4, 5, 6]




var name = "dhoni";
var obj = {
    name: 'sahin',
}

var newObj = {
    name: name,
    ...obj,
}

console.log(newObj) // ouput - undefinedSachin Tendulkar


var name = "dhoni";
var obj = {
    name: 'sahin',
}

var newObj = {
    ...obj,
    name: name
}

console.log(newObj) // output - { name: 'dhoni' }


8) How to reverse a number ? 

function reverseNumber(s) {
    s = s.toString();
    const val = s.split("").reverse().join("");
    return parseInt(val)
}

9) how to check number is plaindrome ? If number is not plaindorme then generate the number until its a
 palindorme number ?

 function generatePalindrome(num) {
    let reverseNum = reverseNumber(num);
    return reverseNum + num;
}

function isPalindrome(num) {
    return (num == reverseNumber(num));
}


function reverseNumber(s) {
    s = s.toString();
    const val = s.split("").reverse().join("");
    return parseInt(val)
}

function checkAndGeneratePalindrome(num) {
    if (isPalindrome(num)) {
        return num;
    }
    while (!isPalindrome(num)) {
        num = generatePalindrome(num);
    }
    return num
}

10) What is difference between Observable and promises ? why does angular uses Observable over promises ?

A Promise handles a single event when an async operation completes or fails.

An Observable is like a Stream  and allows to pass zero or more events where the callback is called for each event.

Often Observable is preferred over Promise because it provides the features of Promise and more. With Observable it doesn’t matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case.

Observable also has the advantage over Promise to be cancelable. If the result of an HTTP request to a server or some other expensive async operation isn’t needed anymore, the Subscription of an Observable allows to cancel the subscription, while a Promise will eventually call the success or failed callback even when you don’t need the notification



11) what is Testbed, use of BeforeEach() function ?
Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.