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
  count1 += 1;
  if (count1 > 20) {
    count1 = 20;
    return;
  }
  sumResult(count1);
  numTwo.textContent = parseInt(count1);
  // console.log(`increase`, count1);
});
btnDecrease.addEventListener("click", () => {
  // count2--;
  count2 -= 1;
  if (count2 < 0) {
    count2 = 0;
    return;
  }
  sumResult(count2);
  numOne.textContent = count2;
  // console.log("decrease", count2);
});

btnReset.addEventListener("click", () => {
  countReset();
});

function sumResult() {
  countResult = count1 + count2;
  numResult.innerHTML = countResult;
  // console.log(countResult);
}

function countReset() {
  count1 = 0;
  count2 = 20;
  countResult = count1 + count2;
  numTwo.textContent = count1;
  numOne.textContent = count2;
  numResult.textContent = countResult;
}
sumResult();

// sumResult(numOne, numTwo);
// console.log(sumResult());
// console.log(parseInt(numTwo));
// console.log(numOne);
// let numplus = numOne + numTwo;
// console.log(numplus.value);
// numResult.innerHTML = numplus;
