document.addEventListener("DOMContentLoaded", () => {
    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentURL = new URL(tabs[0].url).origin; // Extract the main URL (e.g., https://example.com)
      document.getElementById("siteInfo").textContent = `Showing saved texts for: ${currentURL}`;
  
      // Fetch saved data from chrome.storage.local
      chrome.storage.local.get("savedTexts", (data) => {
        const savedTexts = data.savedTexts || [];
        const displayDiv = document.getElementById("savedTexts");
  
        displayDiv.innerHTML = ""; // Clear previous content
  
        // Filter texts matching the current site's URL
        const siteTexts = savedTexts.filter((item) => item.url === currentURL);
  
        if (siteTexts.length === 0) {
          displayDiv.innerHTML = '<div class="no-data">No saved texts for this site.</div>';
        } else {
          siteTexts.forEach((item, index) => {
            const textElement = document.createElement("div");
            textElement.className = "text-item";
            textElement.innerHTML = `
              <strong>${index + 1}. ${item.text}</strong>
              <span>Saved from: ${item.url}</span>
            `;
            displayDiv.appendChild(textElement);
          });
        }
      });
    });
  });
  