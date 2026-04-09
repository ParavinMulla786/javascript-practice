let btnElement = document.querySelector('#generateOTP');
let resultElement = document.querySelector('#result');

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');

let n1 = 0; // global variable

function genOTP() {
    n1 = Math.floor((Math.random() * 9000) + 1000);
    console.log(n1);
    alert("Your OTP is " + n1);
}

btnElement.addEventListener('click', genOTP);

function toNextInput(ipnext){
    console.log(ipnext)
    document.getElementById(ipnext).focus();
    
}
let userOTP = '';

function showResult() {
    userOTP = one.value + two.value + three.value + four.value;

    if (userOTP == n1) {
        alert("OTP Correct");
    } else {
        alert("OTP Incorrect");
    }

    one.value = '';
    two.value = '';
    three.value = '';
    four.value = '';

    
    // one.focus()
}

resultElement.addEventListener("click", showResult);