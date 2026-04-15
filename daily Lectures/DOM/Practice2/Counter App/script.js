let count = 0;
const counter = document.getElementById('counter');
const incrementbutton = document.getElementById('Increment');
const decrementbutton= document.getElementById('Decrement');
const resetbutton= document.getElementById('reset');

incrementbutton.addEventListener('click',() => {
    count++;
    counter.textContent= count;

});


decrementbutton.addEventListener('click',() => {
    count--;
    counter.textContent= count;

});


resetbutton.addEventListener('click',  () =>{
    count = 0;
    counter.textContent = count;

});




