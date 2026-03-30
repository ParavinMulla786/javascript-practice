// create a function to merge two  arrays without duclicates
// one= [2,4,9]
// two = [3,5,7,10]
// array three = [2,3,4,5,7,9,10]



function mergeArrays(arr1, arr2) {
    let result = [];

    // Step 1: Add all elements of arr1
    for (let i = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i];
    }

    // Step 2: Add elements of arr2 (only if not present)
    for (let i = 0; i < arr2.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (found === false) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}

// Example
let one = [2, 4, 9];
let two = [3, 5, 7, 10];

console.log(mergeArrays(one, two));
