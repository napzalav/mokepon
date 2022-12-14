let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//En esta funcion llamamos a todos nuestros botones(mascotas, ataques) y a estos botones le asignamos sus escuchadores de eventos (addEventListener) para que cuando le demos 'click' llamaramos a otras funciones y ejecuten la funcion logica que tiene cada una de esas funciones
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//En esta funcion seleccionamos nuestra mascota, verificando si los inputs estan seleccionados, esto se verifica mediante el .checked es verdadero(true)
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    // let image = new Image(80);

    // if(inputHipodoge){
    //     image.src = 'assets/mokepons_mokepon_hipodoge_attack.webp';
    //     document.querySelector('#vidas-jugador').appendChild(image);
    // } else if(inputCapipepo){
    //     image.src = 'assets/mokepons_mokepon_capipepo_attack.webp';
    //     document.querySelector('#vidas-jugador').appendChild(image);
    // } else if(inputRatigueya){
    //     image.src = 'assets/mokepons_mokepon_ratigueya_attack.webp';
    //     document.querySelector('#vidas-jugador').appendChild(image);
    // } else if(inputLangostelvis){
    //     image.src = 'assets/langostelvis.png';
    //     document.querySelector('#vidas-jugador').appendChild(image);
    // } else if(inputTucapalma){
    //     image.src = 'assets/tucapalma.png';
    //     document.querySelector('#vidas-jugador').appendChild(image);
    // } else if(inputPydos){
    //     image.src = 'assets/pydos.png';
    //     document.querySelector('#vidas-jugador').appendChild(image);
    // } else {
    //     alert('Selecciona una mascota');
    //     location.reload();
    // }

    // ========================================================================
    
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()

}

//En esta funcion nuestro enemigo selecciona su mascota de forma aleatoria
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6);

    // let image = new Image(80);

    // if(mascotaAleatoria === 1){
    //     image.src = 'assets/mokepons_mokepon_hipodoge_attack.webp';
    //     document.querySelector('#vidas-enemigo').appendChild(image);
    // } else if (mascotaAleatoria === 2){
    //     image.src = 'assets/mokepons_mokepon_capipepo_attack.webp';
    //     document.querySelector('#vidas-enemigo').appendChild(image);
    // } else if (mascotaAleatoria === 3){
    //     image.src = 'assets/mokepons_mokepon_ratigueya_attack.webp';
    //     document.querySelector('#vidas-enemigo').appendChild(image);
    // } else if(mascotaAleatoria === 4){
    //     image.src = 'assets/langostelvis.png';
    //     document.querySelector('#vidas-enemigo').appendChild(image);
    // } else if(mascotaAleatoria === 5){
    //     image.src = 'assets/tucapalma.png';
    //     document.querySelector('#vidas-enemigo').appendChild(image);
    // } else if(mascotaAleatoria === 6){
    //     image.src = 'assets/pydos.png';
    //     document.querySelector('#vidas-enemigo').appendChild(image);
    // }


    //====================================================================

    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria === 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria === 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatoria === 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatoria === 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatoria === 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

//Funciones para el ataque de nuestro JUGADOR
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

//Funcion para el ataque aleatorio de nuestro ENEMIGO
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()

} //Fin ataque Enemigo 

//Esta funcion contiene la logica para saber si empatamos, ganamos o perdimos.
//Dependiendo de si Empatamos, Ganamos o Perdemos, conectamos mediante un llamado con la funcion de crearMensaje para que nos diga cual fue el resultado de la batalla
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

//Utilizamos la funcion de crearMensajeFinal para traer como argumento el 'resultadoFinal' y lo cambiamos por un nuevo mensaje
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! GANASTE! ???? ????")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, perdiste! ???? ")
    }
}

//Creamos un parrafo, un elemento de tipo 'p'
//al parrafo le insertamos un texto mediante .innerHTML que dice el ataque de nuestro jugador y nuestro enemigo
//luego metemos este parrafo dentro de la seccion de 'mensajes'
//nuestra variable 'resultado' es en realidad un parametro que estamos recibiendo de la funcion 'combate' por medio de argumentos

//en la edicion del css alteramos la estructura html y creamos nuevos ID, cambi?? el id 'mensajes' dentro del getElementById por el id 'resultado'
//creamos dos variables mas que son la de ataquesDelJugador y ataquesDelEnemigo
//creamos 3 nuevos parrafos 'notificacion', 'nuevoAtaqueDelJugador' y 'nuevoAtaqueDelEnemigo' y agregamos los parrafos dentro de los elementos creados
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }

//Creamos un parrafo, un elemento de tipo 'p'
//este parrafo contiene el mensaje final de la batalla, nos dir?? si perdimos o ganamos
//lo que hacemos con el innerHTML de este nuevo parrafo es que le decimos que sea igual al resultadoFinal. entonces lo que hacemos es utilizar la funcion de crearMensajeFinal y si ganamos o perdemos entonces enviamos como argumento el resultado final(cambiandolo por un texto de felicitaciones o condolencias respectivamente) a la funcion 'revisarVidas'
//Cada vez que llamemos a la funcion 'crearMensajeFinal' significa que o perdimos o ganamos, por eso una vez que el contador de vida del jugador o del enemigo llegan a cero (0) los botones de ataque (botonFuego, botonAgua, botonTierra) se deshabilitaran poniendo su propiedad,el atributo 'disabled' en el valor true

//cambiamos el id 'mensajes' dentro del getElementById por 'resultado'
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

