module.exports = Franz => class Gmail extends Franz {
  modifyRequestHeaders() {
    return [{
      headers: {
        origin: 'RefererHost',
      },
      requestFilters: {
        urls: [
          '*://people-pa.clients6.google.com/*', '*://clients6.google.com/drive/*', '*://clients6.google.com/gmail/*', '*://signaler-pa.clients6.google.com/*', '*://addons-pa.clients6.google.com/*',
          '*://chat-pa.clients6.google.com/*', '*://clients6.google.com/voice/*', '*://hangouts.google.com/*',
          '*://peoplestack-pa.clients6.google.com/*', '*://calendar-pa.clients6.google.com/*', '*://play.google.com/*'],
      },
    }];
  }

  eventDidLoad(serviceBrowserView, event, url) {
    this.userAgentHack(serviceBrowserView.webContents, url);
  }

  eventWillNavigate(serviceBrowserView, event, url) {
    this.userAgentHack(serviceBrowserView.webContents, url);
  }

  userAgentHack(webContents, url) {
    if (url.startsWith('https://accounts.google.com')) {
      webContents.setUserAgent(this.mockUserAgent(true));
    } else {
      webContents.setUserAgent(this.mockUserAgent(false));
    }
  }
};
