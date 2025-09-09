import { uiElement, renderMails } from "./ui.js";
const mails = JSON.parse(localStorage.getItem("mails")) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderMails(uiElement.mailsArea, mails);
});

uiElement.createBtn.addEventListener("click", () => {
  uiElement.modal.classList.add("open");
});
uiElement.closeBtn.addEventListener("click", () => {
  uiElement.modal.classList.remove("open");
});
uiElement.hamburgerMenu.addEventListener("click", () => {
  uiElement.leftAside.classList.toggle("hide");
});
