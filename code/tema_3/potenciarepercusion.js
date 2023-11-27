function potenciaFor(base, exponente) {
  let resultado = 1;
  for (let i = 1; i <= exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

function potenciaRecursiva(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  return base * potenciaRecursiva(base, exponente - 1);
}

function mostrarMenu() {
  var opcion = prompt(
    "Selecciona una opción:\n" +
    "1 Calcular potencia con bucle for.\n" +
    "2 Calcular potencia con recursión: \n" +
    "3 Salir.\n" +
    "Ingrese el número de la opción"
  );

  switch (opcion) {
    case "1":
      var base = prompt("Introduce la base:");
      var exponente = prompt("Introduce el exponente:");
      var res = potenciaFor(base, exponente);
      alert("El resultado de la potencia es: " + res);
      break;
    case "2":
      var base = prompt("Introduce la base:");
      var exponente = prompt("Introduce el exponente:");
      var res = potenciaRecursiva(base, exponente);
      alert("El resultado de la potencia es: " + res);
      break;
    case "3":
      return;
    default:
      alert("Opcion invalida. Seleccione otra opción");
      mostrarMenu();
      break;
  }
}

mostrarMenu()