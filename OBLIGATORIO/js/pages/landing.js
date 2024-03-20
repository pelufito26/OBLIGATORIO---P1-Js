function initLandingSection() {
  changeVisibility("landingSection", "block");
  const btnMenu = document.querySelector("#btnMenu");
  btnMenu.addEventListener("click", onClick);

  document
    .querySelector("#btnInvitado")
    .addEventListener("click", onClickInvitado);

  document.querySelector("#btnIngreso").addEventListener("click", initLogin);
}

function onClick() {
  destroyLandingSection();
  initRegisterSection();
}

function onClickInvitado() {
  destroyLandingSection();
  initInvitadoBuscador();
}

function destroyLandingSection() {
  changeVisibility("landingSection", "none");
}

function initLogin() {
  initLoginSection();
  destroyLandingSection();
}
