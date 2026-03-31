// // create a function to merge two arrays without duplicates javascript arr1=[2,3,4,7] arr2=[3,5,7,9,10]. Without using inbuilt functions
// let arr1 = [2,3,4,7]
// let arr2 = [3,5,7,9,10]

let arr1 = [2,3,4,7];
let arr2 = [3,5,7,9,10];

function mergeArrays(arr1, arr2) {
    let arr3 = []; // Step 1: empty array to store result

    // Step 2: Add all elements of arr1
    for (let i = 0; i < arr1.length; i++) {
        arr3[arr3.length] = arr1[i];
    }

    // Step 3: Add elements from arr2 only if not in arr3
    for (let i = 0; i < arr2.length; i++) {
        let found = false; // assume not in arr3
        for (let j = 0; j < arr3.length; j++) {
            if (arr2[i] === arr3[j]) {
                found = true; // already in arr3
                break; // stop checking
            }
        }
        if (!found) {
            arr3[arr3.length] = arr2[i]; // add element
        }
    }

    return arr3; // Step 4: return the merged array
}

// Step 5: Call the function
let merged = mergeArrays(arr1, arr2);
console.log(merged); // Output: [2,3,4,7,5,9,10]






//2.// Create a function that rotates an array to the right by k steps. 





//3.Write a function that finds the intersection of two arrays. 

function intersection(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        let foundInArr2 = false;

        // Check if element exists in arr2
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                foundInArr2 = true;
                break;
            }
        }

        // Check if already in result (avoid duplicates)
        let alreadyAdded = false;
        for (let k = 0; k < result.length; k++) {
            if (arr1[i] === result[k]) {
                alreadyAdded = true;
                break;
            }
        }

        // Add only if present in arr2 AND not already added
        if (foundInArr2 && !alreadyAdded) {
            result[result.length] = arr1[i];
        }
    }

    return result;
}

// // Input
// let arr1 = [2,3,4,3,7];
// let arr2 = [3,5,3,7,9,10];

// Function call
let output = intersection(arr1, arr2);

console.log(output); // [3,7]