// write a functio that finds the intersection of two arrays

function findIntersection(arr1, arr2) {
    let result = [];

    // Loop through arr1
    for (let i = 0; i < arr1.length; i++) {

        // Check each element in arr2
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                // Check duplicate in result
                let found = false;

                for (let k = 0; k < result.length; k++) {
                    if (result[k] === arr1[i]) {
                        found = true;
                        break;
                    }
                }

                // Add if not already present
                if (found === false) {
                    result[result.length] = arr1[i];
                }
            }
        }
    }

    return result;
}

// Example
let arr1 = [2, 3, 4, 7];
let arr2 = [3, 5, 7, 9, 10];

console.log(findIntersection(arr1, arr2)); 
// Output: [3, 7]