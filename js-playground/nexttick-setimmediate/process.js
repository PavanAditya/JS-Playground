setImmediate(() => {
    console.log('set immediate is executed.'); // ? set in the next iteration of the event loop. (Queued to the last of the event queue)
});

process.nextTick(() => {
    console.log('next tick is executed.'); // ? set on priority for the next iteration for the event loop. (Not Queued, directly gets executed before the methods in the event queue)
});

console.log('regular outer console.'); // ? works regularly so works on the first iteration of the event loop itself.