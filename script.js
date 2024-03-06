// DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  prevButton = document.getElementById("prev"),
  nextButton = document.getElementById("next");

let currentStep = 1;

// Function to update the current step and update the DOM
const updateSteps = (e) => {
  // Update current step based on the button clicked
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // Loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  // Update progress bar width based on current step
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // Enable/disable previous and next buttons based on current step
  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === circles.length;
};

// Check initial state of buttons and circles
document.addEventListener("DOMContentLoaded", () => {
  // Disable previous button if on the first step
  prevButton.disabled = true;
});

// Add click event listeners to previous and next buttons
prevButton.addEventListener("click", updateSteps);
nextButton.addEventListener("click", updateSteps);
