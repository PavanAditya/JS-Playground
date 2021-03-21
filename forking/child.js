process.on('message', (msg) => {
    console.log('Child:', msg);
});

let counter = 1;
setInterval(() => {
    process.send(`count: ${counter++}`);
    if (counter === 5) {
        process.exit(1);
    }
}, 1000);