let censoFound = [];
let censoSelectedReasign = []


function initListadoCensos() {
  changeVisibility("listSection", "block");
  document
    .querySelector("#btnBackToMenu2")
    .addEventListener("click", backToMenu2);

  buildListaCensos();

  const btnReasign = document.querySelectorAll(".btn-reasing-todo");
  btnReasign.forEach(function (btn) {
    btn.addEventListener("click", toListaCensista);
  });

  
  const checks = document.querySelectorAll(".check-todo");
  checks.forEach(function (check) {
  check.addEventListener("change", onCheckChange);
});

}

function toListaCensista() {
  const index = Number(this.getAttribute("data-index"));

  censoFound.forEach( function (formulario, index) {
    censoSelectedReasign.push(formulario[index])
  })

  destroyListSection();
  initListaCensitasReasignar();
}

function backToMenu2() {
  destroyListSection();
  initMenuSection();
}

function destroyListSection() {
  changeVisibility("listSection", "none");
}

function buildListaCensos() {
  //// CAMBIAR NOMBRE DE FUNCION
  const tBody = document.querySelector("#listCenso");
  censoFound = [];

  censos.forEach(function (censo) {
    if (censo.censistaID == userLogged.id) {
      censoFound.push(censo);
    }
  });

  tBody.innerHTML = "";

  censoFound.forEach(function (unCenso, index) {
    tBody.innerHTML += `
    <tr> 
      <td>${unCenso.name} ${unCenso.lastname}</td>
      <td>${unCenso.edad}</td>
      <td>${unCenso.ci}</td>
      <td>${unCenso.depto}</td>
      <td>${unCenso.ocupacion}</td>
      <td>
        <input data-index="${index}" type="checkbox" class="check-todo"/>
      </td>
      <td>
        <button data-index="${index}" class="btn btn-danger btn-reasing-todo">Reasignar</button>
      </td>
      <td>
        <button data-index="${index}" class="btn btn-danger btn-delete-todo">Editar</button>
      </td>
    </tr>`;
  });
}




function onCheckChange() {
  const index = this.getAttribute("data-index");
  censoFound[index].changeTodoStatus(index, this.checked)
  
  
}

