// Assignment 2: Nested Object
// Create an object called book with:
// Properties: title, author, and details.
// details should be another object with properties: pages and genre.
// Access and log the pages and genre properties.


let book= {
    title :"Shyamchi Aai",
    author:"Sane Guruji",
    details:{
        pages:230,
        genre:"autobiographical novel"
    }
}
console.log(book.details.pages);
console.log(book.details.genre);
console.log(book["details"].pages);
console.log(book["details"].genre);
