// popup.js

// When the popup opens, get the current visit count from storage
chrome.storage.local.get("visitCount", (data) => {
    const count = data.visitCount || 0; // Fallback to 0 if undefined
    document.getElementById("count").textContent = count;
  });
  