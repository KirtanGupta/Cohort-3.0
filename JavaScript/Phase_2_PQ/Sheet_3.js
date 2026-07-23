// # 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 3

// ## 1. `forEach()`

// ### Intermediate Question

// You are given an array of prices.

// Print each price with `"₹"` before it.

// ```jsx
let prices = [100, 250, 399, 499];
prices.forEach((elem) => {
  console.log(`₹${elem}`);
});
// ```

// ### Hint

// - `forEach()` runs once for every element.
// - You don't return anything here.
// - Use `console.log()` inside it.

// ---

// ### Hard Question

// You are given an array of students.

// ```jsx
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
// ```

// Print:

// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise

// Output format:

// ```jsx
// Anubhav - Pass
// Rahul - Fail
// ```

// ### Hint

// - Loop through objects using `forEach()`
// - Use condition checking inside loop.
students.forEach((elem) => {
  if (elem.marks > 50) {
    console.log(elem.name + "-" + "Pass");
  } else {
    console.log(elem.name + "-" + "Fail");
  }
});
// ---

// # 2. `map()`

// ### Intermediate Question

// Convert all names into uppercase.

// ```jsx
let names = ["anubhav", "rahul", "aman"];
// ```

// Expected Output:

// ```jsx
// ["ANUBHAV", "RAHUL", "AMAN"]
// ```

// ### Hint

// - `map()` creates a new array.
// - Use `.toUpperCase()`.
names.map((elem)=>{
    return elem.toUpperCase()
})
console.log(names)
// ---

// ### Hard Question

// You are given products.

// ```jsx
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];
// ```

// Create a new array where:

// - Every product has a new property `discountPrice`
// - Discount is 10%

// Expected:

// ```jsx
// [
//   { name: "Laptop", price: 50000, discountPrice: 45000 }
// ]
// ```

// ### Hint

// - Return a new object from `map()`
// - Formula:

// ```jsx
// price - (price * 10 / 100)
// ```
let newProduct=products.map((elem)=>{

    return {
        name:elem.name,
        price:elem.price,
        discount: elem.price-(elem.price*10)/100
    }

})
console.log(newProduct)
//Usign spread oprator

let newProductss = products.map((product) => {
    return {
        ...product,
        discountPrice: product.price - (product.price * 10 / 100)
    };
});

console.log(newProductss);
// ---

// # 3. `filter()`

// ### Intermediate Question

// Filter all even numbers.

// ```jsx
let nums = [1,2,3,4,5,6,7,8];
// ```

// Expected Output:

// ```jsx
// [2,4,6,8]
// ```

// ### Hint

// - `filter()` keeps elements when condition is `true`.
let numss=nums.filter((elem)=>{
    return elem%2==0
})
console.log(numss)
// ---

// ### Hard Question

// You are given users.

// ```jsx
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
// ```

// Return only active users.

// ### Hint

// - Check `active === true`
// - Return condition directly.
let activeUser=users.filter((elem)=>{
    return elem.active===true
})
console.log(activeUser)

// let activeUser = users.filter((elem) => {
//     return elem.active;
// });

// console.log(activeUser);
// ---

// # 4. `reduce()`

// ### Intermediate Question

// Find total sum of array.

// ```jsx
let numssss = [10,20,30,40];
// ```

// Expected Output:

// ```jsx
// 100
// ```

// ### Hint

// - `reduce()` needs:
//     - accumulator
//     - current value
let tsum=numssss.reduce((ac,sum)=>{
   return ac+sum
},0)
console.log(tsum)
// ---

// ### Hard Question

// Count frequency of elements.

// ```jsx
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// ```

// Expected Output:

// ```jsx
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// ```

// ### Hint

// - Create an empty object `{}` as initial value.
// - Increase count if already exists.

// let frequency = fruits.reduce((acc, fruit) => {

//     if (acc[fruit]) {
//         acc[fruit]++;
//     } else {
//         acc[fruit] = 1;
//     }

//     return acc;

// }, {});

// console.log(frequency);

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let frequency = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(frequency);
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let frequency = {};

// for (let fruit of fruits) {

//     if (frequency[fruit]) {
//         frequency[fruit]++;
//     } else {
//         frequency[fruit] = 1;
//     }

// }

// console.log(frequency);
// ---

// # 5. `find()`

// ### Intermediate Question

// Find first number greater than 50.

// ```jsx
let numz = [20, 35, 60, 80];
// ```

// Expected Output:

// ```jsx
// 60
// ```

// ### Hint

// - `find()` returns first matching element.

let result = numz.find((elem) => {
    return elem > 50;
});

console.log(result);
// ---

// ### Hard Question

// Find a user with username `"admin"`.

// ```jsx
let userzz = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
// ```

// ### Hint

// - Compare inside callback:

// ```jsx
// user.username === "admin"
// ```
let adUser=userzz.find((elem)=>{
    return elem.username==="admin"
})
console.log(adUser)
// ---

// # 6. `findIndex()`

// ### Intermediate Question

// Find index of number `90`.

// ```jsx
let numxx = [10, 40, 90, 50];
// ```

// ### Hint

// - `findIndex()` returns index number.
let inddd=numxx.findIndex((elem)=>{
    return elem==90
})
console.log(inddd)
// ---

// ### Hard Question

// Find index of first failed student.

// ```jsx
let studentx= [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
// ```

// Condition:

// - Failed if marks < 40

// ### Hint

// - Use condition directly inside callback.
let failedStu=studentx.findIndex((elem)=>{
    return elem.marks<40
})
console.log(failedStu)
// ---

// # 7. `some()`

// ### Intermediate Question

// Check if any number is negative.

// ```jsx
let numB = [10, 20, -5, 40];
// ```

// Expected Output:

// ```jsx
// true
// ```
let NegNum=numB.some((elem)=>{
    return elem<0
})
console.log(NegNum)
// ### Hint

// - `some()` returns true if at least one condition matches.

// ---

// ### Hard Question

// Check if any product is out of stock.

// ```jsx
let productA = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
// ```

// ### Hint

// - Check:

// ```jsx
// stock === 0
// ```
let sss=productA.some((elem)=>{
    return elem.stock===0
})
console.log(sss)
// ---

// # 8. `every()`

// ### Intermediate Question

// Check if all numbers are positive.

// ```jsx
let numMM = [10, 20, 30, 40];
// ```

// Expected Output:

// ```jsx
// true
// ```

// ### Hint

// - `every()` checks all elements.
let XXXX=numMM.every((elem)=>{
    return elem>0
})
console.log(XXXX)
// ---

// ### Hard Question

// Check if all students passed.

// ```jsx
let studentCC = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
// ```

// Passing marks:

// ```jsx
// 40
// ```

// ### Hint

// - Return condition:

// ```jsx
// marks >= 40
// ```
let hh=studentCC.every((Elem)=>{
    return Elem.marks>=40
})
console.log(hh)
