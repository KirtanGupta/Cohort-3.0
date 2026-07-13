// ## Strings

// 1. Create a string and print its length.

var str="Hello World"
console.log(str.length) // 11

// 2. Convert a string into uppercase.

console.log(str.toUpperCase()) // HELLO WORLD

// 3. Convert a string into lowercase.

console.log(str.toLowerCase()) // hello world

// 4. Check if a string includes the word `"JavaScript"`.

var str="I love JavaScript"
console.log(str.includes("JavaScript")) // true

// 5. Extract the word `"World"` from `"Hello World"`.

var n="Hello World"
console.log(n.slice(6)) // World

// 6. Replace `"apple"` with `"mango"` in a sentence.

var strr="I love apple ."
console.log(strr.replace("apple","mango")) //I love mango .

// 7. Split `"HTML,CSS,JS"` into an array.

var gg="HTML,CSS,JS"
console.log(gg.split(","))

// 8. Remove extra spaces from a string.

var str = "    Hello World    ";
console.log(str.trim()); // Hello World


// 9. Repeat the word "Hi" 5 times.

var word = "Hi ";
console.log(word.repeat(5)); // Hi Hi Hi Hi Hi


// 10. Print the first character of a string.

var str = "JavaScript";
console.log(str[0]); // J
// or
console.log(str.charAt(0)); // J


// 11. Use template literals to print:
// "My name is Aman and I am 20 years old"

var name = "Aman";
var age = 20;

console.log(`My name is ${name} and I am ${age} years old`);
// My name is Aman and I am 20 years old