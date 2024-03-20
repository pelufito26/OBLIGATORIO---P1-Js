//// dejamos para ir probando, desp tenemos que ordenar las paginas en el script en HTML

let tieneNumero = false;
let cumpleMin = false;
let cumpleMayus = false;

function initRegisterSection() {
  changeVisibility("registerSection", "block");

  document
    .querySelector("#btnSendRegistro")
    .addEventListener("click", onRegister);
}

function conNumero(text) {
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(parseInt(text[i]))) {
      tieneNumero = true;
    }
  }
  return tieneNumero;
}

function conMin(text) {
  // evalula si tiene MINUS y nos tira true si es asi
  for (let i = 0; i < text.length; i++) {
    let caracter = text.charCodeAt(i);
    if (caracter >= 97 && caracter <= 122) {
      cumpleMin = true;
    }
  }
  return cumpleMin;
}

function conMayus(text) {
  // evalula si tiene MAYUS y nos tira true si es asi
  for (let i = 0; i < text.length; i++) {
    let caracter = text.charCodeAt(i);
    if (caracter >= 65 && caracter <= 90) {
      cumpleMayus = true;
    }
  }
  return cumpleMayus;
}

function onRegister() {
  const inputPass = document.querySelector("#inputPassword").value;
  const inputUserName = document.querySelector("#inputUserName").value;
  const pValidationRegister = document.querySelector("#pValidationRegister");

  console.log(conMin(inputPass));
  console.log(conMayus(inputPass));

  pValidationRegister.innerHTML = "";
  if (inputPass == "") {
    pValidationRegister.innerHTML =
      '<p class="error">Debe llenar el campo contraseña.</p>';
  } else if (inputPass.length < 5) {
    pValidationRegister.innerHTML =
      '<p class="error">La contraseña debe contener mínimo 5 caracteres.</p>';
  } else if (conNumero(inputPass) == false) {
    pValidationRegister.innerHTML =
      '<p class="error">La contraseña debe contener un número.</p>';
  } else if (conMin(inputPass) == false) {
    pValidationRegister.innerHTML =
      '<p class="error">La contraseña debe contener al menos una minúscula.</p>';
  } else if (conMayus(inputPass) == false) {
    pValidationRegister.innerHTML =
      '<p class="error">La contraseña debe contener al menos una mayúscula</p>';
  } else {
    if (userFind(inputUserName)) {
      alert("Ya existe el usuario.");
    } else {
      agregarUsuarios(); // agregar a traves de push al array
      console.log(censistas);
      initLoginSection();
      destroyRegisterSection();
    }
  }

  /*if (inputPass.length >= 5 && conNumero(inputPass) == true) */
}

function userFind(text) {
  let existeUsuario = false;
  censistas.forEach(function (censista) {
    if (text == censista.usuario) {
      existeUsuario = true;
    }
  });
  return existeUsuario;
}

function destroyRegisterSection() {
  changeVisibility("registerSection", "none");
}

// ESTA FUNCION ES PARA INTENTAR REGISTRAR EN EL ARRAY NUEVOS USUARIOS,
// PARA DESP AL MOMENTO DEL LOGIN, COMPARE ESTE NUEVO USUARIO

function agregarUsuarios() {
  const inputName = document.querySelector("#inputName").value;
  const inputUserName = document.querySelector("#inputUserName").value;
  const inputPass = document.querySelector("#inputPassword").value;

  // Crea un nuevo usuario con los valores de los campos de entrada
  const nuevoCensista = new Censista(
    getId(),
    inputName,
    inputUserName,
    inputPass
  );
  censistas.push(nuevoCensista);
}

/*function searchUsername(userName){
  let repeat = false;
  censistas.forEach(function(censista){
    if(userName == censista.){

    }
  })
}*/
function getId() {
  let max = 0;
  censistas.forEach(function (censista) {
    if (censista.id > max) {
      max = censista.id;
    }
  });
  return max + 1;
}
