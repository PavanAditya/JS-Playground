const app = require('express')();
const cp = require('child_process');
const fork = cp.fork;

app.get('/prime/:number', (req, res) => {
    const childProcess = fork('./isPrime.js');
    childProcess.send({number: parseInt(req.query.number)});
    childProcess.on('message', message => res.send(message));
});

app.listen(3000);