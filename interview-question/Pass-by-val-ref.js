// ! In JS all the objects passed to a function are passed by reference and types are passed by value.
// ! Objects assignement is also done by reference and not by value.
// ? That means any updates happening on the duplicated/original object's variable will be reflected in the original/duplicated object's variable.
// ? This is called pass by reference.

var num = 10;
name = "Pavan";
obj1 = {
    value: "first value"
};
obj2 = {
    value: "second value"
};
obj3 = obj2;

change = (num, name, obj1, obj2) => {
    num *= 10;
    name = "Aditya";
    obj1 = obj2;
    obj2.value = "new value";
    console.log(num, 'in'); // ? 100 in, because num is passed by value and is updated inside the function.
    console.log(name, 'in'); // ? Aditya in, because name is passed by reference and is updated inside the function.
    console.log(obj1, 'in'); // ? { value: 'new value' } in, since obj1 is a reference to obj2, obj2 is updated inside the function.
    console.log(obj2, 'in'); // ? { value: 'new value' } in, because obj2 is passed by reference and is updated inside the function.
}

change(num, name, obj1, obj2); // ? num, name are pass by values and obj1, obj2 are pass by references.

console.log(num); // ? 10 -- num value change is block scoped to the change function and wont get reflected outside
console.log(name); // ? "Pavan" -- name value change is block scoped to the change function and wont get reflected outside
console.log(obj1.value); // ? "first value" -- obj1 value change is block scoped to the change function and wont get reflected outside
console.log(obj2.value); // ? "new value" -- obj2.value is assigned with a new value inside the function, but since it is a reference of obj2 which is passed to the change function, it will reflect the change in the original obj2.value
console.log(obj3.value); // ? "new value" -- Since obj2 is a reference of obj3, obj3.value is also changed.