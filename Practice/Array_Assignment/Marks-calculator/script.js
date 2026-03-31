let marksArray = [];

// Add Marks
function addMarks() {
    let input = document.getElementById("marksInput").value;

    if (input === "") {
        alert("Please enter marks!");
        return;
    }

    let marks = Number(input);

    marksArray[marksArray.length] = marks; // add to array

    document.getElementById("marksList").innerText = 
        "Marks: " + marksArray.join(", ");

    document.getElementById("marksInput").value = "";
}

// Calculate
function calculate() {

    if (marksArray.length === 0) {
        alert("No marks available!");
        return;
    }

    let sum = 0;
    let max = marksArray[0];
    let min = marksArray[0];

    for (let i = 0; i < marksArray.length; i++) {
        sum += marksArray[i];

        if (marksArray[i] > max) {
            max = marksArray[i];
        }

        if (marksArray[i] < min) {
            min = marksArray[i];
        }
    }

    let avg = sum / marksArray.length;

    document.getElementById("average").innerText = "Average: " + avg.toFixed(2);
    document.getElementById("max").innerText = "Highest: " + max;
    document.getElementById("min").innerText = "Lowest: " + min;
}

// Reset
function resetAll() {
    marksArray = [];

    document.getElementById("marksList").innerText = "Marks: ";
    document.getElementById("average").innerText = "Average: ";
    document.getElementById("max").innerText = "Highest: ";
    document.getElementById("min").innerText = "Lowest: ";

    document.getElementById("marksInput").value = "";
}