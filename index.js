"use strict";

module.exports = Franz => class Gmail extends Franz {
  modifyRequestHeaders() {
    return [{
      headers: {
        origin: 'RefererHost'
      },
      requestFilters: {
        urls: ['*://taskassist-pa.clients6.google.com/*', '*://people-pa.clients6.google.com/*', '*://peoplestackwebexperiments-pa.clients6.google.com/*', '*://clients6.google.com/drive/*', '*://clients6.google.com/gmail/*', '*://signaler-pa.clients6.google.com/*', '*://addons-pa.clients6.google.com/*', '*://chat-pa.clients6.google.com/*', '*://clients6.google.com/voice/*', '*://hangouts.google.com/*', '*://peoplestack-pa.clients6.google.com/*', '*://calendar-pa.clients6.google.com/*', '*://play.google.com/*']
      }
    }];
  }

};
