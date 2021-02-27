function hoist() {

    if (true) {
        var x = 200;
    }
    console.log(x);
}

hoist();

console.log('--------Ex-2-----------');

function hoist2() {
    var y = 400;
    if (true) {
        y = 200;
    }
    console.log(y);
}

hoist2();

console.log('-----------Ex-3--------');

function hoist3() {
    var z = 400;

    function hoist4() {
        z = 200;
    }
    console.log(z);

    hoist4();

    console.log(z);
}
hoist3();