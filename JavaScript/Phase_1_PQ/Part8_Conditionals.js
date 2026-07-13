// ## Conditionals

// 1. Check whether a number is positive or negative.

let num = -10;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 2. Check whether a number is even or odd.

let n = 7;

if (n % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 3. Check whether a person is eligible to vote.

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// 4. Find the largest among two numbers.

let a = 25;
let b = 40;

if (a > b) {
    console.log(a + " is largest");
} else {
    console.log(b + " is largest");
}


// 5. Find the largest among three numbers.

let x = 15;
let y = 30;
let z = 25;

if (x >= y && x >= z) {
    console.log(x + " is largest");
} else if (y >= x && y >= z) {
    console.log(y + " is largest");
} else {
    console.log(z + " is largest");
}


// 6. Check whether a year is a leap year.

let year = 2024;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 7. Check whether a number is divisible by both 3 and 5.

let number = 30;

if (number % 3 == 0 && number % 5 == 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}


// 8. Create a simple grading system.

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 9. Check whether a character is a vowel or consonant.

let ch = "e";

if (
    ch == "a" || ch == "e" || ch == "i" ||
    ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" ||
    ch == "O" || ch == "U"
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}


// 10. Create a calculator using switch statement.

let num1 = 20;
let num2 = 10;
let operator = "*";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    case "%":
        console.log(num1 % num2);
        break;

    default:
        console.log("Invalid Operator");
}


// 11. Print the day name based on a number (1–7).

let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}


// 12. Check whether a username is "admin" and password is "1234".

let username = "admin";
let password = "1234";

if (username == "admin" && password == "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}