// Define la clase Queue
class Queue {
  constructor() {
    this.items = [];
  }

  // agrega elemento al final de la cola
  enqueue(element) {
    this.items.push(element);
  }

  // elimina y devuelve el elemento frontal de la cola.
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // devuelve elemento frontal de la cola sin eliminarlo.
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // comprobar si la cola está vacía.
  isEmpty() {
    return this.items.length === 0;
  }

  // devolver el número de elementos en la cola.
  size() {
    return this.items.length;
  }

  // elimina todos los elementos de la cola.
  clear() {
    this.items = [];
  }

  // muestra elementos de la cola.
  print() {
    if (this.isEmpty()) {
      alert("La cola esta vacia");
      return;
    }

    let elements = [];
    for (let i = this.items.length - 1; i >= 0; i--) {
      elements.push(this.items[i]);
    }

    let output = "null\n->\n";
    output += elements.join('\n -> \n');
    alert(output);
  }
}


function menu() {
  const cola = new Queue(); // se crea una nueva instancia de la clase Queue para representar la cola

  while (true) { // se inicia un bucle while que se ejecutará continuamente
    const opcion = prompt( // el usuario que seleccione una opción mediante un cuadro de diálogo
      "Selecciona una opción:\n" +
      "1. Insertar elemento en la cola\n" +
      "2. Obtener el elemento frontal de la cola\n" +
      "3. Eliminar el elemento frontal de la cola\n" +
      "4. Comprobar si la cola está vacía\n" +
      "5. Mostrar el número de elementos de la cola\n" +
      "6. Eliminar todos los elementos de la cola\n" +
      "7. Mostrar elementos de la cola\n" +
      "8. Salir"
    );

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a insertar en la cola:"); // Se solicita al usuario que ingrese un dato a insertar en la cola
        cola.enqueue(data);
        break;
      case "2":
        const resultFront = cola.front();
        alert("Resultado del elemento frontal: " + resultFront); // Se llama al método front de la cola para obtener el elemento frontal
        break;
      case "3":
        const resultDequeue = cola.dequeue();
        alert("Resultado de la eliminación: " + resultDequeue); // Se llama al método dequeue de la cola para eliminar el elemento frontal
        break;
      case "4":
        const resultIsEmpty = cola.isEmpty();// Se llama al método isEmpty de la cola para comprobar si está vacía
        alert("Resultado del estado de la cola: " + resultIsEmpty); // Se muestra en una alerta el resultado obtenido
        break;
      case "5":
        const resultSize = cola.size(); // Se llama al método size de la cola para obtener el número de elementos
        alert("Resultado del tamaño de la cola: " + resultSize);// Se muestra en una alerta el resultado obtenido
        break;
      case "6":
        cola.clear(); // Se llama al método clear de la cola para eliminar todos los elementos
        alert("Los datos se han borrado"); // Se muestra una alerta indicando que los datos se han borrado
        break;
      case "7":
        cola.print(); // Se llama al método print de la cola para mostrar los elementos
        break;
      case "8":
        return; // Se finaliza la ejecución de la función y se sale del bucle while
      default:
        alert("Opción inválida. Intenta nuevamente.");
        break;
    }
  }
}

// Ejecuta el menú
menu();