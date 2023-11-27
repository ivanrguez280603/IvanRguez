function factorialFor (numero) {
      let resultado = 1
      if (numero ==1 || numero==0){
          return resultado
      } else { 
          for ( i= 2; i <=numero; i ++){
          resultado = resultado * i
          } 
      }
      return  resultado
}

function factorialRecursion (numero) {
    if (numero == 0  || numero == 1){
         return 1
    } 
    else {
         return numero * factorialRecursion (numero - 1)
    }
}

function mostrarMenu(){
      var option = prompt(
                        "selecciona una opción \n" +
                        "1. Calcular factorial con FOR \n" +
                        "2. Calcular factorial con Recursión"
                        )

      switch (option) {
            case "1":
                     var numero = prompt("Introduce un numero")
                     var res = factorialFor(numero)
                     alert("El factorial es: " + res) 
                     mostrarMenu()
                  break;
            case "2":
                     var numero = prompt("Introduce un numero")
                     var res = factorialRecursion(numero)
                     alert("El factorial es: " + res) 
                     mostrarMenu()
                  break;

            default:
                  alert("Opcion invalida")
                  break;
      }     
}
mostrarMenu()