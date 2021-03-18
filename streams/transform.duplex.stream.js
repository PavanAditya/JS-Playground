const { Transform } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('streams/sample.txt');
const writeStream = createWriteStream('streams/transformed-sample.txt');

// ? Creating a own Transform stream which can be added to the read-write stream line.
class TransformLowerCaseChar extends Transform {
    constructor(char) {
        super();
        this.replaceChar = char;
    }

    // ? Overriding the tranform function of the tranform Class with the functionality we need.
    _transform(chunk, encoding, callback) {
        const replacedChunk = chunk.toString().replace(/[a-z]/g, this.replaceChar); // ? Converting and storing the copy of chunk after replacing all the lowercase characters in it with given char.
        this.push(replacedChunk); // ? pushing the replaced chunk ready for the next write stream.
        callback(); // ? Executing the callback with the updated chunk.
    }
}

const replaceCharTransformStream = new TransformLowerCaseChar('-');

// ? adding TransformLowerCaseChar pipe to the read-write stream line. 
// ? It transforms all the lowercase characters into '-' character in the source .txt file and sends the transformed .txt file to the write stream.
readStream.pipe(replaceCharTransformStream).pipe(writeStream);