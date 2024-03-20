function initMenuSection() {
  changeVisibility("menuSection", "block");

  document
    .querySelector("#btnNuevoCenso")
    .addEventListener("click", onNuevoCenso);
  document
    .querySelector("#btnListadoCensos")
    .addEventListener("click", verListaCensos);
  document
    .querySelector("#btnEstadisticas")
    .addEventListener("click", verEstadisticas);
  document.querySelector("#btnCerrarSesion").addEventListener("click", logOut);
}
function onNuevoCenso() {
  destroyMenuSection();
  initCensoSection();
}

function verListaCensos() {
  destroyMenuSection();
  initListadoCensos();
}

function verEstadisticas() {
  destroyMenuSection();
  initEstadisticas();
}

function logOut() {
  destroyMenuSection();
  initLandingSection();
  userLogged = null; // para salir del logueo del censista
}

function destroyMenuSection() {
  changeVisibility("menuSection", "none");
}
