let a = 10,
 b = 25,
  c = 15;

let largest;

if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log("Largest number is:", largest);



let age = 18;
if(age < 13){
    console.log("child")
}
else if( age <= 13 &&  age >= 19){
    console.log("Teenager")
}
else{
console.log("Adult")
}


let num1 = 10;
let num2 = 5;
let operator = "+"; // try: +, -, *, /

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero";
    }
    break;

  default:
    result = "Invalid operator";
}

console.log("Result:", result);