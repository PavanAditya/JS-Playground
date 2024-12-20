process.on('message', (msg) => console.log('Child:', msg)); // ? Will listen to any msgs coming from the parent process.

let counter = 1;
setInterval(() => {
    process.send(`count: ${counter++}`); // ? Sends/Emits the msg to the parent component. 
    if (counter === 5) {
        process.exit(1); // ? Exits the process and emits the exit event (listened by the parent) to terminate the processing of the child function.
    }
}, 1000);