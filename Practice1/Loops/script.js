// Print numbers from 1 to 100.


for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Print even numbers from 1 to 50.
console.log("--------------------------------------");


for (let j = 1; j <= 50; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}


let n = 50;
let sum = 0;

for( let y = 1; y<= n; y++){
  sum+=y;
}

console.log("Sum is: " , sum);






// Reverse a number (e.g. 123 → 321).


let num = 123;
let reverse = 0;


while(num>0){
  let digit = num%10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num/10)

}
console.log("reversed: " , reverse);