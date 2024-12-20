// !Checking the performance or test how much time the code is taking to execute we can use -

// any label for start time and end time
console.time('label1'); // start time

setTimeout(() => {
    console.timeEnd('label1'); // end time
})

console.time('tej');

setTimeout(() => {
    console.timeEnd('tej');
}, 5000);

