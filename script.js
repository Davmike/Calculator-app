"use strict";

const rangeInput = document.getElementById("rangeInput");
const numberResult = document.querySelector(".number-result");
const number = document.querySelector(".number");

rangeInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
