function initCensoSection() {
  changeVisibility("censoSection", "block");

  document
    .querySelector("#btnBackToMenu1")
    .addEventListener("click", backToMenu1);
  document.querySelector("#censoNuevo").addEventListener("click", addNewCenso);

  if (censoSelected) {
    document.querySelector("#nameCenso").value = censoSelected.name;
    document.querySelector("#lastNameCenso").value = censoSelected.lastname;
    document.querySelector("#ageCenso").value = censoSelected.edad;
    document.querySelector("#cedulaCenso").value = censoSelected.ci;
    document.querySelectorAll(".option-dpto").forEach(function (option) {
      if (option.value == censoSelected.depto) {
        option.setAttribute("selected", "selected");
      }
    });

    document.querySelectorAll(".option-ocup").forEach(function (option) {
      if (option.value == censoSelected.ocupacion) {
        option.setAttribute("selected", "selected");
      }
    });
    document.querySelector("#censoNuevo").innerHTML = "Editar Censo";
  } else {
    document.querySelector("#nameCenso").value = "";
    document.querySelector("#lastNameCenso").value = "";
    document.querySelector("#ageCenso").value = "";
    document.querySelector("#cedulaCenso").value = "";

    document.querySelector("#censoNuevo").innerHTML = "Ingresar Censo";
  }
}

function addNewCenso() {
  const nameCenso = document.querySelector("#nameCenso").value;
  const lastNameCenso = document.querySelector("#lastNameCenso").value;
  const ageCenso = document.querySelector("#ageCenso").value;
  const cedulaCenso = document.querySelector("#cedulaCenso").value;
  const selectDepto = document.querySelector("#selectDepto").value;
  const selectOcupa = document.querySelector("#selectOcupa").value;
  // los p para cada coso
  const pNombre = document.querySelector("#alertNombre");
  const pApellido = document.querySelector("#alertApellido");
  const pEdad = document.querySelector("#alertEdad");
  const pCedula = document.querySelector("#alertCI");
  const pDepto = document.querySelector("#alertDepto");
  const pOcupa = document.querySelector("#alertOcupacion");
  const pExito = document.querySelector("#pExito");
  // fin de p

  if (nameCenso == "") {
    pNombre.innerHTML = "Completar el campo nombre.";
  }

  if (lastNameCenso == "") {
    pApellido.innerHTML = "Completar el campo apellido.";
  }
  if (ageCenso < 0 || ageCenso >= 130) {
    pEdad.innerHTML = "Edad fuera de rango.";
  }
  if (selectDepto == "") {
    pDepto.innerHTML = "Seleccionar departamento.";
  }
  if (selectOcupa == "") {
    pOcupa.innerHTML = "Seleccionar ocupación.";
  }

  if (validarCI(cedulaCenso) == false) {
    pCedula.innerHTML = "Ingresar una cedula valida";
  }

  if (
    nameCenso != "" &&
    lastNameCenso != "" &&
    selectDepto != "" &&
    selectOcupa != "" &&
    ageCenso > 0 &&
    ageCenso <= 130 &&
    validarCI(cedulaCenso) == true
  ) {
    if (censoSelected) {
      censoSelected.name = nameCenso;
      censoSelected.lastNameCenso = lastNameCenso;
      censoSelected.edad = ageCenso;
      censoSelected.ci = cedulaCenso;
      censoSelected.depto = selectDepto;
      censoSelected.ocupacion = selectOcupa;
      initInvitadoBuscador();
      destroyCensoSection();
      censoSelected = null;
    } else {
      pExito.innerHTML = "Censo ingresado con exito";
      censos.push(
        new Censo(
          nameCenso,
          lastNameCenso,
          ageCenso,
          cedulaCenso,
          selectDepto,
          selectOcupa,
          userLogged.id, // [MARTIN COMMENT] acá faltaba asignar el id del censista que esta creando el censo
          false
        )
      );
    }

    document.querySelector("#nameCenso").value = "";
    document.querySelector("#lastNameCenso").value = "";
    document.querySelector("#ageCenso").value = "";
    document.querySelector("#cedulaCenso").value = "";
    document.querySelector("#selectDepto").value = "";
    document.querySelector("#selectOcupa").value = "";
  }
}

function backToMenu1() {
  destroyCensoSection();
  if (userLogged) {
    //distinto a null porque me loguie soy un censista
    initMenuSection();
  } else {
    initInvitadoBuscador(); //para que nos lleve al buscador de CI luego de ir para atras
  }
}

function destroyCensoSection() {
  changeVisibility("censoSection", "none");
}

//// INICIO VALIDACION CI // RECONTRA REDUCIBLE

function validarCI(ci) {
  let newci;

  if (ci.toString().length == 7) {
    newci = "0" + ci;
  } else {
    newci = ci.toString();
  }

  let suma = 0;
  let sumador1 = parseInt(newci[0]) * 2;
  let sumador2 = parseInt(newci[1]) * 9;
  let sumador3 = parseInt(newci[2]) * 8;
  let sumador4 = parseInt(newci[3]) * 7;
  let sumador5 = parseInt(newci[4]) * 6;
  let sumador6 = parseInt(newci[5]) * 3;
  let sumador7 = parseInt(newci[6]) * 4;

  suma =
    sumador1 + sumador2 + sumador3 + sumador4 + sumador5 + sumador6 + sumador7;
  let digitoVerificadorCalculado = suma % 10; // para averiguar el resto de la division de la suma sobre 10, si es 148/10, el residuo es 8

  let digitoVerificador;

  if (digitoVerificadorCalculado === 0) {
    digitoVerificador = 0;
  } else {
    digitoVerificador = 10 - digitoVerificadorCalculado; // 10 - 8 (el residuo de hacer 148 % 10) = 2
  }

  let ultimoDigito = parseInt(newci[newci.length - 1]);

  if (digitoVerificador === ultimoDigito) {
    return true;
  } else {
    return false;
  }
}
