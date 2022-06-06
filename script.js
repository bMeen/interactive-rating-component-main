"use strict";

const ratingsSectionElement = document.getElementById("rating-section");
const submitSectionElement = document.getElementById("submit-section");
const ratingsElement = document.querySelectorAll(".rate-item");
const submitBtnElement = document.querySelector(".btn");
const rateElement = document.getElementById("rate");

let rateNumber;

for (let i = 0; i < ratingsElement.length; i++) {
  ratingsElement[i].addEventListener("click", function () {
    rateNumber = ratingsElement[i].textContent;

    clearActive();
    ratingsElement[i].classList.add("active");
  });
}

function clearActive() {
  for (let i = 0; i < ratingsElement.length; i++) {
    ratingsElement[i].classList.remove("active");
  }
}

submitBtnElement.addEventListener("click", function () {
  rateElement.textContent = rateNumber;
  if (!rate) {
    rateElement.textContent = 0;
  }

  ratingsSectionElement.classList.toggle("hidden");
  submitSectionElement.classList.toggle("hidden");
});
