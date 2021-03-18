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
        .then(res => {
            console.log('First', res);
            return getTodos('todos/aeat.json');
        })
        .then(res => {
            console.log('Second', res);
            return getTodos('todos/sleep.json');
        })
        .then(res => {
            console.log('Third', res);
        })
        .catch(err => console.log('Rejected'));
})();

// ? Fetch will only handle the reponse part. They wont reject the promise if the src call failed.
// ? the response received contains the status code and the remaining chain should be handled using that.
(function () {
    fetch('todos/code.json')
        .then(res => {
            console.log('First', res);
            return fetch('todos/aeat.json')
        })
        .then(res => {
            console.log('Second', res);
            return fetch('todos/sleep.json')
        })
        .then(res => {
            console.log('Third', res);
        })
        .catch(err => console.log(err));
})();