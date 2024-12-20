myFunction(); // ? When called here the car name is assigned as "Volvo"

function myFunction() {
    carName = "Volvo";
}

var carName = "Maruthi";  // ? Here the car name is reassigned as "Maruthi"

// myFunction(); // ? If called here the car name chages to "Volvo"

console.log(carName); // ? output: Maruthi


// ! Code internally operates as below:

// ? function myFunction() {}
// ? var carName;
// ? myFunction();
// ? myFunction {
// ?    carName = "Volvo";
// ? }
// ? carName = "Maruthi";
// ? console.log(carName);