// popup.js

// Get the current visit count from Chrome's storage and update the counter
chrome.storage.local.get("visitCount", (data) => {
    const count = data.visitCount || 0; // Fallback to 0 if undefined
    document.getElementById("count").textContent = count;

    // Update the progress bar based on visitCount
    updateProgressBar(count);
});

// Function to update the progress bar and its label
const updateProgressBar = (count) => {
  const progressBarFill = document.getElementById("progress-bar-fill");
  const progressLabel = document.getElementById("progress-label");

  // Calculate progress as percentage (assuming max progress is 100)
  const progress = Math.min(count, 100); // Ensure it doesn't go above 100%

  // Update the width of the progress bar
  progressBarFill.style.width = `${progress}%`;

  // Update the progress label
  progressLabel.textContent = `${progress}%`;

  // Change the color of the progress bar based on progress value
  if (progress < 40) {
    progressBarFill.style.backgroundColor = "#ff0000"; // Red
  } else if (progress < 70) {
    progressBarFill.style.backgroundColor = "#ffa500"; // Orange
  } else {
    progressBarFill.style.backgroundColor = "#2ecc71"; // Green
  }
};

// Optional: If you want to increment progress by clicking a button
document.getElementById("progress-button").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "incrementCounter" });

  // After incrementing the counter, update the progress bar again
  chrome.storage.local.get("visitCount", (data) => {
    const count = data.visitCount || 0;
    document.getElementById("count").textContent = count;
    updateProgressBar(count);
  });
});
