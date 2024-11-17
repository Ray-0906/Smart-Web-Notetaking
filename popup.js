document.getElementById("fetchButton").addEventListener("click", () => {
    chrome.storage.local.get("savedTexts", (data) => {
      const savedTexts = data.savedTexts || [];
      const displayDiv = document.getElementById("savedTexts");
  
      displayDiv.innerHTML = ""; // Clear previous content
  
      if (savedTexts.length === 0) {
        displayDiv.textContent = "No saved texts found.";
      } else {
        savedTexts.forEach((item, index) => {
          const textElement = document.createElement("p");
          textElement.textContent = `${index + 1}. "${item.text}" from ${item.url}`;
          displayDiv.appendChild(textElement);
        });
      }
    });
  });
  