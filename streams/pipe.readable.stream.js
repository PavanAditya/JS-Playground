const fs = require('fs');

// ? Clone existing file into another using stream methods.
const readStream = fs.createReadStream('streams/sample.txt');
const writeStream = fs.createWriteStream('streams/sample-clone.txt');

// ! Piping the read stream over writestream sends the file data into the new cloned file as chunks.
readStream.pipe(writeStream).on('error', err => console.error('Error Encountered:', err));

// * ###########################

// ? Send process input data and add it to a txt file using writestream method.
const writeStream = fs.createWriteStream('streams/sample-input.txt');

// ! Directly piping the entered input. Will continously wait listening for data until the stop command (Ctrl + C) is executed.
process.stdin.pipe(writeStream);

// ? Instead of typing the required input that is to be sent into the new file, you can send the process input directly through the command line using echo.
// ! Command: echo 'Hello World. This is the echo implementation of write stream' | node streams/pipe.js