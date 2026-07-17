// # 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 2

// ## 1. Array

// ### Intermediate

// Create an array of 5 favorite movies and print all values.


// **Hint:** Use indexing

let favMovies=["3 Idiots","OMG","Pk","Dont breath","GG"]
for(let m of favMovies){
    console.log(m)
}
console.log("================================")
for (let i = 0; i < favMovies.length; i++) {
    console.log(favMovies[i]);
}
console.log("================================")

// ### Hard

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// **Hint:** Mixed data types + nested indexing

let mixData=[
    12,
    13.9,
    "String",
    [10,20,30]
]
console.log(mixData[3])
console.log(mixData[3][0])
console.log(mixData[3][1])
console.log(mixData[3][2])
console.log("================================")

console.log("===============");

// ---

// # 2. Indexing in Array

// ### Intermediate

// Print the first and last element of an array.

// **Hint:** Use `0` and `length - 1`

let firstLastArr=[9,2,13,15,11,25,1]

console.log(`First element : ${firstLastArr[0]}`)
console.log(`Last element : ${firstLastArr[firstLastArr.length-1]}`)
console.log("================================")

// ### Hard

// Swap the second and second-last element using indexing.

// **Hint:** Use temporary variable
let swappshit=[2,3,5,16,7,12]
let a=swappshit[1] //a=12
swappshit[1] = swappshit[swappshit.length-2]// swappshit[1] = 7
swappshit[swappshit.length-2]=a

console.log(swappshit)
console.log("===============");

// ---

// # 3. Multi-Dimensional Arrays

// ### Intermediate

// Create a 2D array and print all first elements of inner arrays.

// **Hint:** Double indexing

var twoDarr=[[1,2,3],[4,5,6],[7,8,9]]
for(let i=0;i<twoDarr.length;i++){
   for(let j=0;j<=i;j++){
        if(j>0){
            break
        }
        else{
           console.log(twoDarr[i][0])
        }
    }
}
console.log("===============")
var twoDarr = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = 0; i < twoDarr.length; i++){
    console.log(twoDarr[i][0]);
}
console.log("===============")

// ### Hard

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
}

console.log(sum);
console.log("===============");

// ---

// # 4. length

// ### Intermediate

// Find total elements in an array without counting manually.

// **Hint:** Use `.length`
let arrLen = [10, 20, 30, 40, 50];

console.log(arrLen.length);
// ### Hard

// Create a function that checks whether array length is even or odd.

// **Hint:** Use modulus operator

if(arrLen.length%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

console.log("===============");

// ---

// # 5. push()

// ### Intermediate

// Add 3 new elements at the end of array.

// **Hint:** Use `push()`

let pushArr=[10,20,30,40]
pushArr.push(50)
pushArr.push(60)
pushArr.push(70)
console.log(pushArr)

// ### Hard

// Add elements dynamically inside loop from another array.

// **Hint:** Loop + push
let DynaArr=[1,2,3]
let anotherDyna=[5,6,7]

for(let i=0;i<anotherDyna.length;i++){
    DynaArr.push(anotherDyna[i])
}
console.log(DynaArr)

console.log("===============");

// ---

// # 6. pop()

// ### Intermediate

// Remove last element and print removed value.

// **Hint:** Store `pop()` result

let popArr=[1,2,3,4,5,6,7]
let removeVal=popArr.pop()
console.log(removeVal)

// ### Hard

// Keep removing elements until array becomes empty.

// **Hint:** Use `while` loop
let arr = [10, 20, 30, 40, 50];

while (arr.length > 0) {
    arr.pop();
}

console.log(arr);
console.log("===============");

// ---

// # 7. unshift()

// ### Intermediate

// Add one username at beginning of array.

// **Hint:** Use `unshift()`
let userArrrrrr=[1,24,6,7,8,9]
userArrrrrr.unshift("Mrkgs")
console.log(userArrrrrr)

// ### Hard

// Insert multiple elements at beginning without replacing existing ones.

// **Hint:** Multiple arguments
let unArr = [4, 5, 6];

unArr.unshift(1, 2, 3);

console.log(unArr);
console.log("===============");

// ---

// # 8. shift()

// ### Intermediate

// Remove first element from array.

// **Hint:** Use `shift()`

unArr.shift()
console.log(unArr)

// ### Hard

// Remove first element repeatedly until only 2 elements remain.

// **Hint:** Loop + length check
let repArrtwo = [1,2,3,4,4,1,1,21,2,1,51,6,7,8,9,222,215];

while (repArrtwo.length > 2) {
    repArrtwo.shift();
}

console.log(repArrtwo);

console.log("===============");

// ---

// # 9. splice()

// ### Intermediate

// Remove 2 elements from middle of array.

// **Hint:** `splice(start, deleteCount)`

let spliceArrr=[1,2,3,4,5,6,7,8,9]

spliceArrr.splice(2,2)
console.log(spliceArrr)

// ### Hard

// Replace 3 middle elements with 5 new values.

// **Hint:** Use insertion with splice

spliceArrr.splice(4,3,12,13,14,15,17)
console.log(spliceArrr)

console.log("===============");

// ---

// # 10. reverse()

// ### Intermediate

// Reverse an array using method.

// **Hint:** Use `reverse()`

spliceArrr.reverse()
console.log(spliceArrr)

// ### Hard

// Reverse only first half of array.

// **Hint:** Manual swapping
let halfArr = [1,2,3,4,5,6,7,8,9,10,12];

let half = Math.floor(halfArr.length / 2);
console.log(half)
for (let i = 0; i < Math.floor(half / 2); i++) {
    let temp = halfArr[i];
    halfArr[i] = halfArr[half - 1 - i];
    halfArr[half - 1 - i] = temp;
}

console.log(halfArr);
console.log("===============");

// ---

// # 11. sort()

// ### Intermediate

// Sort numbers in ascending order.

// **Hint:** Compare function
let Comparearr = [8, 3, 10, 1, 5, 2,555];

Comparearr.sort(function(a, b) {
    return a - b;
});

console.log(Comparearr);
// ### Hard

// Sort array so even numbers come first and odd later.

// **Hint:** Custom compare logic

let sortArrrr=[10,2,4,6,22,1,3,54,12,9]
let newSorrtt=sortArrrr.sort(function(a, b) {
    return a - b;
});
let emptyyyy=[]
for (let i=0;i<sortArrrr.length;i++){
    if(newSorrtt[i]%2==0){
        emptyyyy.push(newSorrtt[i])
        
    }
}
console.log(emptyyyy);
for (let i=0;i<sortArrrr.length;i++){
    if(newSorrtt[i]%2!=0){
        emptyyyy.push(newSorrtt[i])
        
    }
}
console.log(emptyyyy);


let arrrrrrrrrrrr = [10,2,4,6,22,1,3,54,12,9];

arrrrrrrrrrrr.sort(function(a, b) {
    if (a % 2 == 0 && b % 2 != 0) {
        return -1;
    }

    if (a % 2 != 0 && b % 2 == 0) {
        return 1;
    }

    return a - b;
});

console.log(arrrrrrrrrrrr);


console.log("===============");

// ---

// # 12. slice()

// ### Intermediate

// Extract first 4 elements into new array.

// **Hint:** Use `slice()`
let araaar = [10, 20, 30, 40, 50, 60, 70];

let neaaawArr = araaar.slice(0, 4);

console.log(neaaawArr);
// ### Hard

// Create a copy excluding first and last element.

// **Hint:** Use start and end indexes

let gigig=[1,2,24,5,6,7,3,7,3,2,37,8,1,24,61,6,3,1441,3125,]

let newgigigi=gigig.slice(1,gigig.length-1)
console.log(newgigigi);


console.log("===============");

// ---

// # 13. concat()

// ### Intermediate

// Merge two arrays.

// **Hint:** Use `concat()`
let codingLanguages = ["JavaScript", "Python", "Java"];
let databaseNames = ["MySQL", "MongoDB", "PostgreSQL"];

let mergedTechnologies = codingLanguages.concat(databaseNames);

console.log(mergedTechnologies);
// ### Hard

// Merge 3 arrays and remove duplicate values.

// **Hint:** Combine + loop/includes
let firstBatch = [1, 2, 3, 4];
let secondBatch = [3, 4, 5, 6];
let thirdBatch = [6, 7, 8, 1];

let mergedBatch = firstBatch.concat(secondBatch, thirdBatch);

let uniqueBatch = [];

for (let i = 0; i < mergedBatch.length; i++) {
    if (!uniqueBatch.includes(mergedBatch[i])) {
        uniqueBatch.push(mergedBatch[i]);
    }
}

console.log(uniqueBatch);



console.log("===============");

// ---

// # 14. includes()

// ### Intermediate

// Check whether `"apple"` exists in array.

// **Hint:** Use boolean result
let fruitBasket = ["Mango", "Apple", "Banana", "Orange"];

let hasApple = fruitBasket.includes("Apple");

console.log(hasApple);
// ### Hard

// Check if all elements of one array exist inside another.

// **Hint:** Loop + includes
let mainArray = [10, 20, 30, 40, 50, 60];
let checkArray = [20, 40, 60];

let allPresent = true;

for (let i = 0; i < checkArray.length; i++) {
    if (!mainArray.includes(checkArray[i])) {
        allPresent = false;
        break;
    }
}

console.log(allPresent);
console.log("===============");

// ---

// # 15. indexOf()

// ### Intermediate

// Find index of `"Rahul"` in array.

// **Hint:** Use `indexOf()`
let studentNames = ["Amit", "Rahul", "Priya", "Neha"];

let rahulIndex = studentNames.indexOf("Rahul");

console.log(rahulIndex);
console.log("======================================")
// ### Hard

// Find all positions of repeated number `5`.

// **Hint:** Loop through entire array
let positionAr=[1,2,5,5,6,2,5,7,5,8,5,2]
for(let i=0;i<positionAr.length;i++){
    if(positionAr[i]==5){
        console.log(i)
    }
}
console.log("===============");

// ---

// # 16. join()

// ### Intermediate

// Convert array into comma separated string.

// **Hint:** Use `join(",")`
let programmingLanguages = ["JavaScript", "Python", "Java", "C++"];

let languageString = programmingLanguages.join(",");

console.log(languageString);

// ### Hard

// Convert array into sentence format.

// **Hint:** Join with spaces
let senArrr=["I","Love","Js"]
console.log(senArrr.join(" "));

console.log("===============");

// ---

// # 17. for loop

// ### Intermediate

// Print all array elements using loop.

// **Hint:** Loop through indexes
let cityNames = ["Mumbai", "Delhi", "Pune", "Chennai", "Kolkata"];

for (let i = 0; i < cityNames.length; i++) {
    console.log(cityNames[i]);
}
// ### Hard

// Print elements at only even indexes.

// **Hint:** Increase loop smartly
let EvenIndex=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<EvenIndex.length;i+=2){
    console.log(EvenIndex[i])
}
console.log("===============");

// ---

// # 18. for...of

// ### Intermediate

// Print all values using `for...of`.

// **Hint:** Direct value iteration
let numbers = [10, 20, 30, 40, 50];

for (let value of numbers) {
    console.log(value);
}
// ### Hard

// Count vowels from array of characters.

// **Hint:** Use conditions inside loop
let characters = ["a", "b", "e", "k", "i", "m", "o", "x", "u"];

let vowelCount = 0;

for (let ch of characters) {
    if (
        ch == "a" ||
        ch == "e" ||
        ch == "i" ||
        ch == "o" ||
        ch == "u"
    ) {
        vowelCount++;
    }
}

console.log(vowelCount);
console.log("===============");

// ---

// # 19. Reference Behaviour of Array

// ### Intermediate

// Assign one array to another variable and modify second one.

// **Hint:** Observe original array
let originalArray = [10, 20, 30, 40];

let secondArray = originalArray;

secondArray[1] = 100;

console.log("Original:", originalArray);
console.log("Second:", secondArray);
// ### Hard

// Create true copy so original array does not change.

// **Hint:** Use spread operator
let ogarrau = [10, 20, 30, 40];

let copiedArray = [...ogarrau];

copiedArray[1] = 100;

console.log("Original:", ogarrau);
console.log("Copy:", copiedArray);
console.log("===============");

// ---

// # 20. Spread Operator

// ### Intermediate

// Copy array into new array.

// **Hint:** Use `...`
let spreadNumbers = [1, 2, 3, 4];

let copiedNumbers = [...spreadNumbers];

console.log(copiedNumbers);
// ### Hard

// Merge arrays and add extra values in between.

// **Hint:** Combine spread carefully
let firstArray = [1, 2, 3];
let secondSpreadArray = [7, 8, 9];

let mergedArray = [...firstArray, 4, 5, 6, ...secondSpreadArray];

console.log(mergedArray);

console.log("===============");
