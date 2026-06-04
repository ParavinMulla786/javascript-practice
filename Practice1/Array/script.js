let arr = [56, 79, 56, 46];

function largest(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(largest(arr)); // 79


// Find smallest number in an array.

function smallest(arr){
    let min  = arr[0];

for (let k = 0; k < arr.length; k++) {
        if (arr[k] <min){
            min = arr[k];
        }
    }
 return min;

}
console.log(smallest(arr));



// Reverse an array without using .reverse().


let arr1 = [1,2,3,4,5];

function reverserArray(arr1){
    let reversed  = [];

    for(let j = arr1.length - 1;  j>= 0; j--){
        reversed.push(arr1[j]);
    }
   return reversed;
}





console.log(reverserArray(arr1));

// Remove duplicate values from array.


let arr2 =[ 1, 2 , 2, 5, 7, 5, 2, 1, 9 , 0 , 5,45, 86 ];


function removeDuplicates(arr2){
    let unique = [];


    for(let l = 0; l < arr2.length; l++){
        if(!unique.includes(arr2[l])){
            unique.push(arr2[l]);
        }
    }

    return unique;

}

console.log(removeDuplicates(arr2));




let arr3 = [10, 20, 30, 40,50];


function sumofArray(arr3){
    let sum = 0;

    for(let m = 0; m < arr3.length; m++){
        sum+= arr3[m];
    }
    return sum;
}

console.log(sumofArray(arr3));


// Create an array of numbers and print the first element.
let  arr4 = [10,20,20,30,40]
console.log(arr4[0]);
console.log(arr4.length);
arr4.push(5);
console.log(arr4);
arr4.pop();
console.log(arr4);


for(i=0; i< arr4.length;i++){
    console.log(arr4[i]);
}

// Print all even numbers from an array.
console.log("************************")
let arr5 = [1,2,3,4,5,6];
for (let j = 0; j < arr5.length; j++) {
    if (arr5[j] % 2 === 0) {
        console.log(arr5[j]);
    }
}

//odd number

let arr6 = [10, 20, 30, 40];

for (let k = 0; k < arr6.length; k++) {
    if (arr6[k] % 2 !== 0) {
        console.log(arr6[k]);
    }
}

//