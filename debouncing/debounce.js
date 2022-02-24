let count = 0;

let fetchDataCall = (counterName) => {
    console.log(`Data fetch call done: ${++count}${(count === 1 ? ' time by' : ' times by')}${counterName}`);
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

// ! DebounceData is called with a timer value. It initiates the timer with a timeOut of the give timer value.
// ! If the function is called again before the timeOut gets completed the timer is resetted back to zero.
// ! If the func call doesn't happen until the timeOut is over, then the fetchDataCall method (passed as an arg the the debounceData method) will be called and will execute the required functionality
// ? This concept is know as debouncing. 