const products = [
  {
    id: 1,
    title: "Laptop",
    category: "Electronics",
    price: 55000,
    stock: 10,
    rating: 4.8,
    brand: "Dell",
    createdAt: "2026-05-01"
  },
  {
    id: 2,
    title: "Mobile",
    category: "Electronics",
    price: 25000,
    stock: 5,
    rating: 4.5,
    brand: "Samsung",
    createdAt: "2026-05-10"
  },
  {
    id: 3,
    title: "Shoes",
    category: "Fashion",
    price: 3000,
    stock: 0,
    rating: 4.1,
    brand: "Nike",
    createdAt: "2026-04-20"
  },
  {
    id: 4,
    title: "Headphones",
    category: "Electronics",
    price: 2000,
    stock: 15,
    rating: 3.9,
    brand: "Boat",
    createdAt: "2026-05-15"
  },
  {
    id: 5,
    title: "Book",
    category: "Education",
    price: 500,
    stock: 20,
    rating: 4.7,
    brand: "Penguin",
    createdAt: "2026-05-05"
  }
];

// price checker
let price = 799

if(products.price < 1000){
    console.log("Affortable");
}
    else{
        console.log("Expensive")
    }

// stock
let stock = 5
if(products.stock > 0){
    console.log("In Stock")
}
else{
    console.log("Out Of stock")
}


// login check
let email = "user@gmail.com";
let password = "123456";

if(email!== "" && password != ""){
console.log("Login Successful");
} else{
  console.log("Enter Requires Fields");
    }

// display product names
    for(let i= 0; i< products.length;i++){
        console.log(products[i].title);
    }


    //display products rating badage
    for (let j = 0; j < products.length; j++) {
  let product = products[j];

  if (product.rating >= 4.5) {
    console.log(product.title + " - Excellent");
  } else if (product.rating >= 4) {
    console.log(product.title + " - Good");
  } else {
    console.log(product.title + " - Average");
  }
}
    


let cartamount = 500;
if(cartamount > 999){
    console.log("Eligible for free shipping")
}
else{
    let remaining = 200 - cartamount;;
    console.log("add " + remaining + "for free shipping")
}



 for (let l = 0; l < products.length; l++) {
  let product = products[l];
  if(products[l].stock > 0){
    console.log("In Stock")
  }
  else{
    console.log("Out Of Stock")
  }
 }



    console.log( "Product Count : " + products.length)

  let count = 0;
    for (let n = 0; n < products.length; n++) {
  let product = products[n];
  if(products[n].stock > 0){
    count++;
  }
  
 }

 console.log("Available Products " + count);

 //calculate total stock
 let totalstock = 0;
 for(p = 0; p < products.length; p++){
    totalstock += products[p].stock;
 }
 console.log("totalstock" + totalstock)



 let highestProduct = products[0];

for (let q = 1; i < products.length; q++) {
  if (products[q].price > highestProduct.price) {
    highestProduct = products[q];
  }
}

console.log("Highest Priced Product:", highestProduct.title);
console.log("Price:", highestProduct.price);