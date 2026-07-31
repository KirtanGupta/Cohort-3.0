// JavaScript Beginner Practice Questions (Phase -2 ) Sheet  - 1
// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

const printQuestion = (question) => console.log(`Question: ${question}`);

// 1. Create a function named `greet` that prints `"Hello World"`.
printQuestion('Create a function named greet that prints "Hello World".');
function greet() {
  console.log("Hello World");
}
greet();

console.log("===============================================");

// 2. Create a function `add(a, b)` that returns the sum.
printQuestion("Create a function add(a, b) that returns the sum.");

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

console.log("===============================================");

// 3. Write a function to calculate the square of a number.
printQuestion("Write a function to calculate the square of a number.");

function sqr(a) {
  return a * a;
}
console.log(sqr(2));

console.log("===============================================");

// 4. Create a function that checks whether a number is even or odd.
printQuestion("Create a function that checks whether a number is even or odd.");

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
printQuestion("Write a function that converts Celsius to Fahrenheit.");

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

var temp = 30;

console.log(celsiusToFahrenheit(temp));
console.log("===============================================");

// 6. Create a function with default parameter `"Guest"`.
printQuestion('Create a function with default parameter "Guest".');

function def(str = "Guest") {
  console.log(str);
}
def("Nananana");
def(); //Default para
console.log("===============================================");

// 7. Write a function that returns the greater of two numbers.
printQuestion("Write a function that returns the greater of two numbers.");

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
printQuestion("Create a function to calculate area of rectangle.");

function areaOfRectangel(l, b) {
  return l * b;
}
console.log("Area of recangle : ", areaOfRectangel(29, 10));
console.log("===============================================");

// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.

printQuestion('Return "Adult" for age 18 or older, otherwise "Minor".');
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
printQuestion("Create a function to reverse a string.");

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
printQuestion("Write a function expression for multiplication.");

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
printQuestion("Convert a normal function into an arrow function.");

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
printQuestion("Create a function that accepts unlimited numbers and returns their sum using rest operator.");

function UsingFor(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log(UsingFor(10, 10, 20, 40, 50));
console.log("===============================================");

function UsingForOf(...arr) {
  let sum = 0;
  
  for (let num of arr) {
    sum += num;
  }
  
  return sum;
}
console.log(UsingForOf(10, 10, 20, 40, 50));
console.log("===============================================");

function UsingreduceMethod(...arr) {
  return arr.reduce((sum, add) => {
    return sum + add;
  }, 0);
}
console.log("===============================================");

console.log(UsingreduceMethod(10, 10, 20, 40, 50));
console.log("===============================================");

// 4. Write a function that counts vowels in a string.
printQuestion("Write a function that counts vowels in a string.");

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
printQuestion("Create a function that checks if a string is palindrome.");
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
printQuestion("Write a callback function example using setTimeout.");
function greet() {
  console.log("Hello, Welcome!");
}

setTimeout(greet, 3000);

console.log("Waiting...");
console.log("===============================================");

// 7. Create a higher-order function that executes another function twice.
printQuestion("Create a higher-order function that executes another function twice.");
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
printQuestion("Write a function that returns another function.");

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
printQuestion("Create a pure function for subtraction.");
function subtract(a, b) {
  return a - b;
}

console.log(subtract(20, 10));
console.log(subtract(50, 15));
("===============================================");

// 10. Create an impure function using global variable modification.
printQuestion("Create an impure function using global variable modification.");
let count = 0;

function increase() {
  count++;
  console.log(count);
}

increase();
increase();
increase();

console.log("======================================");

// # Part 2 — Advanced Functions (21–35)

// 1. Write a recursive function for factorial.
printQuestion("Write a recursive function for factorial.");

function factWithRec(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factWithRec(num - 1);
}
let sss = factWithRec(5);
console.log(sss);
console.log("======================================");

// 2. Write recursive Fibonacci function.
printQuestion("Write recursive Fibonacci function.");

function FibooRec(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return n - 1 + FibooRec(n - 2);
}

console.log(FibooRec(7));
console.log("======================================");

// 3. Create a function that finds power using recursion.
printQuestion("Create a function that finds power using recursion.");
function poopopop(num, pow) {
  if (pow === 0) {
    return 1;
  }
  //2 4
  // 2 *
  return num * poopopop(num, pow - 1);
}
console.log(poopopop(2, 4));
console.log("======================================");

// 4. Create an IIFE that prints `"Executed"`.
printQuestion('Create an IIFE that prints "Executed".');

(function exxxxxxx() {
  console.log("Executed");
})();
console.log("======================================");

// 5. Write a function that memoizes factorial calculation.
printQuestion("Write a function that memoizes factorial calculation.");

function memoizess() {
  let res = {};

  return function (num) {
    if (res[num]) {
      console.log(res);

      console.log("Returned from cache");
      return res[num];
    }

    console.log("Calculating...");

    let count = 1;

    for (let i = 1; i <= num; i++) {
      count *= i;
    }

    res[num] = count;
    //5:120

    return count;
  };
}

let faccco = memoizess();

console.log(faccco(5));
console.log(faccco(5));
console.log(faccco(6));
console.log(faccco(6));
console.log("======================================");

// console.log("=========",res,"=========")

// 6. Create a closure counter function.
printQuestion("Create a closure counter function.");
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let couuuu = counter();

console.log(couuuu()); // 1
console.log(couuuu()); // 2
console.log(couuuu()); // 3
console.log(couuuu()); // 4

console.log("======================================");

// 7. Write a function currying example for addition.
printQuestion("Write a function currying example for addition.");
function outNum(num) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return function () {
          return num + num2 + num3 + num4;
        };
      };
    };
  };
}
console.log(outNum(10)(20)(30)(40)());

function n1(sum){
  return function(next){
    if(next==undefined){
      return sum
    }
    return n1(sum+next)
  }
}
console.log(n1(10)(20)())
console.log("======================================");
// 8. Create debounce function logic.
printQuestion("Create debounce function logic.");

function debounce(fun, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun();
    }, delay);
  };
}
function hellooo() {
  console.log("HelloooooX");
}
let debouncccc = debounce(hellooo, 3000);
debouncccc();
debouncccc();
debouncccc();
debouncccc();
console.log("======================================");

// 9. Create throttle function logic.
printQuestion("Create throttle function logic.");
function throttlee(func, delay) {
  let isAllowed = true;
  return function () {
    if (isAllowed) {
      func();
      isAllowed = false;
      setTimeout(() => {
        // func()
        isAllowed = true;
      }, delay);
    }
  };
}
function byeeeeee() {
  console.log("BYEEEEEEEEE");
}
let throttleee = throttlee(byeeeeee, 3000);
throttleee();
throttleee();
throttleee();
throttleee();
console.log("======================================");

// 10. Write a function that executes only once.
printQuestion("Write a function that executes only once.");
function ExoneTime(func) {
  let isOnetimeExecuted = true;
  return function () {
    if (isOnetimeExecuted) {
      func();
      isOnetimeExecuted = false;
    }
  };
}
function oncee() {
  console.log("One timer");
}
let oneFun = ExoneTime(oncee);
oneFun();
oneFun();
oneFun();
oneFun();
oneFun();
console.log("======================================");

// 11. Create custom implementation of `map`.

// 12. Create custom implementation of `filter`.

// 13. Create custom implementation of `reduce`.

// 14. Create custom `forEach`.

// 15. Explain output:
printQuestion("Explain the output.");
function test() {
  return;
  console.log("Hello");
}
console.log(test());
console.log("======================================");
console.log("======================================");
console.log("============= Part 3 - Arrays Basics =========================");

// # Part 3 — Arrays Basics (36–55)

// ## Beginner

// 1. Create an array of 5 fruits.
printQuestion("Create an array of 5 fruits.");
let fruiiits = ["Apple", "Mango", "Orange", "Pineapple", "Watermelon"];
// 2. Print first and last element of array.
printQuestion("Print first and last element of array.");
console.log(fruiiits[0]);
console.log(fruiiits[fruiiits.length - 1]);
// 3. Find length of array.
printQuestion("Find length of array.");
console.log(fruiiits.length);
// 4. Add element at end using `push`.
printQuestion("Add element at end using push.");
fruiiits.push("Banana");
console.log(fruiiits);
// 5. Remove last element using `pop`.
printQuestion("Remove last element using pop.");
console.log(fruiiits);
fruiiits.pop();
// 6. Add element at beginning using `unshift`.
printQuestion("Add element at beginning using unshift.");
fruiiits.unshift("Kiwi");
console.log(fruiiits);
// 7. Remove first element using `shift`.
printQuestion("Remove first element using shift.");
fruiiits.shift();
console.log(fruiiits);
// 8. Reverse an array.
printQuestion("Reverse an array.");
console.log(fruiiits.reverse());
// 9. Sort numbers ascending.
printQuestion("Sort numbers ascending.");
let newArr = [12, 41, 5, 16, 1, 36, 124, 12];
console.log(newArr.sort((a, b) => a - b));
// 10. Sort numbers descending.
printQuestion("Sort numbers descending.");
console.log(newArr.sort((a, b) => b - a));

// ## Intermediate
let newwwwARR = [12, 41, 561, 7, 235, 12, 4, 15, 1, 12215, 54];
// 1. Use `splice` to remove elements.
printQuestion("Use splice to remove elements.");
// newwwwARR.splice(2,1)
console.log(newwwwARR);
// 2. Use `splice` to insert elements.
printQuestion("Use splice to insert elements.");
newwwwARR.splice(1, 0, 100);
console.log(newwwwARR);
// 3. Use `slice` to copy array.
printQuestion("Use slice to copy array.");
let copyArr = newwwwARR.slice();

console.log(copyArr);
// 4. Find index of an element.
printQuestion("Find index of an element.");
// let arr = [10, 20, 30, 40];

console.log(newwwwARR.indexOf(561));
// 5. Check if array contains a value.
printQuestion("Check if array contains a value.");
console.log(newwwwARR.includes(20));
// 6. Join array elements with .
printQuestion("Join array elements with a dot.");
console.log(newwwwARR.join("."));
// 7. Merge two arrays using spread operator.
printQuestion("Merge two arrays using spread operator.");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

console.log(arr3);
// 8. Copy array using spread operator.
printQuestion("Copy array using spread operator.");

let copy = [...arr3];

console.log(copy);
// 9. Find maximum value using `Math.max`.
printQuestion("Find maximum value using Math.max.");
console.log(Math.max(...arr3));
// 10. Swap two variables using destructuring.
printQuestion("Swap two variables using destructuring.");
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
// # Part 4 — Array Iteration Methods (56–75)
console.log("================ Part 4 Array Iteration Methods ===========");
// 1. Use `forEach` to print all numbers doubled.
printQuestion("Use forEach to print all numbers doubled.");

let doubleNumbers = [10, 20, 30, 40];

doubleNumbers.forEach((num) => {
  console.log(num * 2);
});

// 2. Use `map` to square all numbers.
printQuestion("Use map to square all numbers.");

let squareNumbers = [2, 3, 4, 5];

let squaredResult = squareNumbers.map((num) => num * num);

console.log(squaredResult);

// 3. Use `filter` to get even numbers.
printQuestion("Use filter to get even numbers.");

let evenArray = [1, 2, 3, 4, 5, 6];

let evenResult = evenArray.filter((num) => num % 2 === 0);

console.log(evenResult);

// 4. Use `reduce` to calculate sum.
printQuestion("Use reduce to calculate sum.");

let sumArray = [10, 20, 30, 40];

let totalSum = sumArray.reduce((sum, num) => sum + num, 0);

console.log(totalSum);

// 5. Use `reduce` to find maximum number.
printQuestion("Use reduce to find maximum number.");

let maxArray = [10, 45, 12, 78, 5];

let maxValue = maxArray.reduce((max, num) => {
  return num > max ? num : max;
}, maxArray[0]);

console.log(maxValue);

// 6. Use `find` to get first even number.
printQuestion("Use find to get first even number.");

let firstEvenArray = [5, 9, 11, 8, 10];

let firstEven = firstEvenArray.find((num) => num % 2 === 0);

console.log(firstEven);

// 7. Use `findIndex` to locate number > 50.
printQuestion("Use findIndex to locate number greater than 50.");

let findIndexArray = [10, 25, 45, 60, 80];

let greaterIndex = findIndexArray.findIndex((num) => num > 50);

console.log(greaterIndex);

// 8. Use `some` to check if any number is negative.
printQuestion("Use some to check if any number is negative.");

let negativeCheckArray = [10, 5, -8, 20];

let hasNegative = negativeCheckArray.some((num) => num < 0);

console.log(hasNegative);

// 9. Use `every` to check if all numbers are positive.
printQuestion("Use every to check if all numbers are positive.");

let positiveCheckArray = [10, 5, 8, 20];

let allPositive = positiveCheckArray.every((num) => num > 0);

console.log(allPositive);

// 10. Create array of names and convert all to uppercase.
printQuestion("Create array of names and convert all to uppercase.");

let studentNames = ["aman", "rahul", "anubhav"];

let upperNames = studentNames.map((name) => name.toUpperCase());

console.log(upperNames);

// 11. Filter all students with marks > 80.
printQuestion("Filter all students with marks greater than 80.");

let studentMarks = [
  { name: "Aman", marks: 85 },
  { name: "Rahul", marks: 70 },
  { name: "Anubhav", marks: 95 },
];

let topperStudents = studentMarks.filter((student) => student.marks > 80);

console.log(topperStudents);

// 12. Calculate average using reduce.
printQuestion("Calculate average using reduce.");

let averageArray = [10, 20, 30, 40];

let average =
  averageArray.reduce((sum, num) => sum + num, 0) / averageArray.length;

console.log(average);

// 13. Count occurrences of numbers in array.
printQuestion("Count occurrences of numbers in array.");

let occurrenceArray = [1, 2, 1, 3, 2, 1];

let occurrenceObject = {};

occurrenceArray.forEach((num) => {
  if (occurrenceObject[num]) {
    occurrenceObject[num]++;
  } else {
    occurrenceObject[num] = 1;
  }
});

console.log(occurrenceObject);

// 14. Flatten nested arrays using `flat`.
printQuestion("Flatten nested arrays using flat.");

let nestedNumbers = [1, [2, 3], [4, [5]]];

let flatArray = nestedNumbers.flat(2);

console.log(flatArray);

// 15. Remove duplicates using `Set`.
printQuestion("Remove duplicates using Set.");

let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = [...new Set(duplicateNumbers)];

console.log(uniqueNumbers);

// 16. Sort array of objects by age.
printQuestion("Sort array of objects by age.");

let ageUsers = [
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 22 },
];

ageUsers.sort((a, b) => a.age - b.age);

console.log(ageUsers);

// 17. Find total price of shopping cart.
printQuestion("Find total price of shopping cart.");

let shoppingCart = [
  { item: "Pen", price: 20 },
  { item: "Book", price: 100 },
  { item: "Bag", price: 500 },
];
// var counttt=0
// for (let i of shoppingCart){
//   counttt+=i.price
// }
// console.log(counttt)

let totalPrice = shoppingCart.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);
// console.log(totalPrice);

// 18. Group users by age.
printQuestion("Group users by age.");

let groupUsers = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 },
];

let groupedAge = {};

groupUsers.forEach((user) => {
  if (groupedAge[user.age]) {
    groupedAge[user.age].push(user);
  } else {
    groupedAge[user.age] = [user];
  }
});

console.log(groupedAge);

// 19. Chain `filter` and `map`.
printQuestion("Chain filter and map.");

let chainArray = [10, 25, 30, 45, 50];

let chainResult = chainArray.filter((num)=>{
  return num>25
}).map((num)=>{
  return num*2
})

console.log(chainResult);

// 20. Explain difference between `map` and `forEach`.
printQuestion("Explain difference between map and forEach.");

/*
map():
- Returns a new array.
- Used when you want to transform data.
- Original array remains unchanged.

forEach():
- Returns undefined.
- Used to perform an action (printing, updating, etc.).
- Does not create a new array.
*/

// # Part 5 — Objects Basics (76–90)

// =======================================
// 1. Create object for a student.
// =======================================

const student = {
  name: "Kirtan",
  age: 21,
  course: "BCA"
};

console.log(student);

// =======================================
// 2. Access properties using dot notation.
// =======================================

console.log(student.name);
console.log(student.age);

// =======================================
// 3. Access properties using bracket notation.
// =======================================

console.log(student["name"]);
console.log(student["course"]);

// =======================================
// 4. Add new property dynamically.
// =======================================

student.city = "Mumbai";
student["email"] = "kirtan@gmail.com";

console.log(student);

// =======================================
// 5. Update existing property.
// =======================================

student.age = 22;
student.course = "MCA";

console.log(student);

// =======================================
// 6. Delete a property.
// =======================================

delete student.email;

console.log(student);

// =======================================
// 7. Create object method.
// =======================================

const person = {
  name: "Rahul",
  greet: function () {
    return "Hello!";
  }
};

console.log(person.greet());

// =======================================
// 8. Use `this` keyword inside method.
// =======================================

const employee = {
  name: "Amit",
  salary: 50000,

  details() {
    console.log(`Name: ${this.name}`);
    console.log(`Salary: ${this.salary}`);
  }
};

employee.details();

// =======================================
// 9. Create nested object.
// =======================================

const company = {
  name: "Google",

  address: {
    city: "Bangalore",
    state: "Karnataka",

    location: {
      pincode: 560001
    }
  }
};

console.log(company);

// =======================================
// 10. Access deeply nested property.
// =======================================

console.log(company.address.location.pincode);

// =======================================
// 11. Destructure object properties.
// =======================================

const { name, age } = student;

console.log(name);
console.log(age);

// =======================================
// 12. Rename variables while destructuring.
// =======================================

const { name: studentName, course: studentCourse } = student;

console.log(studentName);
console.log(studentCourse);

// =======================================
// 13. Add default values during destructuring.
// =======================================

const { gender = "Male" } = student;

console.log(gender);

// =======================================
// 14. Copy object using spread operator.
// =======================================

const studentCopy = { ...student };

studentCopy.name = "Rohit";

console.log(student);
console.log(studentCopy);

// =======================================
// 15. Merge two objects.
// =======================================

const address = {
  city: "Mumbai",
  state: "Maharashtra"
};

const marks = {
  math: 90,
  science: 95
};

const mergedObject = {
  ...student,
  ...address,
  ...marks
};

console.log(mergedObject);