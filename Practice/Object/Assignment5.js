// Assignment 5: Compare Objects
// Create two objects person1 and person2 with the same properties but different values.
//  Write a program to compare their name and age properties.


let person1 ={
    name:"Paravin",
    age:21
}
let person2 ={
    name:"P",
    age:21
}
if (person1.name === person2.name && person1.age === person2.age) {
    console.log("Both persons are same");
} else {
    console.log("Persons are different");
}