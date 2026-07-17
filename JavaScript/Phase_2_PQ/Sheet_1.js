// JavaScript Beginner Practice Questions (Phase -2 ) Sheet  - 1
// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
function greet() {
  console.log("Hello World");
}
greet();

console.log("===============================================");

// 2. Create a function `add(a, b)` that returns the sum.

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

console.log("===============================================");

// 3. Write a function to calculate the square of a number.

function sqr(a) {
  return a * a;
}
console.log(sqr(2));

console.log("===============================================");

// 4. Create a function that checks whether a number is even or odd.

function EvenOdd(a) {
  if (a % 2 == 0) {
    console.log(`${a} is even number`);
  } else {
    console.log(`${a} is odd number`);
  }
}

EvenOdd(22);
console.log("===============================================");

// 5. Write a function that converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

var temp = 30;

console.log(celsiusToFahrenheit(temp));
console.log("===============================================");

// 6. Create a function with default parameter `"Guest"`.

function def(str = "Guest") {
  console.log(str);
}
def("Nananana");
def(); //Default para
console.log("===============================================");

// 7. Write a function that returns the greater of two numbers.

function greatestAmongTwo(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else if (b > a) {
    console.log(`${a} is Smaller than ${b}`);
  } else {
    console.log("Both are equal");
  }
}
greatestAmongTwo(10, 20);
console.log("===============================================");

// 8. Create a function to calculate area of rectangle.

function areaOfRectangel(l, b) {
  return l * b;
}
console.log("Area of recangle : ", areaOfRectangel(29, 10));
console.log("===============================================");

// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.

function aged(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(aged(22));
console.log("===============================================");

// 10. Create a function to reverse a string.

function Strr(str = "ggg") {
  console.log(str.split("").reverse().join(""));
}

Strr("Hello World");
console.log("===============================================");
//Second way
function Strr(str = "ggg") {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  console.log(rev);
}

Strr("Hello World");
console.log("===============================================");

// ## Intermediate Level

// 1. Write a function expression for multiplication.

let mul = function (a) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
};
mul(5);
console.log("===============================================");
let mull = function (a, b) {
  return a * b;
};

console.log(mull(5, 6));
console.log("===============================================");

// 2. Convert a normal function into an arrow function.

function greet(name) {
  console.log("Hello " + name);
}

greet("Aman");

let greett = (name) => {
  console.log("Hello " + name);
};
greett("Kirtan");
console.log("===============================================");

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.

function UsingFor(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log("===============================================");

function UsingForOf(...arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}
console.log("===============================================");

function UsingreduceMethod(...arr) {
  return arr.reduce((sum, add) => {
    return sum + add;
  }, 0);
}
console.log("===============================================");

console.log(UsingFor(10, 10, 20, 40, 50));
console.log(UsingForOf(10, 10, 20, 40, 50));
console.log(UsingreduceMethod(10, 10, 20, 40, 50));
console.log("===============================================");

// 4. Write a function that counts vowels in a string.

function countVowel(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let c of str) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
      count++;
    }
  }
  console.log(count);
}
countVowel("KirtAn");
console.log("===============================================");

function countVowel(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let c of str) {
        if ("aeiou".includes(c)) {
            count++;
        }
    }

    return count;
}

console.log(countVowel("KirtAn"));
console.log("===============================================");

// 5. Create a function that checks if a string is palindrome.
function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");

    if (str == reverse) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

function isPalindrome(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str == reverse) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}
console.log("===============================================");

console.log(isPalindrome("madam"));
console.log("===============================================");

// 6. Write a callback function example using `setTimeout`.
function greet() {
    console.log("Hello, Welcome!");
}

setTimeout(greet, 3000);

console.log("Waiting...");
console.log("===============================================");

// 7. Create a higher-order function that executes another function twice.
function executeTwice(callback) {
    callback();
    callback();
}

function greet() {
    console.log("Hello!");
}

executeTwice(greet);
("===============================================");
// 8. Write a function that returns another function.

// Function returning another function

function outer() {
    return function () {
        console.log("Hello from Inner Function");
    };
}

let inner = outer();

inner();
function outer() {
    return () => console.log("Hello");
}

outer()();
("===============================================");

// 9. Create a pure function for subtraction.
function subtract(a, b) {
    return a - b;
}

console.log(subtract(20, 10));
console.log(subtract(50, 15));
("===============================================");

// 10. Create an impure function using global variable modification.
let count = 0;

function increase() {
    count++;
    console.log(count);
}

increase();
increase();
increase();


console.log("======================================")
// # Part 2 — Advanced Functions (21–35)

// 1. Write a recursive function for factorial.
// 2. Write recursive Fibonacci function.
// 3. Create a function that finds power using recursion.
// 4. Create an IIFE that prints `"Executed"`.
// 5. Write a function that memoizes factorial calculation.
// 6. Create a closure counter function.
// 7. Write a function currying example for addition.
// 8. Create debounce function logic.
// 9. Create throttle function logic.
// 10. Write a function that executes only once.
// 11. Create custom implementation of `map`.
// 12. Create custom implementation of `filter`.
// 13. Create custom implementation of `reduce`.
// 14. Create custom `forEach`.
// 15. Explain output:
function test() {
    return;
    console.log("Hello");
}
console.log(test());

