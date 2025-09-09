const uiElement = {
  hamburgerMenu: document.querySelector("#menu-btn"),
  modal: document.querySelector(".modal-wrapper"),
  closeBtn: document.querySelector("#close-btn"),
  navigaiton: document.querySelector(".left-aside-middle"),
  createBtn: document.querySelector(".create"),
  leftAside: document.querySelector(".left-aside"),
  form: document.querySelector("#mail-form"),
  mailsArea: document.querySelector(".mails-area"),
  searchForm: document.querySelector(".search-form"),
};

const renderMails = (outlet, data) => {
  outlet.innerHTML = data.map((mail) => {
    ` <div class="mail" data-id="${mail.id}">
            <div class="left">
              <input type="checkbox" />
              <i class="bi bi-star ${mail.stared ? "-fill " : ""}"></i>
              <span>${mail.reciever}</span>
            </div>

            <div class="center">
              <p class="mail-title">{mail.title}</p>
              <p class="mail-description></p>
            </div>

            <div class="right">
              <p class="mail-date">{mail.date}</p>
              <div class="delete">
                <i class="bi bi-trash-fill"></i>
              </div>
            </div>
          </div>`;
  });
};

export { uiElement, renderMails };
