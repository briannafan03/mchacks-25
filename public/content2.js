// content.js
let sendButtonClicked = false;

// Fetch the initial counter value from the background script
chrome.runtime.sendMessage({ action: 'getCounter' }, (response) => {
    if (response && response.count !== undefined) {
        console.log('Initial response:', response);
        popUpSearchCountElement.textContent = response.count;
    }
});

// Function to increment the counter
function incrementCounter() {
    console.log('Counter incremented.');
    chrome.runtime.sendMessage(
        { action: 'incrementCounter' },
        (response) => {
        if (chrome.runtime.lastError) {
            console.error('Error sending increment count message:', chrome.runtime.lastError);
        } else if (popUpSearchCountElement) {
            //TODO: replace the following line so it calls the lines in popup.js instead, and alter popup.js so it has the same functionality as the next line
            popUpSearchCountElement.textContent = response.count;
            console.log('Increment count message sent successfully', response);
        } else {
            console.error('Error: popUpSearchCountElement not found.');
        }
    });
}

// Function to attach a listener to the send button
function attachSendButtonListener() {
    const sendButton = document.querySelector('button[data-testid="send-button"]');
    console.log("Send button: ", sendButton);
    if (sendButton) {
        sendButton.addEventListener('click', () => {
            console.log("Send button clicked.");
            if (!sendButtonClicked) { // Ensure the button click is fresh and not a repeated detection
                sendButtonClicked = true;
                incrementCounter();
                setTimeout(() => sendButtonClicked = false, 1000); // Reset after a delay to allow for repeated valid clicks
            }
        });
        console.log("Send button listener attached.");
    } else {
        console.warn("Send button not found.");
    }
}

// Setup an observer to ensure the listener is attached even if the button is dynamically added
const observer = new MutationObserver(mutations => {
    attachSendButtonListener(); // Ensure listener is attached to the send button
});

observer.observe(document.body, { childList: true, subtree: true });

// Clean up observer on page unload
window.addEventListener('unload', () => observer.disconnect());