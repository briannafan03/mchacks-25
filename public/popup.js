// popup.js

// Get the current visit count from Chrome's storage and update the counter
chrome.storage.local.get("visitCount", (data) => {
  const count = data.visitCount || 0; // Fallback to 0 if undefined
  document.getElementById("count").textContent = count;

  // Update the progress bar based on visitCount
  updateProgressBar(count);
});


const updateWaterBottle = (progressOne, progressBarFillOne, progressLabelOne) => {
  return new Promise((resolve) => {
    chrome.storage.local.get("waterBottleCount", (data) => {
      let waterBottleCount = data.waterBottleCount || 0;
      console.log("waterBottleCount: ", waterBottleCount);
      if (progressOne === 100) {
        waterBottleCount++;
        chrome.storage.local.set({ waterBottleCount: waterBottleCount });
        document.getElementById("waterBottleCount").textContent = `x ${waterBottleCount}`;
        progressBarFillOne.style.width = '0%';
        progressLabelOne.textContent = '0%';
        resolve(); // Resolve after updating the count
      } else {
        document.getElementById("waterBottleCount").textContent = `x ${waterBottleCount}`;
        resolve(); // Resolve immediately if no update is needed
      }
    });
  });
};

const updateLightBulb = (progressTwo) => {
  return new Promise((resolve) => {
    chrome.storage.local.get("lightBulbCount", (data) => {
      let lightBulbCount = data.lightBulbCount || 0;

      if (progressTwo >= 100) {
        lightBulbCount++;
        chrome.storage.local.set({ lightBulbCount }, () => {
          document.getElementById("lightBulbCount").textContent = `x ${lightBulbCount}`;
          resolve();
        });
      } else {
        document.getElementById("lightBulbCount").textContent = `x ${lightBulbCount}`;
        resolve();
      }
    });
  });
};

const updateKettle = (progressThree) => {
  return new Promise((resolve) => {
    chrome.storage.local.get("kettleCount", (data) => {
      let kettleCount = data.kettleCount || 0;

      if (progressThree >= 100) {
        kettleCount++;
        chrome.storage.local.set({ kettleCount }, () => {
          document.getElementById("kettleCount").textContent = `x ${kettleCount}`;
          resolve();
        });
      } else {
        document.getElementById("kettleCount").textContent = `x ${kettleCount}`;
        resolve();
      }
    });
  });
};

// Function to update the progress bar and its label
const updateProgressBar = async (count) => {
  const progressBarFillOne = document.getElementById("progress-bar-fill-one");
  const progressLabelOne = document.getElementById("progress-label-one");

  const progressOne = Math.min(count * 50, 100);
  progressBarFillOne.style.width = `${progressOne}%`;
  progressLabelOne.textContent = `${progressOne}%`;

  if (progressOne > 40 && progressOne < 70) {
    progressBarFillOne.style.backgroundColor = "#ffa500";
  } else if (progressOne > 70) {
    progressBarFillOne.style.backgroundColor = "#ff0000";
  }

  try {
    await updateWaterBottle(progressOne, progressBarFillOne, progressLabelOne);
  } catch (error) {
    console.error("Error during updateWaterBottle:", error);
  }

  const progressBarFillTwo = document.getElementById("progress-bar-fill-two");
  const progressLabelTwo = document.getElementById("progress-label-two");

  const progressTwo = Math.min(count * 4.17, 100);
  progressBarFillTwo.style.width = `${progressTwo}%`;
  progressLabelTwo.textContent = `${progressTwo}%`;

  if (progressTwo > 40 && progressTwo < 70) {
    progressBarFillTwo.style.backgroundColor = "#ffa500";
  } else if (progressTwo > 70) {
    progressBarFillTwo.style.backgroundColor = "#ff0000";
  }

  try {
    await updateLightBulb(progressTwo);
  } catch (error) {
    console.error("Error during updateLightBulb:", error);
  }

  const progressBarFillThree = document.getElementById("progress-bar-fill-three");
  const progressLabelThree = document.getElementById("progress-label-three");

  const progressThree = Math.min(count * 6.25, 100);
  progressBarFillThree.style.width = `${progressThree}%`;
  progressLabelThree.textContent = `${progressThree}%`;

  if (progressThree > 40 && progressThree < 70) {
    progressBarFillThree.style.backgroundColor = "#ffa500";
  } else if (progressThree > 70) {
    progressBarFillThree.style.backgroundColor = "#ff0000";
  }

  try {
    await updateKettle(progressThree);
  } catch (error) {
    console.error("Error during updateKettle:", error);
  }

  console.log("Progress bar update complete.");
};
