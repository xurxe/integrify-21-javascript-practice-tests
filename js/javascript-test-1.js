/* 1. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle: 

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it. */

function logSymbolTriangle (symbol, n) {

    // declare empty string
    let string = '';

    // loop n number of times, adding an iteration of the symbol to the string, and logging the string every time
    for (let i = 0; i < n; i++) {
        string += symbol;
        console.log(string);
    };

    return;
};

logSymbolTriangle('#', 7);



/* 2. FizzBuzz: Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those). */

function fizzbuzz (first, last, fizz, buzz) {

    // loop through n numbers between first and last
    for (let n = first; n < (last + 1); n++) {

        // if n is divisible by fizz but not buzz, log Fizz
        if (n % fizz === 0 && n % buzz !== 0) {
            console.log('Fizz');
        }

        // if n is divisible by buzz but not fizz, log Buzz
        else if (n % buzz === 0 && n % fizz !== 0) {
            console.log('Buzz')
        }

        // if n is divisible by both, log FizzBuzz
        else if (n % fizz === 0 && n % buzz === 0) {
            console.log('FizzBuzz')
        }

        // otherwise, log number n
        else {
            console.log(n)
        };
    };

    return;
};

fizzbuzz(1, 100, 3, 5);



/* 3. Maximum: Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method. */

function findMax() {

    // declare the first argument as the max
    let max = arguments[0];

    // loop through the indexes starting at 1
    for (let i = 1; i < arguments.length; i++) {
        // if the item is larger than the max, assign it as new max
        if (arguments[i] > max) {
            max = arguments[i];
        };
    };

    console.log(max);
    return max;
};

findMax(0, 10, 5);
findMax(0, -10, -2);



/* 4. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method. */

function reverseArray(array) {

    // declare empty array
    let reversedArray = [];

    // loop through original array, adding them at the beginning of the new array one by one
    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i])
    }

    console.log(reversedArray);
    return reversedArray;
};

reverseArray(["A", "B", "C"]);



/* 5. Modifying an array: Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and returns the array. If the array length is less than five it return ‘item not found’. */

function modifyArray (position, array) {

    // calculate index 
    const i = position - 1;

    // if the array is longer than the index, in other words, if it has at least as many items as the target position...
    if (array.length > i) {

        // change item to upper case
        item = array[i].toUpperCase();

        // swap with original item
        array.splice(i, 1, item);

        console.log(array);
        return array;
    }

    // if the array is shorter than the target position...
    else {

        // return error
        error = 'Item not found';

        console.log(error);
        return error;
    };
};

modifyArray(5, ["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]);
modifyArray(5, ["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]);
modifyArray(5, ["Google", "Facebook","Apple", "Amazon"]);



/* 6. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique  */

function getUniqueRandomNumbers (first, last, amount) {

    // declare empty array
    let numbers = [];

    // loop between first and last, and push each number to the numbers array
    for (n = first; n < (last - first + 1); n++) {
        numbers.push(n);
    };

    // declare empty results array
    let result = [];

    // loop m amount of times
    for (m = 0; m < amount; m++) {

        // get a random index
        let i = Math.floor(Math.random() * numbers.length);

        // get the number at that index
        let number = numbers[i];

        // push number to results array
        result.push(number);

        // splice out of the numbers arrange
        numbers.splice(i, 1);
    };

    console.log(result);
    return result;
};

getUniqueRandomNumbers(0, 9, 7);



/* 7. Write a funct which takes any number of arguments and return the sum of the arguments */

function getSum() {

    // initialize sum
    let sum = 0;

    // loop through arguments while adding them to the sum
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    };

    console.log(sum);
    return sum;
};

getSum(1,2,3);
getSum(1,2,3,4);



/* 8. Write a function which removes items from the middle of an array and replace with three items. */

function replaceMiddleItems(array, ...replacements) {

    // find the index at which to splice (works for both odd and even lengths)
    const i = Math.floor((array.length - 1) / 2);

    // start splice at index i, remove 1 item (if length is odd) or 2 (if length is even)
    array.splice(i, 2 - array.length % 2);

    // loop through the length of the replacement items...
    for (let j = 0; j < replacements.length; j++) {

        // adding them to the middle one after the other
        array.splice(i + j, 0, replacements[j])
    }

    console.log(array);
    return array;
};

replaceMiddleItems([1,2,3], 4,5,6);
replaceMiddleItems([1,2,3,4], 4,5,6) 



/* 9. Calculate the total annual income of the person by extracting the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */

// this function assumes that there's only one number per sentence fragment (separated by commas), and that the fragment includes a word to indicate whether it's a monthly or yearly amount

function parseIncome(string) {

    // get a strings array by splitting the sentence at the commas
    strings = string.split(', ');

    // declare empty numbers array
    numbers = [];

    // loop through items in strings array
    for (let i = 0; i < strings.length; i++) {

        // if fragment includes the string 'month', multiply by 12 and push to numbers array
        if (strings[i].includes('month')) {
            let number = strings[i].match(/\d+/g);
            numbers.push(number * 12);
        }

        // if fragment includes the strings 'annual' or 'year', multiply by 1 (to make sure it's a number and not an array), and push to numbers array
        else if (strings[i].includes('annual' || 'year')) {
            let number = strings[i].match(/\d+/g);
            numbers.push(number * 1);
        };
    };

    // initialize  sum
    let sum = 0;

    // loop through numbers array while adding each number to the sum
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    };

    console.log(sum);
    return sum;
};

parseIncome('He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.')



/* 10. Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false . Take two strings as arguments. Determine if second string matches ending of first string. Return boolean value. Example:

yourFunc("integrity", "ity")
true
yourFunc("integration", "tio")
false
yourFunc("connection", "sion")
false
yourFunc("connection", "tion")
true

*/

function check1EndsWith2 (string1, string2) {

    // declare new regex to match string2 at the end
    let regex = new RegExp(string2 + '$', 'g');

    // check if string1 matches the regex
    if (string1.match(regex)) {
        console.log(true);
        return true;
    }

    else {
        console.log(false);
        return false;
    };
};

check1EndsWith2("integrity", "ity")
check1EndsWith2("integration", "tio")
check1EndsWith2("connection", "sion")
check1EndsWith2("connection", "tion")