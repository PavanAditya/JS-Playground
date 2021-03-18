process.on('message', message => {
    const response = isPrime(message);
    process.send(response);
    process.exit();
});

const isPrime = (number) => {
    let isPrimeNum = true;
    for (let i=3; i<number; i++) {
        console.log(number, i, isPrimeNum);
        if (number % i === 0) {
            isPrimeNum = false;
            break;
        }
    }
    return isPrimeNum ? 'Prime' : 'Not a Prime';
};