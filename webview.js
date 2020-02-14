import path from 'path';

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0

    if (document.getElementsByClassName("J-Ke n0").length > 0) {
      if (
        document
          .getElementsByClassName("J-Ke n0")[0]
          .getAttribute("aria-label") != null
      ) {
        count = parseInt(
          document
            .getElementsByClassName("J-Ke n0")[0]
            .parentElement.parentElement.querySelector(".bsU").innerText,
          10,
        )
      }
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10)
    if (isNaN(count)) {
      count = 0
    }

    // set Franz badge
    Franz.setBadge(count)
  }

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages)
}
