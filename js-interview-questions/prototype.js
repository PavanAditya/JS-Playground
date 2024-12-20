console.log(String.prototype.toUpperCase);
String.prototype.toUpperCase = () => { console.log('No Conversion Done to upperCase') }; // ? Overriding an existing method in the Prototype inside String
console.log(String.prototype.toUpperCase);
String.prototype.name = 'Pavan'; // ? Adding a new value to the Prototype inside String
console.log(String.prototype.name);
