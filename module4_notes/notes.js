// Functions can be treated like variables in JavaScript

// Creat a filter function called is even with a parameter n
// returns a true or false.

// if (n %2 == 0) {
//     return true;
// } else {
//     return false;
// }

// reduce with ternary operator
// return n % 2 == 0 ? true : false;

function isEven(n) {
    return (n % 2 == 0)
}

// function filterIsEven(numList) {
//     for (let num of numList) {
//         if (isEven(num)) {
//             console.log(num);
//         }
//     }
// }

const numbers = [1,2, -22, 3, 443, 4, 5, 6808, 6, 7, 8, 9, 10];

// filterIsEven(numbers);

function isLarge(n) {
    return (n > 100);
}

// function filterIsLarge(numList) {
//     for (let num of numList) {
//         if(isLarge(num)) {
//             console.log(num);
//         }
//     }
// }

// filter functions are very repetative
// only the boolean question (if statement) is different
// indicates that you can make the code more effecient
// keep your code DRY (do not repeat yourself)

function filter(numList, filterFunc) {
    for (let num of numList) {
        if(filterFunc(num)) {
            console.log(num);
        }
    }
}

console.log("Filtering even numbers");
filter(numbers, (n) => {
    return(n % 2 == 0);
});

console.log("Filtering large numbers");
filter(numbers, (n) => {
    return(n > 100);
});

console.log("Filtering positive numbers");
filter(numbers, (n) => {
    return(n > 0);
});