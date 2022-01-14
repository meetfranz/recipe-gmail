"use strict";

const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label').replace(/[^\d]/g, ''), 10);
        if (isNaN(count)) {
          count = 0;
        }
      }
    }

    if (document.querySelector('[data-tooltip="Chat"]')) {
      if (document.querySelector('[data-tooltip="Chat"]').getAttribute('aria-label')){
      	let chatCount = parseInt(document.querySelector('[data-tooltip="Chat"]').getAttribute('aria-label').replace(/[^\d]/g, ''), 10);
      	if (isNaN(chatCount)) {
          chatCount = 0;
        }
        count += chatCount;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
