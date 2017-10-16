module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    // Each test is done in order of least accurate (but most robust)
    // -> most accurate (but least robust)
    // for reliability of at least getting a result

    // 3rd best test (basic, less accurate but OK if nothing else works)
    if (document.getElementsByClassName('zA zE').length > 0) {
      count = document.getElementsByClassName('zA zE').length;
    }

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      // 2nd best (more detailed check, much more accurate if available)
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label').replace(/[^0-9.]/g, ''), 10);
      }

      // 1st best
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('title') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('title').replace(/[^0-9.]/g, ''), 10);
      }
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
