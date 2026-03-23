// Create a const array
const fruits = ["Apple", "Banana", "Mango"];
console.log("Original array:", fruits);

// Add another fruit
fruits.push("Orange");
console.log("After adding fruit:", fruits);

// Try reassigning the array
fruits = ["Grapes", "Pineapple"]; 


// const means you cannot reassign the variable
// But you can modify the contents of an array or object

// So:

// fruits.push("Orange") → allowed
// fruits = [...] → not allowed
// Important Concept:

// const protects the reference, not the data inside