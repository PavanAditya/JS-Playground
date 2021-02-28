var num = 10;
    name = "Pavan",
    obj1 = {
        value: "first value"
    },
    obj2 = {
        value: "second value"
    },
    obj3 = obj2;

change = (num, name, obj1, obj2) => {
    num *= 10;
    name = "Aditya";
    obj1 = obj2;
    obj2.value = "new value";
    console.log(num, 'in');
    console.log(name, 'in');
    console.log(obj1, 'in');
    console.log(obj2, 'in');
}

change(num, name, obj1, obj2);

console.log(num); // ? 10 -- num value change is block scoped to the change function and wont get reflected outside
console.log(name); // ? "Pavan" -- name value change is block scoped to the change function and wont get reflected outside
console.log(obj1.value); // ? "first value"
console.log(obj2.value); // ? "new value"
console.log(obj3.value); // ? "new value"