module.exports = (Franz) => {
  const getMessages = function getMessages() {
    
    // Get count of unread messages; must manually navigate to the "E-Mail" tab.
    let count = 0;
    // getElementsByClassName returns an empty array; don't know why: that class 
    // name is clearly present several times in the DOM. Long line split for debugging.
    let els = document.getElementsByClassName('badge');
    count = els.length;
    let el = els[1];
    let val = el.getAttribute('value');
    if (document.getElementsByClassName('badge')[1].getAttribute('value') != null) {
      count = parseInt(document.getElementsByClassName('badge')[1].innerHTML.replace(/[^0-9.]/g, ''), 10);
    }

    // Just in case we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
