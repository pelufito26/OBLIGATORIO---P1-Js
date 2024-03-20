let censoSelected = null;

function initInvitadoBuscador() {
  changeVisibility("invitadoSection", "block");

  document
    .querySelector("#btnBackToLanding")
    .addEventListener("click", backToLanding);
  document.querySelector("#searchCI").addEventListener("click", btnSearchCi);
}

function backToLanding() {
  destroyInvitadoSection();
  initLandingSection();
}

function destroyInvitadoSection() {
  changeVisibility("invitadoSection", "none");
}

function btnSearchCi() {
  let inputCi = document.querySelector("#inputCI").value;
  busquedaCI(inputCi);
}

function busquedaCI(text) {
  let pbusca = document.querySelector("#pBuscaCi");
  let pbuscaError = document.querySelector("#ciNotFound");

  censos.forEach(function (censo) {
    if (censo.ci == text) {
      censoSelected = censo;
    }
  });

  if (censoSelected) {
    if (censoSelected.validado) {
      pbusca.innerHTML = "Cédula censada.";
    } else {
      destroyInvitadoSection();
      onNuevoCenso();
    }
  } else {
    pbuscaError.innerHTML = "Cédula NO encontrada.";
    destroyInvitadoSection();
    onNuevoCenso();
  }
}
