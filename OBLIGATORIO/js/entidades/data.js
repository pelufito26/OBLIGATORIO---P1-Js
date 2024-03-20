censistas = [
  new Censista(1, "Facundo", "fpelufo", "FacuP10"),
  new Censista(2, "Gonzalo", "gposada", "GonzaP10"),
  new Censista(3, "Bruno", "bgasso", "BrunoG10"),
];

censos = [
  // [MARTIN COMMENT] Acá todos los strings estaban sin comillas por lo tanto daba error desde el primer momento
  // Por otro lado nunca habían cargado el censo.js en el HTML por lo tanto no encontraba la calse Censo
  new Censo(
    "Joaquin",
    "Posada",
    34,
    12345678,
    "Montevideo",
    "Dependiente",
    1,
    false
  ), // id censita 1 para que asignarlo a Facundo

  new Censo(
    "Gonzalo",
    "Pelufo",
    29,
    46593132,
    "Montevideo",
    "Independiente",
    2,
    false
  ),
  new Censo(
    "Valentina",
    "García",
    31,
    12345876,
    "Colonia",
    "Dependiente",
    3,
    true
  ),

  new Censo(
    "Agustina",
    "Pelufo",
    21,
    10101010,
    "Maldonado",
    "Estudiante",
    1,
    true
  ),
];
