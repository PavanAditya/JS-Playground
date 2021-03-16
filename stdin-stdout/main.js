
var stdin_input = [];
let inpLen = 0;
let count = 0;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    // if (!count) {
    //     inpLen = Number(line);
    //     count++;
    // } else {
    stdin_input.push(line.toString());
    // }
    if (stdin_input.length === 2)
        main()
})

function main() {
    let num = 0;
    sp1 = stdin_input[0].split('');
    sp2 = stdin_input[1].split('');
    for (let i = 0; i < sp1.length; i++)
        num = num + (sp1[i] === sp2[i]);
    console.log(num);
}