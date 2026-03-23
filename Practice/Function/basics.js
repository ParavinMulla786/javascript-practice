function findLargest(a, b, c) {

    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    // Equality cases
    if (a === b && b === c) {
        return "All numbers are equal";
    }
    else if (a === max && b === max) {
        return "a and b are equal and largest: " + max;
    }
    else if (b === max && c === max) {
        return "b and c are equal and largest: " + max;
    }
    else if (a === max && c === max) {
        return "a and c are equal and largest: " + max;
    }
    else {
        return "Largest number is: " + max;
    }
}

// Calling function
console.log(findLargest(30, 10, 30));