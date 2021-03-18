const { Duplex, PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('streams/MSP-Resume.pdf');
const writeStream = createWriteStream('streams/duplicate-resume.pdf');

const passThroughStream = new PassThrough();

let totalBytes = 0;

// ? passThroughStream is a duplex call listening to the 'data' event. It is emitted by the duplex stream piped in between the read and the write streams.
passThroughStream.on('data', chunk => {
    totalBytes += chunk.length;
    console.log('Written bytes:', totalBytes); // ? Displays the length of each chunk (Number of bytes being transferred per chunk)
});

// ? Creating a new duplex which adds a throttle effect to our read-write stream line.
class Throttle extends Duplex {
    constructor(timeOut) {
        super();
        this.throttleDelay = timeOut;
    }

    _read() {}
    
    // ? Overriding the existing write value with our own function (Adding a throttle timeout).
    _write(chunk, encoding, callback) {
        this.push(chunk); // ? Pushing the chunk ready for the next write stream operation.
        setTimeout(callback, this.throttleDelay); // ? this timeout holds the read-write stream pipe line for the requested delay time.
    }

    // ? Stop reading and writing data. After the streaming of chunks is completed. Shouldn't leave it open
    _final() {
        this.push(null);
    }
}

// ? Creating a new duplex stream which throttles the passage of chunks for 100ms delay.
const throttleStream = new Throttle(100);

// ? Adding throttleStream effect to the passThrough pipe would give a clear log of data being passed as chunks (Only for decoration)
readStream.pipe(throttleStream).pipe(passThroughStream).pipe(writeStream);