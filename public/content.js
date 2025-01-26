// Send a message to the background script to increment the counter when on the target page
function incrementCounter(){
  chrome.runtime.sendMessage({ type: "incrementCounter" });
}

// Attach listener to the submit button
function attachSendButtonListener() {
  const submitButton = document.querySelector('button[data-testid="send-button"]');
  if (submitButton) {
      submitButton.addEventListener('click', () => {
              incrementCounter();
          
      });
  }
}

// Create observer to see when submit button shows when user types 
const observer = new MutationObserver(mutations => {
  attachSendButtonListener(); // Attach listener to the submit button
});

observer.observe(document.body, { childList: true, subtree: true });



