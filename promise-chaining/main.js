const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.addEventListener('readystatechange', () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.responseText);
                resolve(data);
            } else if (req.readyState === 4) {
                reject('Source not found');
            }
        });
        req.open('GET', resource);
        req.send();
    });
};

// ? Promise created to return resolve or reject basing on the execution done in the function.
// ? Any error in the middle will stop the execution part. Since one promise is rejected the chain will break there.
(function () {
    getTodos('todos/code.json')
        .then(re => {
            console.log('Parent', re);
            getTodos('todos/code.json')
                .then(res => {
                    console.log('First', res);
                    return getTodos('todos/eat.json');
                })
                .then(res => {
                    console.log('Second', res);
                    return getTodos('toos/sleep.json');
                })
                .then(res => {
                    console.log('Third', res);
                    return getTodos('todos/eat.json')
                })
                .catch(err => {
                    console.log('Child Rejected -', err);
                    return getTodos('todo/eat.json')
                })
                .then(res => {
                    console.log('Catch Connected', res); // ? this will be executed for third promise and also for the first catch block.
                })
                .catch(err => {
                    console.log('Second Catch Rejected', err);
                });
        })
        .catch(err => console.log('Parent Rejected -', err));
})();

// ? Fetch will only handle the reponse part. They wont reject the promise if the src call failed.
// ? the response received contains the status code and the remaining chain should be handled using that.
// (function () {
//     fetch('todos/code.json')
//         .then(res => {
//             console.log('First', res);
//             return fetch('todos/aeat.json')
//         })
//         .then(res => {
//             console.log('Second', res);
//             return fetch('todos/sleep.json')
//         })
//         .then(res => {
//             console.log('Third', res);
//         })
//         .catch(err => console.log(err));
// })();

// (function () {
//     fetch('todos/code.json')
//         .then(res => {
//             console.log('First', res);
//             return fetch('todos/aeat.json')
//         })
//         .then(res => {
//             console.log('Second', res);
//             return fetch('todos/sleep.json')
//         })
//         .then(res => {
//             console.log('Third', res);
//         })
//         .catch(err => console.log(err))
//         .catch(err => console.log(err));
// })();