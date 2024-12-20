var test = "I'm global";

function testScope() {
    test = "I'm local";

    console.log(test);
}

console.log(test); // output:

testScope(); // output: 

console.log(test); // output: