 var lenguajes = ['Python', 'java', 'c#','JavaScrip','CSS','SQL','PHP','HTML']
                                         //var lo ocupo para global, que abra en cualquier programa 
let estudiantes;                         //let es solo para el dato que quiero dentro de 

function imprimeForbasico(_lenguajes){
    let salida= ''                                
    for( i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }
    alert(salida)
 }

function imprimeFor(_lenguajes){
    let salida= ''
    for( i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
 }

function imprimeForechbasico(_lenguajes){
    salida=''
    _lenguajes.forEach(element => 
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(_lenguajes){
     salida=''
    _lenguajes.forEach(function (_valor, _indice){
        salida += _valor + ' se encuentra en el indice ' + _indice + '\n'
        })

    alert(salida)
}

function imprimeTamaño(_lenguajes){
   salida = 'El tamaño de lenguaje es:'+lenguajes.length
  alert(salida)
}

function imprimeRecupera(_posicion){
   salida=lenguajes.length
  if(_posicion<lenguajes.length){
    salida=" El elemento en la posicion"+_posicion+""
  }
  alert(salida)
}

function ingresaElemento(){
  let salida = ''
  let elemento = prompt("Ingresa un nuevo lenguaje de programacion")
  lenguajes.push(elemento)
  salida = 'El lenguaje de programacion' + elemento + 'a sido arreglado el arreglo'

  alert(salida)
}

function eliminaElemento(){
  let salida = ''
  let elemento = prompt("Cual es el lenguaje de programación que deseas eliminar")
  var indice = lenguajes.indexOf(elemento)
  if(indice !== -1){
    lenguajes.splice(indice,1)
    salida = 'Lenguaje eliminado:' + elemento 
  }else salida = 'el lenguaje no se ha encontrado'
  alert(salida)
}


function mostrarMenu(){
     opcion = prompt('Seleccione una opción:' + 
                         '\n1. Imprimir lenguajes con "for" básico.'+
                         '\n2. Imprimir lenguajes con "for" y su índice.' + 
                         '\n3. Imprimir lenguajes con "forEach" básico.'+
                         '\n4. Imprimir lenguajes con "forEach" y su índice.' +
                         '\n5. Tamaño del arreglo'+
                         '\n6. Recupera el elemento del arreglo'+
                         '\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      break;
    case '2':
      imprimeFor(lenguajes);
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      break;
    case '4':
      imprimeForech(lenguajes);
      break;
    case '5':
      imprimeTamaño(lenguajes);
      break;
    case '6':
      imprimeRecupera(posicion);
      break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
      
  }
}

mostrarMenu()