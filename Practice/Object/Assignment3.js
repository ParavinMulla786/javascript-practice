// Assignment 3: Loop Through an Object
// Create an object called product with properties like name, price, and stock. 
// Write a program to log each property and its value.


let products ={
    name:"laptop",
    price:65000,
    stock:25,
}
for(key in products ){
    console.log(key, products[key])
}
