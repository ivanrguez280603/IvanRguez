//definir las variables 
var nombre, edad, curso;
//definir las clases
class Persona {
//se crea un constructor 
  constructor(_nombre, _edad) {
    nombre = _nombre;
    edad = _edad;
  }

  saludar() {
    return 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
  }
}
//creamos la clase que y llamar otra clase para relacionarlos y hacer una subclase 
class Estudiante extends Persona {
  constructor(_nombre, _edad, _curso) {
    super(_nombre, _edad);
    curso = _curso;
  }

  estudiar() {
    return nombre + ' está estudiando el curso de ' + curso;
  }
}
//para ingresar los datos en la pagina
function mostrarMenu() {
  var opcion = prompt(
    "Seleccione una opción:\n" +
      "1. Ingresar información del estuante.\n" +
      "2. Saludo de la persona.\n" +
      "3. Estudios de la persona.\n" +
      "Ingrese el número de la opción:"
  );

  switch (opcion) {
    case "1":
      ingresarInformacion();
      break;
    case "2":
      mostrarSaludo();
      break;
    case "3":
      mostrarEstudios();
      break;
    default:
      alert("Opción inválida. Seleccione otra opción.");
      mostrarMenu();
      break;
  }
}

let estudiante;

  function ingresarInformacion() {
    var nombre = prompt("Ingrese el nombre de la persona:");
    var edad = parseInt(prompt("Ingrese la edad de la persona en años:"));
    var curso = parseInt(prompt("Ingrese la asignatura que esta cursando la persona:"));
  
    estudiante = new Estudiante(nombre, edad,curso);
    alert("Información del estudiante almacenada exitosamente.");
  
    mostrarMenu();
  }

  
  function mostrarSaludo() {
    if (estudiante) {
      var informacion = estudiante.saludar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado información de una persona. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }

  function mostrarEstudios() {
    if (estudiante) {
      var informacion = estudiante.estudiar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado información de una persona. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }

  mostrarMenu();
  
  