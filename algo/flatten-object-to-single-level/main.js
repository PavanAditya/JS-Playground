let flatObject = {};

let flattenObject = (object, flatParent = undefined) => {
    if (typeof object !== 'object') {
        if (flatParent)
            flatObject[flatParent] = object;
        else
            flatObject = object;
        return;
    } else {
        if (!object) {
            if (flatParent)
                flatObject[flatParent] = object;
            else
                flatObject = object;
            return;
        }
        if (Array.isArray(object)) {
            if (flatParent)
                flatObject[flatParent] = object;
            else
                flatObject = object;
            return;
        }
        Object.keys(object).map(key => {
            flattenObject(object[key], flatParent ? `${flatParent}_${key}` : key);
        });
    }
}

// let abc = {one: 'one',  two: {three: 'three', four: {five: 'five', six: 'six', seven: {eight: 'eight', nine: 'nine'}}}};
// let abc = 'abc';
let abc = obj = {name: 'pavan', details: {phone: 123, skills: {frontend: ['angular', 'react'], backend: ['node', 'mongo']}}};
// let abc = null;
// let abc = [null];
// let abc = ['1', 2, '3', 'BC', 2];

flattenObject(abc);
console.log(flatObject); // ? Printing the output