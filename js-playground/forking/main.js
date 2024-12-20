const app = require('express')();
const cp = require('child_process');
const fork = cp.fork;

// app.get('/prime/:number', (req, res) => {
//     const childProcess = fork('./isPrime.js');
//     childProcess.send({number: parseInt(req.query.number)});
//     childProcess.on('message', message => res.send(message));
// });

// app.listen(3000);

const newChild = fork('forking/child.js'); // ? A new instance of the child file is created. The child.js file will get executed under a new nodeJs main thread.

newChild.send('Parent sent the code - 313.'); // ? Msg to the child process is sent/emitted using the send() method.
newChild.on('message', (msg) => console.log('Parent:', msg)); // ? Any msgs coming form the child process will be caught here and will be executed on it.
newChild.on('exit', (msg) => console.log('Exitted with msg', msg)); // ? If the chuld process emits the exit event, it is caught here and will stop the termination of the child process.

// ? Kills the child process after the required condition is met. Can be used to kill the child process from the parent instead exitting from the child process
// ! newChild.kill();

// ? Gives the 'killed' status of the created child process. If true, it indicates that the child process is killed.
console.log(newChild.killed);

console.log('Child pid:', newChild.pid); // ? Will print the Process ID of the child process. 