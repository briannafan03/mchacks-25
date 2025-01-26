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
  const progressBarFillOne = document.getElementById("progress-bar-fill-one");
  const progressLabelOne = document.getElementById("progress-label-one");

  // Calculate progress as percentage, water bottle every 7 prompts (assuming max progress is 100)
  const progressOne = Math.min((count * 7), 100); // Ensure it doesn't go above 100%

  // Update the width of the progress bar
  progressBarFillOne.style.width = `${progressOne}%`;

  // Update the progress label
  progressLabelOne.textContent = `${progressOne}%`;

  // Change the color of the progress bar based on progress value
  if (progressOne < 40) {
    progressBarFillOne.style.backgroundColor = "#ff0000"; // Red
  } else if (progressOne < 70) {
    progressBarFillOne.style.backgroundColor = "#ffa500"; // Orange
  } else {
    progressBarFillOne.style.backgroundColor = "#2ecc71"; // Green
  }


  const progressBarFillTwo = document.getElementById("progress-bar-fill-two");
  const progressLabelTwo = document.getElementById("progress-label-two");

  // Calculate progress as percentage, 3W light bulb for 24 hours (assuming max progress is 100)
  const progressTwo = Math.min((count * 4.17), 100); // Ensure it doesn't go above 100%

  // Update the width of the progress bar
  progressBarFillTwo.style.width = `${progressTwo}%`;

  // Update the progress label
  progressLabelTwo.textContent = `${progressTwo}%`;

  // Change the color of the progress bar based on progress value
  if (progressTwo < 40) {
    progressBarFillTwo.style.backgroundColor = "#ff0000"; // Red
  } else if (progressTwo < 70) {
    progressBarFillTwo.style.backgroundColor = "#ffa500"; // Orange
  } else {
    progressBarFillTwo.style.backgroundColor = "#2ecc71"; // Green
  }


  const progressBarFillThree = document.getElementById("progress-bar-fill-three");
  const progressLabelThree = document.getElementById("progress-label-three");

  // Calculate progress as percentage (assuming max progress is 100)
  const progressThree = Math.min((count * 6.25), 100); // Ensure it doesn't go above 100%

  // Update the width of the progress bar
  progressBarFillThree.style.width = `${progressThree}%`;

  // Update the progress label
  progressLabelThree.textContent = `${progressThree}%`;

  // Change the color of the progress bar based on progress value
  if (progressThree < 40) {
    progressBarFillThree.style.backgroundColor = "#ff0000"; // Red
  } else if (progress < 70) {
    progressBarFillThree.style.backgroundColor = "#ffa500"; // Orange
  } else {
    progressBarFillThree.style.backgroundColor = "#2ecc71"; // Green
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
