
const slider = document.querySelector("#slider");
const slides = Array.from(slider.querySelectorAll("li"));


const prevButton  =document.getElementById('prev')

const nextButton = document.getElementById('next')

let currentSlide = 0;
slides[currentSlide].style.display = "block";
slides[currentSlide+1].style.display = "block";

prevButton.addEventListener("click", function() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
});

nextButton.addEventListener("click", function() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
});


document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("emailInput");
  const registerBtn = document.getElementById("registerBtn");

  registerBtn.addEventListener("click", function() {
    const email = emailInput.value;
   console.log(email)
  });
});
