// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.

var str = "";

if (str) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Ouput :  Falsy

// 2. Check whether `0` is truthy or falsy.

var str = 0;

if (str) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Ouput :  Falsy


// 3. Check whether `[]` is truthy or falsy.

var str = [];

if (str) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Output :  Truthy

// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

let value = "Hello";

if (value) {
    console.log("Valid");
} else {
    console.log("Invalid");
}

//Output : Valid