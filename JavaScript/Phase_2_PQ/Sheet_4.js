// # 📑JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 4

// ## Beginner Level

// ### 1. Create an Object

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.

// ---
let student = {
  name: "Kirtan",
  age: 22,
  course: "MCA",
};
console.log(student);

// ### 2. Access Properties

// Given:

// ```jsx
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022,
};
// ```

// Print:

// - brand
// - model

// using both:

// - dot notation
// - bracket notation
console.log(car.brand + " " + car.model);
console.log(car["brand"] + " " + car["model"]);
// ---

// ### 3. Update Object Value

// Change the age of a user from 20 to 25.

// ```jsx
const user = {
  name: "Anubhav",
  age: 20,
};
// ```
user.age = 25;
console.log(user.age);
// ---

// ### 4. Add New Property

// Add a new property:

// ```jsx
// isAdmin: true
// ```

// to this object.
user.isAdmin = true;
console.log(user);
// ---

// ### 5. Delete Property

// Remove the `password` property from the object.

// ```jsx
const account = {
  username: "john",
  password: "12345",
};
// ```
delete account.password;
console.log(account);
// ---

// # Intermediate Level

// ### 6. Count Properties

// Write a function that returns how many properties an object has.

// Example:

// ```jsx
// countProperties({a:1,b:2,c:3})
// // 3
// ```

// Hint:

// Use:

// ```jsx
// Object.keys()
// ```
function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 }));

// ---

// ### 7. Loop Through Object

// Print all keys and values from this object.

// ```jsx
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi",
};
// ```

// Hint:

// Use:

// ```jsx
// for...in
// ```
for (var obj in person) {
  console.log(obj, " ", person[obj]);
}
// ---

// ### 8. Check Property Exists

// Check whether `"email"` exists inside an object or not.

// Hint:

// Use:

// ```jsx
// in
// ```
let found = false;

for (let key in person) {
  if (key === "email") {
    found = true;
    break;
  }
}

console.log(found);
console.log("email" in person);
console.log(person.hasOwnProperty("email"));
// ---

// ### 9. Merge Two Objects

// Merge these two objects into one.

// ```jsx
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// ```

// Hint:

// Use:

// ```jsx
// spread operator
// ```
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// ---

// ### 10. Convert Object to Array

// Convert this object into an array of key-value pairs.

// ```jsx
const userz = {
  name: "Aman",
  age: 21,
};
// ```

// Hint:

// Use:

// ```jsx
// Object.entries()
// ```

const result = Object.entries(userz);

console.log(result);
// ---

// # Problem Solving Level

// ### 11. Find Highest Value

// Find the student with highest marks.

// ```jsx
const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90,
};
// ```

// Expected Output:

// ```jsx
// "Anubhav"
// ```

const max = Math.max(...Object.values(marks));

for (let name in marks) {
  if (marks[name] === max) {
    console.log(name);
  }
}

let highest = "";

// for (let name of Object.keys(marks)) {
//   if (highest === "" || marks[name] > marks[highest]) {
//     highest = name;
//   }
// }

// console.log(highest);

// let highestStudent = "";
// let highestMarks = 0;

// for (const [name, score] of Object.entries(marks)) {
//   if (score > highestMarks) {
//     highestMarks = score;
//     highestStudent = name;
//   }
// }

// console.log(highestStudent);
// ---

// ### 12. Sum of Object Values

// Find total salary.

// ```jsx
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500,
};
// ```

// Expected Output:

// ```jsx
// 4500
// ```
var counttt = 0;
for (const [name, count] of Object.entries(salaries)) {
  counttt += count;
}
console.log(counttt);

// let totalSalary = 0;

// for (let salary of Object.values(salaries)) {
//     totalSalary += salary;
// }

// console.log(totalSalary);
// ---

// ### 13. Nested Object Access

// Print:

// - city
// - pincode

// ```jsx
const userXX = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001,
  },
};
// ```
console.log(userXX.address.city, " ", userXX.address.pincode);
// ---

// ### 14. Object Method Practice

// Create an object with:

// - name
// - marks
// - method called `getResult`

// If marks > 40:

// ```jsx
// "Pass"
// ```

// else:

// ```jsx
// "Fail"
// ```

let obbjj = {
  name: "Kirtan",
  marks: 67,
  getResult: function () {
    if (this.marks > 40) {
      console.log("pass");
    } else {
      console.log("fail");
    }
  },
};

obbjj.getResult();
// ---

// ### 15. Convert Array to Object

// Convert this array into an object.

// ```jsx
// const arr = ["name", "Anubhav", "age", 24]
// ```

// Expected Output:

// ```jsx
// {
//   name: "Anubhav",
//   age: 24
// }
// ```
const arr = ["name", "Anubhav", "age", 24];

const obj11 = Object.fromEntries([
  [arr[0], arr[1]],
  [arr[2], arr[3]],
]);

console.log(obj11);

// const obj = {};

// for (let i = 0; i < arr.length; i += 2) {
//   obj[arr[i]] = arr[i + 1];
// }

// console.log(obj);
// ---

// # Harder Practice Questions

// ### 16. Frequency Counter

// Count frequency of each character.

// Input:

// ```jsx
// "banana"
// ```
let bnnna = "banana";
// Expected Output:
let Xobj = {};
// ```jsx
// {
//   b:1,
//   a:3,
//   n:2
// }
// ```
for (let i of bnnna) {
  if (Xobj[i]) {
    Xobj[i]++;
  } else {
    Xobj[i] = 1;
  }
}
console.log(Xobj);
// let banana = "banana";
// let obj = {};

// for (let char of bnnna) {
//   Xobj[char] = (Xobj[char]|| 0)  + 1;
// }

// console.log(Xobj);
// ---

// ### 17. Group By Property

// Group users by age.

// ```jsx
const AAAusers = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 },
];
// ```

// Expected Output:

// ```jsx
// {
//   20: [
//     { name: "A", age: 20 },
//     { name: "C", age: 20 }
//   ],
//   21: [
//     { name: "B", age: 21 }
//   ]
// }
// ```
let XresX = {};

for (let user of AAAusers) {
  if (XresX[user.age]) {
    XresX[user.age].push(user);
  } else {
    XresX[user.age] = [user];
  }
  // console.log(user)
}
// for (let char of AAAusers) {
//   // console.log(char.age)
//   if (XresX[char.age]) {
//     XresX[char.age].push({
//       name: char.name,
//       age: char.age,
//     });
//   } else {
//     XresX[char.age] = [
//       {
//         name: char.name,
//         age: char.age,
//       },
//     ];
//   }
// }
console.log(XresX);
// ---

// ### 18. Deep Property Check

// Check whether this property exists:

// ```jsx
// "user.address.city"
// ```

// inside an object dynamically.

// Hint:

// Use:

// ```jsx
// split(".")
// ```
let ASobj = {
  user: {
    address: {
      city: "Mumbai",
    },
  },
};

let path = "user.address.city";

let keys = path.split(".");
// console.log(keys)
// [ 'user', 'address', 'city' ]

let current = ASobj;
// console.log(current)
// {
// user:
// {
//  address:{
//           city: 'Mumbai'
//   }
//  }
// }

for (let key of keys) {
  if (current[key] !== undefined) {
    console.log(" ", current, " ", current[key]);
    current = current[key];
  } else {
    console.log(false);
    break;
  }
}

if (current !== undefined) {
  console.log(true);
}
// ---

// ### 19. Object Comparison

// Check if two objects have same keys and values.

// Example:

// ```jsx
// {a:1,b:2}
// {a:1,b:2}
// ```

// Expected Output:

// ```jsx
// true
// ```
const obj11Z = { a: 1, b: 2 };
const obj22Z = { a: 1, b: 2 };

console.log(JSON.stringify(obj11Z) === JSON.stringify(obj22Z));
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };

// let same = true;

// for (let key in obj1) {
//   if (obj1[key] !== obj2[key]) {
//     same = false;
//     break;
//   }
// }

// console.log(same);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };

// let same = true;

// if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//   same = false;
// } else {
//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       same = false;
//       break;
//     }
//   }
// }

// console.log(same);
// ---

// ### 20. Remove Duplicate Objects

// Remove duplicate objects from array based on `id`.

// ```jsx
let OBJECTT=[
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"}
]
// ```

// Expected Output:

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"}
// ]
// ```


let res={}
let reseee=[]
for(let idx of OBJECTT){
  // console.log(id)
  if(!res[idx.id]){
    res[idx.id]=true
    reseee.push(idx)
  }
}
console.log(reseee)






// const arr = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ];

// let result = [];

// for (let obj of arr) {
//   let found = false;

//   for (let item of result) {
//     if (item.id === obj.id) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     result.push(obj);
//   }
// }

// console.log(result);

const resssssssssssss=[]
for (let obj of OBJECTT){
  let isFound=false
  for(let simObj of resssssssssssss){
    if(simObj.id==obj.id){
      isFound=true
      break
    }
  }
  if(!isFound){
    resssssssssssss.push(obj)
  }

}
console.log(resssssssssssss)




function outerr(){
  var a=20
  function inner(){
    console.log(a)
  }
  return inner
}
let ourr=outerr()
ourr()
console.log(ourr())