// Tests for equality and inequality with strings
console.log("Is 'apple' equal to 'apple'? I predict True.");
console.log('apple' === 'apple');


// Tests using the lower case function
console.log("Is 'HELLO' in lowercase equal to 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() === 'hello');

// Numerical tests involving equality and inequality
console.log("Is 10 equal to 10? I predict True.");
console.log(10 === 10);

console.log("Is 7 greater than 5? I predict True.");
console.log(7 > 5);

console.log("Is 3 less than 8? I predict True.");
console.log(3 < 8);

console.log("Is 6 greater than or equal to 6? I predict True.");
console.log(6 >= 6);

console.log("Is 4 less than or equal to 2? I predict False.");
console.log(4 <= 2);

// Tests using "and" and "or" operators
console.log("Is (true and true) True? I predict True.");
console.log(true && true);

console.log("Is (true or false) True? I predict True.");
console.log(true || false);

// Test whether an item is in an array
const fruits = ['apple', 'banana', 'orange', 'kiwi'];
console.log("Is 'orange' in the fruits array? I predict True.");
console.log(fruits.includes('orange'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
