// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.

var name = "Aman";
var age = 20;
var city = "Mumbai";
var course = "BCA";

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
console.log(`Course: ${course}`);


// 2. Calculate the area of a rectangle.

var length = 10;
var width = 5;

var area = length * width;

console.log("Area of Rectangle = " + area);


// 3. Calculate the simple interest.

var p = 10000;
var r = 5;
var t = 2;

var si = (p * r * t) / 100;

console.log("Simple Interest = " + si);


// 4. Convert temperature from Celsius to Fahrenheit.

var celsius = 30;

var fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperature = " + fahrenheit + "°F");


// 5. Convert kilometers into meters.

var km = 5;

var meter = km * 1000;

console.log(km + " km = " + meter + " meters");


// 6. Calculate total marks and percentage of 5 subjects.

var s1 = 80;
var s2 = 75;
var s3 = 90;
var s4 = 85;
var s5 = 70;

var total = s1 + s2 + s3 + s4 + s5;
var percentage = (total / 500) * 100;

console.log("Total Marks = " + total);
console.log("Percentage = " + percentage + "%");


// 7. Calculate electricity bill based on units consumed.

var units = 120;
var rate = 8;

var bill = units * rate;

console.log("Electricity Bill = ₹" + bill);


// 8. Create a username generator using first name and birth year.

var firstName = "Aman";
var birthYear = 2005;

var username = firstName + birthYear;

console.log("Username = " + username);


// 9. Check whether a string starts with a specific letter.

var str = "JavaScript";

console.log(str.startsWith("J"));


// 10. Count the total characters in a sentence excluding spaces.

var sentence = "I love JavaScript";

var count = sentence.replaceAll(" ", "").length;

console.log("Characters = " + count);

// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.

var a = 25;
var b = 40;

if (a > b) {
    console.log(a + " is greater");
} else if (b > a) {
    console.log(b + " is greater");
} else {
    console.log("Both are equal");
}


// 2. Check whether a number lies between 10 and 50.

var num = 35;

if (num >= 10 && num <= 50) {
    console.log("Number lies between 10 and 50");
} else {
    console.log("Number is outside the range");
}


// 3. Check whether a password length is greater than 8.

var password = "mypassword123";

if (password.length > 8) {
    console.log("Valid Password");
} else {
    console.log("Password is too short");
}


// 4. Check if a person can drive:
// - age > 18
// - has license = true

var age = 20;
var hasLicense = true;

if (age > 18 && hasLicense) {
    console.log("Can Drive");
} else {
    console.log("Cannot Drive");
}


// 5. Check whether a number is divisible by 2, 3, or both.

var n = 12;

if (n % 2 == 0 && n % 3 == 0) {
    console.log("Divisible by both 2 and 3");
} else if (n % 2 == 0) {
    console.log("Divisible by 2");
} else if (n % 3 == 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 2 or 3");
}


// 6. Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.

var hour = 16;

if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}


// 7. Find whether a number is a multiple of 10.

var number = 70;

if (number % 10 == 0) {
    console.log("Multiple of 10");
} else {
    console.log("Not a multiple of 10");
}


// 8. Create a simple discount calculator.

var amount = 1200;
var discount = 10;

var finalPrice = amount - (amount * discount / 100);

console.log("Final Price = ₹" + finalPrice);


// 9. Check whether a product is in stock.

var inStock = true;

if (inStock) {
    console.log("Product is Available");
} else {
    console.log("Product is Out of Stock");
}


// 10. Calculate final bill after GST.

var bill = 1000;
var gst = 18;

var finalBill = bill + (bill * gst / 100);

console.log("Final Bill = ₹" + finalBill);