/*
=====================================================
📘 JAVASCRIPT ARRAY - COMPLETE NOTES (BEGINNER)
=====================================================

👉 Array = collection of multiple values in one variable
👉 Index starts from 0
👉 Arrays are dynamic (size can change)

*/

// ================= 1. DECLARATION =================
const numbers = [1, 2, 3, 4, 5];  
// Array of numbers

const fruits = ["Apple", "Banana", "Mango"];  
// Array of strings


// ================= 2. TYPE & ACCESS =================
console.log(typeof fruits);  
// Output: object (Array is treated as object in JS)

console.log(fruits[0]);  
// Access first element → Apple

console.log(fruits[2]);  
// Access third element → Mango


// ================= 3. UPDATE & ADD =================
fruits[2] = "Raw Mango";  
// Replace Mango with Raw Mango

fruits[3] = "Chickoo";  
// Add element at index 3 (dynamic nature)

console.log(fruits);


// ================= 4. ADD ELEMENT METHODS =================

// push() → Add element at END
fruits.push("Grapes");
console.log(fruits);

// unshift() → Add element at START
fruits.unshift("Orange");
console.log(fruits);


// ================= 5. REMOVE ELEMENT METHODS =================

// pop() → Remove last element
fruits.pop();
console.log(fruits);

// shift() → Remove first element
fruits.shift();
console.log(fruits);


// ================= 6. SLICE (COPY ARRAY) =================

// slice(start, end)
// end is NOT included
const copyFruits = fruits.slice(1, 3);

console.log(copyFruits);  
// Example: ["Banana", "Raw Mango"]

// NOTE: Original array NOT modified


// ================= 7. SPLICE (MODIFY ARRAY) =================

// splice(start, deleteCount, newValues)

// 👉 DELETE
fruits.splice(2, 1);  
// Remove 1 element from index 2
console.log(fruits);

// 👉 ADD
fruits.splice(0, 0, "Pineapple", "Kiwi");  
// Add at index 0 (deleteCount = 0)
console.log(fruits);

// 👉 REPLACE
fruits.splice(3, 1, "DragonFruit");  
// Replace 1 element at index 3
console.log(fruits);


// ================= 8. LOOPS =================

// 👉 Normal for loop
for(let i = 0; i < fruits.length; i++){
    console.log("Fruit:", fruits[i].toUpperCase());
}
// Logic: Access each element using index


// 👉 for...in (index based)
for(let index in fruits){
    console.log("Index:", index, "Value:", fruits[index]);
}


// 👉 for...of (value based)
for(let value of fruits){
    console.log("Fruit value:", value);
}


// ================= 9. MAP =================

// map() → transform each element → returns NEW array
fruits.map((fruit, index) => {
    console.log(fruit, index);
});


// ================= 10. SQUARE NUMBERS =================

// Using loop
for(let i = 0; i < numbers.length; i++){
    console.log("Square:", numbers[i] ** 2);
}

// Using map
numbers.map(n => console.log("Square using map:", n ** 2));


// ================= 11. INDEXOF =================

// Find index of element
let index = fruits.indexOf("DragonFruit");

console.log(index);

// Remove using index
fruits.splice(index, 1);

console.log(fruits);


// ================= 12. FILTER =================

// filter() → returns MULTIPLE elements based on condition
let result = fruits.filter(fruit => fruit.endsWith("ple"));

console.log(result);
// Example: ["Apple"]


// ================= 13. FIND =================

// find() → returns FIRST matching element
let found = fruits.find(fruit => fruit.startsWith("A"));

console.log(found);


// ================= 14. SORT =================

// sort() → sorts array alphabetically
console.log(fruits.sort());


// ================= 15. INCLUDES =================

// includes() → check existence (true/false)
console.log(fruits.includes("Apple"));


// ================= 16. SUM USING LOOP =================

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];  
}

console.log("Sum:", sum);


// ================= 17. REDUCE (IMPORTANT) =================

// reduce() → converts array into single value

let total = numbers.reduce((accumulator, currentValue) => {

    console.log("Accumulator:", accumulator);
    console.log("Current Value:", currentValue);

    return accumulator + currentValue;

}, 100);  
// 100 = initial value

console.log("Total:", total);

/*
LOGIC:
Step1: 100 + 1 = 101
Step2: 101 + 2 = 103
Step3: 103 + 3 = 106
Step4: 106 + 4 = 110
Step5: 110 + 5 = 115
*/


// ================= 18. SOME =================

// some() → returns true if ANY element satisfies condition
let greater = numbers.some(num => num > 3);

console.log(greater);  
// true (because 4,5 > 3)


// ================= 19. EVERY =================

// every() → returns true ONLY if ALL elements satisfy condition
let allGreater = numbers.every(num => num > 3);

console.log(allGreater);  
// false (because 1,2,3 are not > 3)


// ================= 20. CONCAT =================

// concat() → merge arrays
let arr1 = [2,3,4];
let arr2 = [5,6,7];

let merged = arr1.concat(arr2, [10,11]);

console.log(merged);


/*
=====================================================
📌 FINAL QUICK REVISION NOTES
=====================================================

✔ push() → add end  
✔ pop() → remove end  
✔ shift() → remove start  
✔ unshift() → add start  

✔ slice() → copy array (no change)
✔ splice() → modify array  

✔ map() → transform  
✔ filter() → multiple results  
✔ find() → single result  

✔ reduce() → single value (IMPORTANT)

✔ some() → at least one true  
✔ every() → all true  

✔ indexOf() → find index  
✔ includes() → check existence  

✔ concat() → merge arrays  

=====================================================
*/