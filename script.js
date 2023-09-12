"use strict";

const rangeInput = document.getElementById("rangeInput");
const numberResult = document.querySelector(".number-result");
const number = document.querySelectorAll(".number");
const body = document.body;


rangeInput.addEventListener("input", (event) => {
  if (event.target.value === "1") {
    body.classList.remove("theme-2");
    body.classList.remove("theme-3");
  }
  if (event.target.value === "2") {
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
  }
  if (event.target.value === "3") {
    body.classList.remove("theme-2");
    body.classList.add("theme-3");
  }
});

number.forEach((element) => {
  element.addEventListener("click", () => {
    const buttonText = element.textContent;
    numberResult.textContent = buttonText;
  });
});
