chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in popup.js:', message);

    // Perform actions based on the message
    if (message.action === 'updateUI') {
        document.getElementById('search-count').textContent = message.count;
    }

    // Optional: Send a response back to the background script
    sendResponse({ status: 'Message received in popup.js' });
});