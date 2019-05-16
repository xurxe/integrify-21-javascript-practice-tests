/* 1. Check if a number is even */

function checkIfEven(n) {

    if (typeof n !== 'number') {
        console.log(NaN)
        return NaN;
    }

    else if (n % 2 === 0) {
        console.log(true);
        return true;
    }

    else {
        console.log(false);
        return false;
    }
};

checkIfEven('banana');
checkIfEven(100);
checkIfEven(333);



/* 2. Check if a number is odd */

function checkIfOdd(n) {

    if (typeof n !== 'number') {
        console.log(NaN)
        return NaN;
    }

    else if (n % 2 === 1) {
        console.log(true);
        return true;
    }

    else {
        console.log(false);
        return false;
    };
};

checkIfEven('banana');
checkIfOdd(100);
checkIfOdd(333);



/* 3. Check if a number is prime */

function checkIfPrime(number) {
    if (typeof number !== 'number') {
        console.log(NaN, `'${number}' is not a number.`)
        return NaN;
    }

    else if (!Number.isInteger(number)) {
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

checkIfPrime('banana')
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



/* 4. Get all the prime numbers in a range */

function getPrimesInRange1(first, last) {

    if (typeof first !== 'number') {
        console.log(NaN, `'${first} is not a number.`)
        return NaN;
    }

    else if (typeof last !== 'number') {
        console.log(NaN, `'${last} is not a number.`)
        return NaN;
    };

    // declare empty array for prime numbers
    let primes = [];

    // loop through the range
    for (let number = first; number < last + 1; number++) {

        // all numbers have at least one factor (themselves)
        let factors = 1;

        // loop through the divisors of the number, starting at 1 and ending at half the number. Examples:
        // If number = 1, the loop doesn't run
        // If number = 2, the loop runs once (for divisor 1)
        // If number = 6, the loop runs three times (for divisors 1, 2, and 3)
        // If number = 7, the loop runs three times (for divisors 1, 2, and 3)
        for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {

            // when the remainder is zero, the divisor is a factor, so update the tally
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

getPrimesInRange1('banana', 100);
getPrimesInRange1(1, 100);
getPrimesInRange1(-10, 10);



function getPrimesInRange2(first, last) {

    if (typeof first !== 'number') {
        console.log(NaN, `'${first} is not a number.`)
        return NaN;
    }

    else if (typeof last !== 'number') {
        console.log(NaN, `'${last} is not a number.`)
        return NaN;
    };

    // declare empty array for prime numbers
    let primes = [];

    // if the range starts at or below 2...
    if (first <= 2) {

        // push 2 to the primes array
        primes.push(2)

        // loop from 3 to the end of the range, with an increment of 2 (because none of the odd numbers above 2 are prime). The rest is similar to getPrimesInRange1()
        for (let number = 3; number < last + 1; number += 2) {
            let factors = 1;

            for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {
                if (number % divisor === 0) {
                    factors++
                }
            };

            if (factors === 2) {
                primes.push(number)
            };
        };

        console.log(primes);
        return primes;
    }

    // otherwise, and if the range starts in an odd number...
    else if (first % 2 === 1) {

        // loop from beginning to the end of the range, with an increment of 2 (because none of the odd numbers above 2 are prime). The rest is similar to getPrimesInRange1()
        for (let number = first; number < last + 1; number += 2) {
            let factors = 1;

            for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {
                if (number % divisor === 0) {
                    factors++
                }
            };

            if (factors === 2) {
                primes.push(number)
            };
        };
    }

    // otherwise (if the range starts in an odd number)...
    else {

        // check if the start of the range is prime
        let factors = 1;

        for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {
            if (first % divisor === 0) {
                factors++
            }
        };

        if (factors === 2) {
            primes.push(first)
        };

        // run the usual loop through the rest of the range

        for (let number = first + 1; number < last + 1; number += 2) {
            factors = 1;

            for (let divisor = 1; divisor < Math.ceil((number + 1) / 2); divisor++) {
                if (number % divisor === 0) {
                    factors++
                }
            };

            if (factors === 2) {
                primes.push(number)
            };
        };
    };
    console.log(primes);
    return primes;
};

getPrimesInRange2('banana', 100);
getPrimesInRange2(1, 100);
getPrimesInRange2(-10, 10);



/* 4. Check if a number or string is a palindrome */

function checkPalindrome(input) {

    if (typeof input === 'number') {
        input = input.toString();
    }

    string = input.toLowerCase().replace(/[,;.:…(){}\[\]\^\`¡!¿?"“”'‘’\/\\+\-%=@#$&\*~_\r\n ]/g,"");

    array = string.split('')

    let reversedArray = [];

    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i])
    };

    reversedString = reversedArray.join('');

    if (string === reversedString) {
        console.log(true, `'${input}' is a palindrome`)
        return true;
    }

    else {
        console.log(false, `'${input}' is not a palindrome`)
        return false;
    };
};

checkPalindrome('banana');
checkPalindrome(123);
checkPalindrome('saippuakivikauppias');
checkPalindrome(123.21);
checkPalindrome('Taco cat');
checkPalindrome(`
    Dammit I’m mad.
    Evil is a deed as I live.
    God, am I reviled? I rise, my bed on a sun, I melt.
    To be not one man emanating is sad. I piss.
    Alas, it is so late. Who stops to help?
    Man, it is hot. I’m in it. I tell.
    I am not a devil. I level “Mad Dog”.
    Ah, say burning is, as a deified gulp,
    In my halo of a mired rum tin.
    I erase many men. Oh, to be man, a sin.
    Is evil in a clam? In a trap?
    No. It is open. On it I was stuck.
    Rats peed on hope. Elsewhere dips a web.
    Be still if I fill its ebb.
    Ew, a spider… eh?
    We sleep. Oh no!
    Deep, stark cuts saw it in one position.
    Part animal, can I live? Sin is a name.
    Both, one… my names are in it.
    Murder? I’m a fool.
    A hymn I plug, deified as a sign in ruby ash.
    A Goddam level I lived at.
    On mail let it in. I’m it.
    Oh, sit in ample hot spots. Oh wet!
    A loss it is alas (sip). I’d assign it a name.
    Name not one bottle minus an ode by me:
    “Sir, I deliver. I’m a dog”
    Evil is a deed as I live.
    Dammit I’m mad.
    `
);



/* 5. Check if a value is empty */

function checkIfEmpty(value){

    // numbers and booleans
    if (typeof value === 'number' || typeof value === 'boolean') {
        console.log(false);
        return false;
    }

    // undefined and null
    else if (value === undefined || value === null) {
        console.log(true);
        return true;
    }

    // strings and arrays
    else if (value.length === 0) {
        console.log(true);
        return true;
    }

    // objects
    else if (Object.entries(value).length === 0) {
        console.log(true);
        return true;
    }

    else {
        console.log(null, 'Error');
        return null;
    };
};

checkIfEmpty(0);
checkIfEmpty(false);
checkIfEmpty('');
checkIfEmpty(undefined);
checkIfEmpty(null);
checkIfEmpty([ ]);
checkIfEmpty({ });



/* 6. Return a different url depending on whether user is logged in or not */

const users = [
    {
        username: 'Xurxe',
        isLoggedIn: true,
    },
    {
        username: 'Sherry',
        isLoggedIn: true,
    },
    {
        username: 'Hari',
        isLoggedIn: false,
    },
    {
        username: 'Sooyeon',
        isLoggedIn: false,
    },
    {
        username: 'Mirela',
        isLoggedIn: false,
    },
];

function chooseUrl(userArray, username) {
    let isLoggedIn;
    let url;

    for (let i = 0; i < userArray.length; i++ ) {
        if (userArray[i].username === username) {
            isLoggedIn = userArray[i].isLoggedIn;
        }
    };
    
    if (isLoggedIn === true) {
        url='www.example.com/home'
    }

    else {
        url='www.example.com/login'
    };

    console.log(url);
    return url;
};

chooseUrl(users, 'Xurxe');
chooseUrl(users, 'Mirela');



/* 6. Check if a user has liked a product, and toggle the like status */

const products = [
    {
        productName: 'Laptop',
        brand: 'Mac',
        likes: [
            {author: 'Xurxe'}
        ],
        ratings: [
            {
                author: 'Xurxe',
                stars: 5
            },
            {
                author: 'Sherry',
                stars: 4
            },
            {
                author: 'Hari',
                stars: 5
            },
        ],
    },
    {
        productName: 'Monitor',
        brand: 'Dell',
        likes: [
            {author: 'Hari'},
            {author: 'Mirela'},
        ],
        ratings: [
            {
                author: 'Xurxe',
                stars: 2
            },
            {
                author: 'Sooyeon',
                stars: 1
            },
            {
                author: 'Mirela',
                stars: 5
            },
        ],
    },
    {
        productName: 'Mouse',
        brand: 'Dell',
        likes: [
            {author: 'Sooyeon'},
            {author: 'Sherry'},
        ],
        ratings: [
            {
                author: 'Sooyeon',
                stars: 4
            },
            {
                author: 'Mirela',
                stars: 5
            },
        ],
    },
]

function toggleLike(productArray, productName, username) {
    for (let i = 0; i < productArray.length; i++) {

        if (productArray[i].productName === productName) {

            for (let j = 0; j < productArray[i].likes.length; j++) {

                if (productArray[i].likes[j].author === username) {
                    productArray[i].likes.splice(j, 1);

                    console.log('Removed like', productArray[i])
                    return productArray[i];
                }

                else {
                    productArray[i].likes.push({author: username});

                    console.log('Added like', productArray[i])
                    return productArray[i];
                };
            };
        };
    };

    console.log('The product does not exist.')
    return;
}

toggleLike(products, 'Banana', 'Xurxe');
toggleLike(products, 'Laptop', 'Xurxe');
toggleLike(products, 'Monitor', 'Xurxe');