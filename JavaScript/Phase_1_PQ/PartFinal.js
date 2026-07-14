// ## Challenge Questions for Beginners

// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.

var otp = Math.floor(Math.random() * 9000) + 1000;

console.log("OTP =", otp);


// 2. Reverse a 3-letter string manually.

var str = "cat";

var reverse = str[2] + str[1] + str[0];

console.log(reverse); // tac


// 3. Find the last character of a string.

var word = "JavaScript";

console.log(word[word.length - 1]); // t


// 4. Convert a full name into uppercase initials.

var fullName = "Aman Sharma";

var parts = fullName.split(" ");

var initials = parts[0][0].toUpperCase() + "." + parts[1][0].toUpperCase();

console.log(initials); // A.S


// 5. Check whether two strings are equal ignoring case sensitivity.

var str1 = "JavaScript";
var str2 = "javascript";

if (str1.toLowerCase() == str2.toLowerCase()) {
    console.log("Strings are Equal");
} else {
    console.log("Strings are Not Equal");
}


// 6. Create a simple login validation system.

var username = "admin";
var password = "1234";

if (username == "admin" && password == "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// 7. Find whether a number is a 2-digit or 3-digit number.

var num = 256;

if (num >= 10 && num <= 99) {
    console.log("2-Digit Number");
} else if (num >= 100 && num <= 999) {
    console.log("3-Digit Number");
} else {
    console.log("Neither 2-digit nor 3-digit");
}


// 8. Create a mini ATM balance checker.

var balance = 5000;
var withdraw = 2000;

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance = ₹" + balance);
} else {
    console.log("Insufficient Balance");
}


// 9. Simulate a traffic light system using switch.

var signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// 10. Build a small marksheet generator using variables and conditionals.

var s1 = 85;
var s2 = 78;
var s3 = 92;
var s4 = 69;
var s5 = 88;

var total = s1 + s2 + s3 + s4 + s5;
var percentage = total / 5;

console.log("Total Marks =", total);
console.log("Percentage =", percentage + "%");

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 75) {
    console.log("Grade B");
} else if (percentage >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}