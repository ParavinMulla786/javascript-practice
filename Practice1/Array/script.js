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

for (let i = 0; i < arr.length; i++) {
        if (arr[i] <min){
            min = arr[i];
        }
    }
 return min;

}
console.log(smallest(arr));