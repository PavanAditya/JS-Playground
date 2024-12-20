We already know that any variable declared within a scope belongs to that scope. But what we don’t know yet, is that no matter where variables are declared within a particular scope, all variable declarations are moved to the top of their scope (global or local). This is called hoisting, as the variable declarations are hoisted to the top of the scope. Note that hoisting only moves only the declaration. Any assignments are left in place.

---------------------------------------------------------------------------------------------------------------

```
console.log(state);   // output: undefined
var state = "ready";
```

We would have expected a ReferenceError to be thrown because state  variable is not declared yet. But what you don’t know is that the variable is declared behind the scene. as two separate step(variable declaration and variable assignment by JS Engine)

Here is how the code is interpreted by a JavaScript engine:

```
var state;           // moved to the top
console.log(state);   // undefined
state = "ready";     // left in place
```

NOTE: Hoisting also affects function declarations

---------------------------------------------------------------------------------------------------------------

What is the difference between - Function declaration and Function expression

```
function showState() {}          // function declaration

var showState = function() {};   // function expression
var showState = ()  => {}        // function expression (using fat arrow, ES-6)
```



---------------------------------------------------------------------------------------------------------------

function declaration hosting -
Function declarations are hoisted completely. This means that the entire function’s body is moved to the top. This allows you to call a function before it has been declared:

```
showState();            // output: Ready

function showState() {
  console.log("Ready");
} 

var showState = function() {
  console.log("Idle");
};
```

JavaScript engine moves the declaration of showState() function, and all its content, 
to the beginning of the scope. 
behind the scences JS Engine , interpet the above code like this - 

```
function showState() {     // moved to the top (function declaration) (function hosted to the top of the scope)
  console.log("Ready");
} 

var showState;            // moved to the top (variable declaration) (variable hosted to the top of the scope)

showState();  

showState = function() {   // left in place (variable assignment)
  console.log("Idle");
};
```

As you may have noticed, only the function declaration is hoisted, but the function expression is not. When a function is assigned to a variable, the rules are the same as for variable hoisting (only the declaration is moved, while the assignment is left in place).


---------------------------------------------------------------------------------------------------------------

Ex-2 : 

```
var showState = function() {
  console.log("Idle");
};

function showState() {
  console.log("Ready");
} 

showState();            // output: Idle
```


Behind the scene, how Javascript Engine interprets -

```
function showState(){        // moved to the top (function declaration) (function hosting)
  console.log("Ready");
} 

var showState;               // moved to the top (variable declaration) (variable hosting)

showState = function(){      // left in place (variable assignment)
  console.log("Idle");
};

showState();
```

Note: Function is hosted above the scope and then below variable is hosted. 


---------------------------------------------------------------------------------------------------------------
Things to remeber -
->All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.
->Functions are hoisted first, and then variables.
->Function declarations have priority over variable declarations, but not over variable assignments.


---------------------------------------------------------------------------------------------------------------
NOTE: (ex- overwrite_4.js)
Values that cannot change in programming are known as immutable, while values that can be changed are mutable. (overides previous value)

Although const values cannot be reassigned, they are mutable as it is possible to modify the properties of objects declared with const.


---------------------------------------------------------------------------------------------------------------

Ex- 
console.log(b);
var b = 3;

NOTE: JavaScript only hoists declarations. Initializations are not hoisted.
Remeber-
# JAVASCRIPT ONLY HOISTS DECLARATIONS (FUNCTION DECLARATION FIRST, then VARIABLE DECLARATION), INITIALIZATIONS ARE NOT
# HOISTED

so behind the scences-
var b;
console.log(b); //undefined
b=3;

---------------------------------------------------------------------------------------------------------------
Best practice to avoid hosting - 

->Because of hoisting, it’s considered a best practice to always declare your variables at the top of their respective scopes. This way there are no undesirable effects. 
->You should also always try to initialize variables when you declare them.

---------------------------------------------------------------------------------------------------------------

