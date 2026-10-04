const stage = document.getElementById("stage");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function setOpen(isOpen) {
  stage.classList.toggle("is-open", isOpen);
  letter.setAttribute("aria-hidden", String(!isOpen));
  openBtn.disabled = isOpen;
  closeBtn.disabled = !isOpen;
}

function toggle() {
  setOpen(!stage.classList.contains("is-open"));
}

// Click the envelope to open or close it
envelope.addEventListener("click", toggle);

// Buttons: hand keyboard focus to the other button, since the pressed one becomes disabled
openBtn.addEventListener("click", () => {
  setOpen(true);
  closeBtn.focus();
});
closeBtn.addEventListener("click", () => {
  setOpen(false);
  openBtn.focus();
});