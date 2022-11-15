let container = document.querySelector("#main");
let button = document.querySelector("button");
let display = document.querySelector(".display");
let squares = document.querySelectorAll(".square");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
console.log("squares");

for (let square of squares) {
  square.addEventListener("click", function (event) {
    display.innerText += event.target.innerText;
  });
}

clear.addEventListener("click", function (event) {
  display.innerText = "";
});

equal.addEventListener("click", function (event) {
  display.innerText = eval(display.innerText);
});
