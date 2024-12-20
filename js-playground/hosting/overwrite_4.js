// ! Create a CAR object with two properties
const CAR = {
    color: "blue",
    price: 15000
}

// ! Modify a property of CAR
CAR.price = 20000;
console.log(CAR); // ? Modifying a property inside a "const" object holds good. Reason: Modification can be done to a const value, reassignment isn't possible

console.log('------Ex-2------');
const array = [1, 2, 3, 4, 5];
array[1] = 10; // ? Modifying a "const" array also holds good in the similar way as we aren't reassigning the entire value for the variable;
array.push(100); // ? Appending to a "const" array also holds good in the similar way as we aren't reassigning the entire value for the variable;

console.log(array);

// ! Note: Reassigning is different from modifying or appending
// ! const supports only modifying with block scoping
// ! let supports both modofying and reassigning with block scoping
// ! var supports everythingw without any scoping. (Only supports closures)