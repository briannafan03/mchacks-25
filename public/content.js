// Content file is able to take information from chrome page and send to APIs
// Content file is able to take information from chrome page and send to APIs
document.addEventListener('DOMContentLoaded', () => {
    const popUpSearchCountElement = document.getElementById('search-count');
    console.log("DOM loaded");

    // Fetch the initial counter value from the background script
    chrome.runtime.sendMessage({ action: 'getCounter' }, (response) => {
        if (response && response.count !== undefined) {
            popUpSearchCountElement.textContent = response.count;
        }
    });

    // Check for the button's existence dynamically
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const submitButton = document.querySelector('button[data-testid="send-button"]');

                if (submitButton) {
                    console.log("Found submit button:", submitButton);
                    setupButtonListener(submitButton); // Add the click listener
                    observer.disconnect(); // Stop observing once the button is found
                    break; // Exit the loop as we don't need to process further mutations
                }
            }
        }
    });

    // Function to set up the button listener
    const setupButtonListener = (button) => {
        button.onclick = function() {
            console.log("Clicked on submit!");
            chrome.runtime.sendMessage(
                { action: 'incrementCounter' },
                (response) => {
                    if (response && response.count !== undefined) {
                        popUpSearchCountElement.textContent = response.count;
                    }
                }
            );
        };
    };

    // Start observing changes in the body
    observer.observe(document.body, { childList: true, subtree: true });
});


