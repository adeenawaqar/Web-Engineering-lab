/* global document */

const greeting = document.getElementById("greeting");

function greet(name) {
  return "Hi, " + name + "! 🌷";
}

greeting.textContent = greet("Adeena");

const form = document.getElementById("feedback-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("form-message").textContent =
    "Thank you! Your feedback has been received. 💗";

  form.reset();
});


