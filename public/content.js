// content.js

// Send a message to the background script to increment the counter when on the target page

let sendButtonClicked = false;

function incrementCounter(){
  chrome.runtime.sendMessage({ type: "incrementCounter" });
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
