// Get the countdown date from local storage, if available
let countdownDate = localStorage.getItem("countdownDate");
if (countdownDate) {
  countdownDate = new Date(countdownDate);
} else {
  countdownDate = new Date();
}

// Get the countdown date input and set its value to the current countdown date
const countdownDateInput = document.getElementById("countdown-date-input");
countdownDateInput.valueAsDate = countdownDate;

// Get the countdown timer element from the HTML
const countdownTimer = document.getElementById("countdown-timer");

// Get the reset button element from the HTML
const resetButton = document.getElementById("reset-button");

// Update the timer every second
const timer = setInterval(updateCountdown, 1000);

// Function to update the countdown timer
function updateCountdown() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining until the countdown date
  const timeRemaining = countdownDate.getTime() - now;

  // Calculate the number of days remaining
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Update the timer element with the days remaining
  countdownTimer.innerText = `${daysRemaining} days`;

  // Check if the countdown has ended
  if (timeRemaining < 0) {
    clearInterval(timer);
    countdownTimer.innerText = "Countdown ended";
  }
}

// Function to reset the countdown timer
function resetCountdown() {
  clearInterval(timer);
  countdownTimer.innerText = "";
  countdownDateInput.valueAsDate = new Date();
  localStorage.removeItem("countdownDate");
}

// Add a change event listener to the countdown date input
countdownDateInput.addEventListener("change", function() {
  // Get the date value from the input
  const dateValue = countdownDateInput.value;
  if (!dateValue) {
    return;
  }

  // Set the countdown date to the selected date
  countdownDate = new Date(dateValue);

  // Save the countdown date to local storage
  localStorage.setItem("countdownDate", countdownDate.toISOString());

  // Update the countdown timer
  updateCountdown();
});

// Add a click event listener to the reset button
resetButton.addEventListener("click", resetCountdown);

// Initialize the countdown timer
updateCountdown();
