// background.js

// Initialize counter if not set yet
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ visitCount: 0 });
  });
  
  // Listen for the message to increment the counter
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "incrementCounter") {
      // Increment and save the visit count
      chrome.storage.local.get("visitCount", (data) => {
        let count = data.visitCount || 0;
        count++;
        chrome.storage.local.set({ visitCount: count });
      });
    }
  });
  