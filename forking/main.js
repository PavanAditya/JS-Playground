const app = require('express')();
const cp = require('child_process');
const fork = cp.fork;

// app.get('/prime/:number', (req, res) => {
//     const childProcess = fork('./isPrime.js');
//     childProcess.send({number: parseInt(req.query.number)});
//     childProcess.on('message', message => res.send(message));
// });

// app.listen(3000);

const newChild = fork('forking/child.js');

newChild.send('Parent sent the code - 313.');
newChild.on('message', (msg) => console.log('Parent:', msg));
newChild.on('exit', (msg) => console.log('Exitted with msg', msg));

console.log('Child pid:', newChild.pid);