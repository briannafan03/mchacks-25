// content.js

// Send a message to the background script to increment the counter when on the target page
chrome.runtime.sendMessage({ type: "incrementCounter" });
