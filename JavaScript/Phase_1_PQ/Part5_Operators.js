// ## Operators

// 1. Add two numbers and print the result.

console.log(10+20) //30

// 2. Find the remainder when 25 is divided by 4.

console.log(25%4) //1

// 3. Find the square of a number using exponent operator.

console.log(3**2) //9

// 4. Increment a variable using `++`.

var a=10
a++
console.log(a) //11

// 5. Decrement a variable using `-`.

var a=10
a--
console.log(a) //9

// 6. Use `+=` operator to increase a variable by 20.

var a=20
a+=1
console.log(a) //21

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.

var a=100
var b=200

console.log(a>b) //false
console.log(a<b) //true
console.log(a>=b) //false
console.log(a<=b) //true

// 8. Check if two values are strictly equal using `===`.

var a = 10
var b = "10"

console.log(a===b) //false

var a = 10
var b = 10

console.log(a===b) //true


// 9. Compare `"10"` and `10` using both `==` and `===`.

var a = 10
var b = "10"

console.log(a===b) //false

var a = "10"
var b = 10

console.log(a==b) //true

// 10. Create two boolean variables and test `&&`, `||`, and `!`.

let isLoggedIn = true;
let isAdmin = false;

// AND (&&)
console.log(isLoggedIn && isAdmin); //false

// OR (||)
console.log(isLoggedIn || isAdmin); //true

// NOT (!)
console.log(!isLoggedIn); //false
console.log(!isAdmin); //true

