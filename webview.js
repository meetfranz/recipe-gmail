import path from 'path';

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: (string, sink) => string
  });
}

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    const elements = document.querySelectorAll('.bsU');
    elements.forEach((el) => {
      count += parseInt(el.textContent, 10);
    });

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt((document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') || '').replace(/[^0-9.]/g, ''), 10);
      }
    }

    const chatCount = parseInt(((document.querySelector('[data-tooltip="Chat"]') || '').ariaLabel || '').replace(/[^\d]/g, ''), 10) || 0;


    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    count += chatCount;

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
