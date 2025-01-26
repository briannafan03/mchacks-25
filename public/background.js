// This is our API
let counter = 100; // Counter stored in the background script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'incrementCounter') {
        counter++; 
        sendResponse({ count: counter }); 
    }  else if (message.action === 'getCounter') {
        sendResponse({ count: counter });
    }
});
