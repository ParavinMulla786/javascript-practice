//complete the function sayLouder ysuch that it makes the text in uppercase

function sayLouder(text) {
  return text.toUpperCase();
}

console.log(sayLouder("It Works"));
console.log(sayLouder("how are you?"));

// function all greater than 0 numbers 
function getPositiveNumbers(numbers) {
  return numbers.filter(num => num > 0);
}

console.log(getPositiveNumbers([10, -5, 2,  -4, 6]));

//array object filter
function getPassingTests(results) {

  return results.filter(obj => obj.grade >= 10);
}

const data = [
  { id: 1, grade: 10 },
  { id: 2, grade: 4 },
  { id: 3, grade: 18 }
];

console.log(getPassingTests(data));