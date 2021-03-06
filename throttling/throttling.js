let count = 0;
let throtleCount = 0;

const myName = (name) => {
    console.log('Your name is ' + name);
    console.log('Clicks done: ' + count + ' -- Displayed: ' + ++throtleCount + ' times.');
}

const throtleName = (fn, timeout) => {
    let throtleFlag = true;
    return (...args) => {
        let vm = this;
        let arguments = args;
        if (throtleFlag) {
            fn.apply(vm, arguments);
            throtleFlag = false;
            setTimeout(() => {
                throtleFlag = true;
            }, timeout);
        }
    };
}

const showMyName = throtleName(myName, 500);