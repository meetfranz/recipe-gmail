module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.querySelector('[role="navigation"] .bsU')) {
      count = parseInt(document.querySelector('[role="navigation"] .bsU').innerHTML, 10);
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
