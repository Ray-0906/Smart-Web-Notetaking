chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.storage.local.get("savedTexts", (data) => {
      const savedTexts = data.savedTexts || [];
      savedTexts.push({ text: message.text, url: message.url });
      chrome.storage.local.set({ savedTexts });
    });
  });
  
  chrome.storage.local.get(null, (data) => {
    console.log(data); // Logs all stored data
  });