
var numeroSecreto =Math.trunc(Math.random()*20)+1;
var inmtentos =7;
var logrado=0;

function adivina_el_numero(numero, vidas, logrado){
    
    while(true){
        vidas=vidas-1
        logrado+=1
        
        var usuario = prompt("Piensa un numero del 1 al 20. ¿Cual es?")
        if(usuario==0){
            break
        }
        else if(vidas== 0){
            alert("has perdido")
            //swal ("pequitas dice:","has perdido","succes")
            break
        }
        else if (usuario== numero){
            alert("has ganado al intento"+ logrado)
           // swal ("pequitas dice:","has ganado al intento"+ logrado,"succes")
        }
        else if ( usuario<numero){
            alert (" pequitas dice ","el numero es menor, vuelve a intertarlo")
            //swal ("pequitas dice:","el numero es menor, vuelve a intertarlo","succes")
        }
        else if(usuario> numero){
            alert(" pequitas dice ","El numero es mayor, vuelve a intentar.")
           // swal ("pequitas dice:","El numero es mayor, vuelve a intentar.","succes")
        }
    }
}
adivina_el_numero(numeroSecreto, inmtentos, logrado )
        