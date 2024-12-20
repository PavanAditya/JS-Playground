const compareObjects = (obj1, obj2) => {
    console.log(Object.entries(obj1)); // ? Can help in getting the key value pairs of an object in the form of an array.
    let objectsMatching = true;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        objectsMatching = false;
    } else {
        Object.keys(obj1).map(key => {
            if (typeof obj1[key] === typeof obj2[key]) {
                if (typeof obj1[key] === 'object') {
                    if (!compareObjects(obj1[key], obj2[key])) {
                        objectsMatching = false;
                    }
                } else if (obj1[key] !== obj2[key]) {
                    objectsMatching = false;
                }
            } else {
                objectsMatching = false;
            }
        });
    }
    return objectsMatching;
};

console.log(compareObjects({ a: { b: { c: { d: 2 } } } }, { a: { b: { c: { d: '2' } } } }));

// // ? With mentions of not equal value 
// let filterPredicate = () => {
//     //  return callback func
//     const compareObject = (data, filter) => {
//       let isMatchFound = true;
//       if (Object.keys(filter).length === Object.keys(data).length) {
//         Object.keys(filter).map(key => {
//           // if (filter.hasOwnProperty(key) && data.hasOwnProperty(key)) {
//           if (typeof filter[key] === 'object' && typeof data[key] === 'object') {
//             if (!compareObject(filter[key], data[key])) {
//               console.log('object mismatch', filter[key], data[key]);
//               isMatchFound = false;
//               // break;
//             }
//           } else if (typeof filter[key] !== typeof data[key]) {
//             console.log('type mismatch', filter[key], data[key]);
//             isMatchFound = false;
//           } else if (filter[key] !== data[key]) {
//             console.log('value mismatch', filter[key], data[key]);
//             isMatchFound = false;
//           }
//         });
//       } else {
//         console.log('object length not satified', data, filter);
//         isMatchFound = false;
//       }
//       return isMatchFound;
//     };
//     return compareObject;
//   };

//   const fil = filterPredicate();

//   console.log(fil({a:{b:{c:{d:2}}}}, {a:{b:{c:{d:2}}}})));