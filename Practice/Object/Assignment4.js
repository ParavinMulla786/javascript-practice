// Assignment 4: Add Methods to an Object
// // Create an object called calculator with:
// // A method add that takes two numbers and returns their sum.
// // A method subtract that takes two numbers and returns their difference.
// // A method Multiply 
// // A method divide


let calculator =
{
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

console.log(calculator.add(5, 3));       
console.log(calculator.subtract(5, 3));  
console.log(calculator.multiply(5, 3)); 
console.log(calculator.divide(6, 3));   