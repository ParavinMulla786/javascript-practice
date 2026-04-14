let color = document.getElementsByClassName("color");

let badge = document.querySelector(".badge-car");
let btn = document.querySelector(".btn-cart");
let carImage = document.getElementById("carImage");

// manually mapped images (NO attribute used)
let images = [
  "./Assets/red.png",
  "./Assets/black.png",
  "./Assets/gray.png"
];

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function () {

    if (i === 0) {
      badge.style.background = "red";
      btn.style.background = "red";
      carImage.src = images[0];
    }

    if (i === 1) {
      badge.style.background = "black";
      btn.style.background = "black";
      carImage.src = images[1];
    }

    if (i === 2) {
      badge.style.background = "gray";
      btn.style.background = "gray";
      carImage.src = images[2];
    }

  });
}