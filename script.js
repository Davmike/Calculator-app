"use strict";

const rangeInput = document.getElementById("rangeInput");
const numberResult = document.querySelector(".number-result");
const number = document.querySelector(".number");
const body = document.body;

rangeInput.addEventListener("input", (event) => {
  if (event.target.value === "2") {
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
  } else {
    body.classList.add("theme-3");
  }
});
