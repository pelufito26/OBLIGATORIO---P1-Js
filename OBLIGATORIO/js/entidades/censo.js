class Censo {
  constructor(nombre, apellido, edad, cedula, depto, ocupacion, censistaID, validado) {
    this.name = nombre;
    this.lastname = apellido;
    this.edad = edad;
    this.ci = cedula;
    this.depto = depto;
    this.ocupacion = ocupacion;
    this.censistaID = censistaID; //id que coincida con un censista
    this.validado = validado;
  }

  changeTodoStatus(index, status) {
    this.validado = status;
  }
  
  
}
