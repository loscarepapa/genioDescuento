chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#91C93C'}, function() {

    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {schemes: ['https', 'http']},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
