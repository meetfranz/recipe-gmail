module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    //if (document.getElementsByClassName('badge')[0].getAttribute('value') != null) {
      count = 33; // parseInt(document.getElementsByClassName('badge')[0].innerHTML.replace(/[^0-9.]/g, ''), 10);
    //}

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
