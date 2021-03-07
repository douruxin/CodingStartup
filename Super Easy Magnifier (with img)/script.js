document.querySelector("#image").addEventListener("mouseenter", enterHandler);
document.querySelector("#image").addEventListener("mousemove", moveHandler);
document.querySelector("#image").addEventListener("mouseleave", leaveHandler);

document.querySelector("#image").addEventListener("touchstart", enterHandler);
document.querySelector("#image").addEventListener("touchmove", moveHandler);
document.querySelector("#image").addEventListener("touchend", leaveHandler);

function enterHandler(e) {
  e.currentTarget.setAttribute("zoomed", 1); // from target to currentTarget
  moveHandler(e);
}

function moveHandler(e) {
  let rect = e.currentTarget.getBoundingClientRect(); // from target to currentTarget
  let offsetX, offsetY;

  if (["touchstart", "touchmove", "touchend"].includes(e.type)) {
    offsetX = e.touches[0] && e.touches[0].pageX - rect.left;
    offsetY = e.touches[0] && e.touches[0].pageY - rect.top;

    e.preventDefault();
  } else {
    offsetX = e.pageX - rect.left; // Update
    offsetY = e.pageY - rect.top; // Update
  }

  let x = offsetX / rect.width;
  let y = offsetY / rect.height;

  e.currentTarget.style.setProperty("--x", x); // from target to currentTarget
  e.currentTarget.style.setProperty("--y", y); // from target to currentTarget
}

function leaveHandler(e) {
  e.currentTarget.removeAttribute("zoomed"); // from target to currentTarget
  moveHandler(e);
}
