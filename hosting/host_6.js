console.log('______Ex-1_______');
cowSays('moo');

function cowSays(sound) {
    console.log(sound);
}

console.log('______Ex-2_______');

a = 3; // ? Even without declaring the variable "a" value is initialized directly and can also be stored/printed in it in the next clg()
console.log(a);
var a; // ? A redeclaration with "var" is done here and makes no diff to the value stored inside "a". In the next step it remains the same as the declaration part is already done
// let a; // ? If a redeclaration is done with "let" or "const" then is throws an error as it is already declared and hoisted to the top and changing its scope from this point isn't possible
console.log(a);

console.log('______Ex-2_______');
console.log(b); // ? at this point on the variable "b" is declared but not initialized. So the clg will show "undefined"
var b = 3;

// ! NOTE: JavaScript only hoists declarations. Initializations are not hoisted.

// ? function cowSays(sound) {}
// ? var a;
// ? var b;
// ? console.log('______Ex-1_______');
// ? cowSays('moo');
// ? cowSays(sound) {
// ?     console.log(sound);
// ? }

// ? console.log('______Ex-2_______');
// ? a = 3;
// ? console.log(a);
// ? a;
// ? let a; //> Error
// ? console.log(a);

// ? console.log('______Ex-2_______');
// ? console.log(b);
// ? b = 3;