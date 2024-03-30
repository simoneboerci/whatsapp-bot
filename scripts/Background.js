chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.includes("https://web.whatsapp.com") && changeInfo.status === 'complete') {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["contentScript.js"]
      });
    }
  });