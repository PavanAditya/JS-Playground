let count = 0;

let fetchDataCall = (counterName, test) => {
    console.log('Data fetch call done: ' + ++count + (count === 1 ? ' time by ' : ' times by') + counterName);
};

let debounceData = (fn, timeout) => {
    let timer;
    return (...args) => {
        let vm = this;
        let arguments = args;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(vm, arguments);
        }, timeout);
    };
};

let getData = debounceData(fetchDataCall, 500);