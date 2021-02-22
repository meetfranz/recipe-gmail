import { remote } from 'electron';
import path from 'path';

const webContents = remote.getCurrentWebContents();
const { session } = webContents;

module.exports = (Franz, config) => {

  window.addEventListener("message", (event) => {
    // little bit hacky things here.
    // my solution is just to remove the hangout iframe
    if (event.origin === 'https://hangouts.google.com') {
      const elm = document.getElementById("gtn-roster-iframe-id");
      if (elm) {
        elm.remove();
      }
      return
    }
  }, false);

  try {
    (async () => {
      if (window.location.href.match(/https:\/\/www.google.com\/intl\/(.*)\/gmail\/about\//)) {
        session.flushStorageData();
        session.clearStorageData();

        window.location.href = config.url;
      }
    })();
  } catch (err) {
    console.err(err);
  }

  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label').replace(/[^0-9.]/g, ''), 10);
      }
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
