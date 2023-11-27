/**
Esta función solicita al usuario que ingrese un texto mediante un prompt y lo agrega a un mapa de palabras.
@param {Map} mapaPalabras - El mapa de palabras donde se almacenarán las palabras y su frecuencia.
@returns {string} - El texto ingresado por el usuario.
*/


function agregarTexto(mapaPalabras) {
    const texto = prompt('Ingresa un texto: ')
    alert('Texto agregado correctamente.')

    return texto
}

// Función para recibir el mapa de palabras y el texto ingresado
function procesarTexto(mapaPalabras, texto) {
    if (texto === '') {
        alert('No has ingresado ningún texto. Por favor, agrega un texto antes de procesar.');
        return;
    }

    const palabras = texto.toLowerCase().split(' ');

    palabras.forEach(palabra => {
        // Eliminar puntos, comas y acentos de la palabra
        const palabraLimpia = palabra.replace(/[.,]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (mapaPalabras.has(palabraLimpia)) {
            mapaPalabras.set(palabraLimpia, mapaPalabras.get(palabraLimpia) + 1);
        } else {
            mapaPalabras.set(palabraLimpia, 1);
        }
    });

    let resultado = 'Palabras y su frecuencia:\n';
    mapaPalabras.forEach((frecuencia, palabra) => {
        resultado += `${palabra}: ${frecuencia}\n`;
    });

    alert(resultado);
}

//Funcion para mostrar el menu y procesar las opciones
function mostrarMenu() {
    const mapaPalabras = new Map()
    let texto = ''

    while (true) {
        const opcion = prompt( `Menu:
    1.Agregar texto
    2.Procesar texto
    3.Salir`)

    switch (opcion) {
        case '1' :
            texto = agregarTexto(mapaPalabras)
            break
        case '2' :
            texto = procesarTexto(mapaPalabras, texto)
            break
        case '3' :
            alert('Saliendo del programa...')
            window.close()
            return
        default:
            alert('Opcion invalida.Por favor, elige una opcion valida.')
            break
        }
    }
}

mostrarMenu()