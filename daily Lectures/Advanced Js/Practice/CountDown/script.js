
function startcountdown(){
    let time = document.getElementById("timeinput").value;
    let display = document.getElementById("display");
}


time = Date.now()
let countdown = setInterval(function() {
    if (time<=0){
        clearInterval(countdown);
        display.innerHtml = "Time's Up";
    } else {
        display.innerHtml = time + " second Remaining";
        time--;

    }
}, 1000);

