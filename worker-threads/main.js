const {isMainThread, Worker, parentPort} = require('worker_threads');

if (isMainThread) { // ? (In the parent instance) Since the current worker is the main thread of the worker, Execution of the else part happens.
    const newWorker = new Worker(__filename); // ? Creating a new worker for the computation process we need. Using the same file for child worker also.
    newWorker.on('message', msg => console.log(msg)); // ? Waiting for a message coming from a child worker thread.
} else { // ? (In the child instance) Since the current thread isn't a main thread, excution of else part happens
    parentPort.postMessage('Hello Parent!'); // ? Sending a message to the parent. (Parent instance/thread can't have the access to the parentPort property)
}