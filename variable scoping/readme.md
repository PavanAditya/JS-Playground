Vanilla JavaScript :

1) What is variable scope in javascript ?
In JavaScript their two scopes :
Global Scope
Local Scope

Global Scope is - Any variable declared outside the fuction is called Global scope, this variable can be
accessiable any where in you code.

Local Scope- Each fuction has its own scope, any variable declared inside the fucntion is accessiable
to that function scope and its nested function. This is bcoz local scope in javascript is created by
function (this is also called fucntion scope)

---------------------------------------------------------------------------------------------------------------

JS doesnot support block level scope, declaring the variable inside the of a block structure like - for loop
or if statement. If variable is declared inside the block scope of a for loop then this variable can be 
accessiable by entier function scope (i.e- function in which this for loop has been written)
but using ES6 fetaure - Let and const key word we can overcome this and declare block level scope for
a variable

---------------------------------------------------------------------------------------------------------------

Check Ex- variable scope/scope_4.js ->
This time the local variable test overwrites the global variable with the same name.
 When we run the code inside testScope() function the global variable is reassigned.
 If a local variable is assigned without first being declared with the var keyword,
 it becomes a global variable.
 To avoid such unwanted behavior you should always declare your local variables before you use them.
 Any variable declared with the var keyword inside of a function is a local variable.
 It’s considered best practice to declare your variables.


 ---------------------------------------------------------------------------------------------------------------
 Shadowing of variable - 

In JavaScript, variables with the same name can be specified at multiple layers of nested scope. In such case local variables gain priority over global variables. If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing. Simply put, the inner variable shadows the outer.

---------------------------------------------------------------------------------------------------------------

Lexical Scoping -

Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function.
