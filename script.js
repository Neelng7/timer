// Set the date to countdown to (YYYY-MM-DD format)
const countdownDate = new Date("2023-04-10");

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
  countdownTimer.innerText = "0 days";
}

// Add a click event listener to the reset button
resetButton.addEventListener("click", resetCountdown);
