let censistasDispo = [];
let IdNuevoCensista;

function initListaCensitasReasignar() {
  changeVisibility("listaCensitasReasignar", "block");

  buildCensistasTable();

  const btnAsign = document.querySelectorAll(".btn-asign");
  btnAsign.forEach(function (btn) {
    btn.addEventListener("click", asignarCenso);
  });
}

function buildCensistasTable() {
  const tBody2 = document.querySelector("#listaCensistas");
  tBody2.innerHTML = "";
  censistasDispo = [];

  censistas.forEach(function (censista) {
    if (userLogged.id != censista.id) {
      censistasDispo.push(censista);  
    }
  });

  tBody2.innerHTML = "";

  censistasDispo.forEach(function (unCensista, index) {
    tBody2.innerHTML += `
    <tr> 
      <td>${unCensista.name}</td>
      <td>${unCensista.id}</td>
      <td>
        <button data-index="${index}" class="btn btn-danger btn-asign">Asignar</button>
      </td>
    </tr>`;
  });
}

function asignarCenso() {
  const index = Number(this.getAttribute("data-index"));
  

  IdNuevoCensista = censistasDispo[index].id

  censoSelectedReasign.censistaID = IdNuevoCensista


  /*
  censoFound.censistaID = IdNuevoCensista
  

  initListadoCensos();
  destroyListaCensistaReasignar();
  buildCensistasTable();
  // al volver a darle al boton reasingar por 2da vez, el id del censsita nos devuelve undefined

  // edite el censistaID del censo que se selecciono y hacer que se vaya

  //actualizar censoFound.censistaID = unCesista.id
  //censoFound.censitaID = censistanuevoId;
  // mostrar un mensaje de extio

  // destruir esta seccion
  // llamar de nuevo a buildListaCensos() para que reconstruya la lista
}
[];

function destroyListaCensistaReasignar() {
  changeVisibility("listaCensitasReasignar", "none");
*/
}
