// memanggil class color flipper
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const change = document.querySelector(".button");
const colorChange = document.querySelector(".color-change");
const wrapper = document.querySelector(".color-container");

// memanggil class counter
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");

const numOne = document.querySelector(".no1");
const numTwo = document.querySelector(".no2");
const numResult = document.querySelector(".result");

change.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColor()];
  }

  colorChange.textContent = hexColor;
  colorChange.style.color = "white";
  wrapper.style.backgroundColor = hexColor;
});

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}

let countOne = 0;
let countTwo = 0;
let countResult = 0;

//todo ========== eksekusi counter ===========

let count1 = 0;
let count2 = 20;

btnIncrease.addEventListener("click", () => {
  // count1++;
  sumResult(count1++);
  if (count1 > 21) {
    count1 = 20;
  }
  numTwo.textContent = parseInt(count1);
  console.log(numTwo);
});
btnDecrease.addEventListener("click", () => {
  // count2--;
  sumResult(count2--);
  if (count2 < -1) {
    count2 = 0;
  }
  numOne.textContent = count2;
});

function sumResult() {
  let hasil = count1 + count2;
  numResult.innerHTML = hasil;
}

// sumResult(numOne, numTwo);
// console.log(sumResult());
// console.log(parseInt(numTwo));
// console.log(numOne);
// let numplus = numOne + numTwo;
// console.log(numplus.value);
// numResult.innerHTML = numplus;
