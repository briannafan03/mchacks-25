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

    // Keep track of whether the listener is already attached
    let isListenerAttached = false;

    // Function to set up the button listener
    const setupButtonListener = (button) => {
        if (!isListenerAttached) {
            button.addEventListener('click', () => {
                console.log("Clicked on submit!");
                chrome.runtime.sendMessage(
                    { action: 'incrementCounter' },
                    (response) => {
                        if (response && response.count !== undefined) {
                            isListenerAttached = true; // Mark listener as attached
                            popUpSearchCountElement.textContent = response.count;
                        }
                    }
                );
            });
            console.log("Click listener attached to the submit button.");
        }
    };

    // Check for the button's existence dynamically
    const observer = new MutationObserver((mutations) => {
        console.log("Querying for submit button");
        const submitButton = document.querySelector('button[data-testid="send-button"]');

        if (submitButton) {
            console.log("Found submit button:", submitButton);
            isListenerAttached = false;
            setupButtonListener(submitButton); // Add the click listener
        }
        }
    );

    // Start observing changes in the body
    observer.observe(document.body, { childList: true, subtree: true });

    console.log("Observer is running continuously.");
});