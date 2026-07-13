// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.

var a=4.7
console.log(Math.round(a)) //5

// 2. Find the square root of 81.

console.log(Math.sqrt(81)) //9

// 3. Find the maximum number from `10, 20, 5, 99`.

console.log(Math.max(10,20,5,99)) //99

// or

let arr = [10, 20, 5, 99];

console.log(Math.max(...arr));//99

// 4. Generate a random number between 1 and 10.

console.log(Math.floor(Math.random()*10)) // 3 it will generate random number btn 1-10 

// 5. Convert `"99.99"` into an integer.

var ninenine="99.99"
var num = parseInt(ninenine);

console.log(num); //99

// 6. Check whether `25` is an integer or not.

var  num = 25;

console.log(Number.isInteger(num)); // true

// 7. Use `toFixed(2)` on `3.141592`.

let PI=3.141592
console.log(PI.toFixed(2))