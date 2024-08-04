let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto)
            asignarTextoElemento ('p','El numero secreto es menor');
        else {
            asignarTextoElemento ('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function mensajesInciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    mensajesInciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto ();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
    // Si el numero generado esta incluid en la lista

    
}

mensajesInciales();