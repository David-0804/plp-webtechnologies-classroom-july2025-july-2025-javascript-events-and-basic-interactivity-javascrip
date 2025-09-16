// Theme Toggle: Switch between light and dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature: Increment counter on button click
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterDisplay").textContent = count;
});

// FAQ Toggle: Show/hide answer on question click
document.querySelector(".faq-question").addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
});

// Form Validation: Custom checks for name, email, and password
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let feedback = "";

  // Name validation
  if (name === "") {
    feedback += "Name is required. ";
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback += "Invalid email format. ";
  }

  // Password validation
  if (password.length < 6) {
    feedback += "Password must be at least 6 characters.";
  }

  // Display feedback
  const formFeedback = document.getElementById("formFeedback");
  formFeedback.textContent = feedback || "Form submitted successfully!";
  formFeedback.style.color = feedback ? "red" : "green";
});
