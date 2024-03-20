userLogged = null;

function initLoginSection() {
  changeVisibility("loginSection", "block");

  document
    .querySelector("#btnIniciarSesion")
    .addEventListener("click", onIniciarSesion);
}

function onIniciarSesion() {
  const userName = document.querySelector("#userName").value;
  const passWord = document.querySelector("#password").value;
  const pAlert = document.querySelector("#pAlert");

  if (userName == "") {
    pAlert.innerHTML += '<p class="error">Completar Nombre de usuario.</p>';
  } else if (passWord == "") {
    pAlert.innerHTML += '<p class="error">Completar Contraseña.</p>';
  } else {
    censistas.forEach(function (censista) {
      if (censista.usuario == userName && censista.contraseña == passWord) {
        userLogged = censista;
      }
    });
  }

  if (userLogged != null) {
    destroyLoginSection();
    initMenuSection();
  } else if (userLogged == null) {
    alert("Usuario inexistente");
    /*pAlert.innerHTML += '<p class="error">Usuario inexistente</p>';*/
  }
}

function destroyLoginSection() {
  changeVisibility("loginSection", "none");
}
