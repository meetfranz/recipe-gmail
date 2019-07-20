module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    // this just gives a count of unread emails in primary tab(which is what we are interested in) and not other tabs 
    count = parseInt(document.getElementsByTagName("title")[0].innerHTML.replace(/[^0-9.]/g, ''), 10);

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
