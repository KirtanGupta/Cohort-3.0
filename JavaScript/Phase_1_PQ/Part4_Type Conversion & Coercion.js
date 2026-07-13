// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.

var str="50"
var num= Number(str)
console.log("After Conversion String : " ,typeof(num))

// 2. Convert the number `100` into a string.

var n=100
var n1=String(n)
console.log(n1)//100
console.log(typeof(n1)) //string

// 3. Convert `"true"` into a boolean.

var t="true"
var bool=Boolean(t)
console.log(bool)//true
console.log(typeof(bool)) //boolean

// 4. Check the output of:

// - `"5" + 2`
console.log("5"+2) //52
// - `"5" - 2`
console.log("5"-2) //3
// - `true + 1`
console.log(true+1) // 2

// 1. Create a variable with value `"123abc"` and convert it into a number.

var l="123abc"
var k=Number(l)
console.log(k) //NaN

// 2. Use `parseInt()` on `"500px"`.

let value = parseInt("500px");
console.log(value);//500