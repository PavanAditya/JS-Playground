let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};
class Person {
    constructor(name) {
        this.name = name;
    }
}
// ? copying the methods of sayHiMixin to Person Object's Prototype
Object.assign(Person.prototype, sayHiMixin);
new Person("Pavan").sayHi();

// ! There is no inheritence involved here. We're just copying properties from one object to another. The person class can also inherit from another class while using this mixin.