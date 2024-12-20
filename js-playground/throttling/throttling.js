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

// ! throtleName func sends a timeOut value along with the required function.
// ! The throtleName func initially has a throtleFlag set to true. If the flag is true func passed as an argument will be called and our required func is executed.
// ! Once the function is executed the throtleFalg becomes false and a timer with a given timeOut value is set to make it true again.
// ! So even if the function is called again before the timer is completed, the function execution call will not happen as the flag is lying as false.
// ! After the timeOut the flag becomes true and will be ready for another function call.
// ? This concept is known as Throttling.