/* 1. Check if a number is even */

function checkIfEven(number) {
    if (number % 2 === 0) {
        console.log(true);
        return true;
    }

    else {
        console.log(false);
        return false;
    };
};

checkIfEven(100);
checkIfEven(333);



/* 2. Check if a number is odd */

function checkIfOdd(number) {
    if (number % 2 === 1) {
        console.log(true);
        return true;
    }

    else {
        console.log(false);
        return false;
    };
};

checkIfOdd(100);
checkIfOdd(333);



/* 3. Check if a number is prime */

function checkIfPrime(number) {
    if (!Number.isInteger(number)) {
        console.log(false, `${number} is not prime because it is not an integer`);
        return false;
    }

    else if (number < 0) {
        console.log(false, `${number} is not prime because it is not a natural number`);
        return false;
    }

    else if (number === 1) {
        console.log(false, `1 is not prime because it only has one factor: 1`);
        return false;
    }

    else {
        for (let divisor = 2; divisor < Math.ceil((number + 1) / 2); divisor++) {
            if (number % divisor === 0) {
                console.log(false, `${number} is not prime because it has at least one factor other than 1 and itself.`);
                return false;
            }
        }
        console.log(true, `${number} is prime because it has exactly two factors: 1 and itself `)
        return true;
    };
};

checkIfPrime(0.5);
checkIfPrime(-1);
checkIfPrime(1);
checkIfPrime(2);
checkIfPrime(3);
checkIfPrime(4);
checkIfPrime(5);
checkIfPrime(6);
checkIfPrime(7);
checkIfPrime(8);
checkIfPrime(9);
checkIfPrime(10);
checkIfPrime(97);
checkIfPrime(99);



/* 4. Get all the prime numbers in a range */

function getPrimesInRange(beginning, ending) {

    // declare empty array for prime numbers
    let primes = [];

    // loop through the range
    for (let number = beginning; number < ending + 1; number++) {

        // all numbers have at least one factor (themselves)
        let factors = 1;

        // loop through the whole divisors of the number, starting at 1 and ending at half the number. Examples:
        // If number = 1, the loop doesn't run
        // If number = 2, the loop runs once (for divisor 1)
        // If number = 6, the loop runs three times (for divisors 1, 2, and 3)
        // If number = 7, the loop runs three times (for divisors 1, 2, and 3)
        for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {
            if (number % divisor === 0) {
                factors++
            }
        };

        // if the number has exactly two factors (1 and itself), it is prime
        if (factors === 2) {
            primes.push(number)
        };
    };

    console.log(primes);
    return primes;
};

getPrimesInRange(1, 100);
getPrimesInRange(-10, 10);
