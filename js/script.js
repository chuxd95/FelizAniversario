// ======================================
// SISTEMA DE RECUERDOS v5.0
// Alejandro ❤️ Kimberly
// ======================================

const mensajes = [

    "Inicializando Sistema de Recuerdos v5.0...\n",

    "Buscando recuerdos...\n",

    "Primer video durmiendo juntos encontrado...\n",

    // "Primer abrazo encontrado...\n",

    // "Primer 'Te Amo' encontrado...\n",

    "Cargando fotografías...\n",

    "Cargando momentos inolvidables...\n",

    "Cargando 4 años y 11 meses de historia...\n",

    "Kimberly Manuyama encontrada ❤️\n",

    "Sistema iniciado correctamente.\n"

];

const terminal = document.getElementById("terminalText");
const barra = document.getElementById("progressBar");
const cursor = document.getElementById("cursor");
const porcentaje = document.getElementById("porcentaje");

const btnEntrar = document.getElementById("btnEntrar");

const mensajeFinal = document.getElementById("mensajeFinal");

const sonidoInicio = document.getElementById("sonidoInicio");
const sonidoTeclado = document.getElementById("sonidoTeclado");
const sonidoCompletado = document.getElementById("sonidoCompletado");

let linea = 0;

// function escribirLinea() {

//     // if(linea >= mensajes.length){

//     //     btnEntrar.style.display="block";

//     //     return;

//     // }


//     if (linea >= mensajes.length) {

//         sonidoTeclado.pause();

//         sonidoTeclado.currentTime = 0;

//         sonidoCompletado.play();

//         btnEntrar.style.display = "block";

//         return;

//     }

//     terminal.innerHTML += mensajes[linea];

//     let progreso = Math.round(((linea + 1) / mensajes.length) * 100);

//     barra.style.width = progreso + "%";

//     porcentaje.innerHTML = progreso + "%";

//     linea++;

//     setTimeout(escribirLinea, 900);

// }

// window.onload=()=>{

//     escribirLinea();

// };

function escribirLinea() {

    if (linea >= mensajes.length) {

        sonidoTeclado.pause();

        sonidoTeclado.currentTime = 0;

        sonidoCompletado.play();

        // btnEntrar.style.display = "block";
        // cursor.style.display = "none";

        cursor.style.display = "none";


        setTimeout(() => {


            mensajeFinal.style.display = "block";

            btnEntrar.onclick = () => {
                window.location.href = "recuerdos.html";
            }


        }, 1000);



        setTimeout(() => {


            btnEntrar.style.display = "block";


        }, 4000);



        return;

    }


    let texto = mensajes[linea];

    let posicion = 0;


    function escribirCaracter() {


        if (posicion < texto.length) {


            terminal.innerHTML += texto.charAt(posicion);


            posicion++;


            // Actualizar barra de progreso

            let totalCaracteres = mensajes.join("").length;

            let caracteresEscritos =
                mensajes.slice(0, linea).join("").length + posicion;


            let progreso =
                Math.floor((caracteresEscritos / totalCaracteres) * 100);


            barra.style.width = progreso + "%";

            porcentaje.innerHTML = progreso + "%";


            setTimeout(escribirCaracter, 60);


        } else {


            linea++;


            setTimeout(escribirLinea, 700);


        }


    }


    escribirCaracter();

}



// ===============================
// INICIAR SISTEMA
// ===============================

const btnSistema = document.getElementById("btnSistema");
const pantallaInicio = document.getElementById("pantallaInicio");
const loader = document.getElementById("loader");

btnSistema.addEventListener("click", () => {

    // Ocultar pantalla de bienvenida
    pantallaInicio.style.display = "none";

    // Mostrar consola
    loader.style.display = "flex";

    // Reiniciar consola
    terminal.innerHTML = "";
    linea = 0;

    // Reproducir sonido
    sonidoInicio.currentTime = 0;

    sonidoInicio.play();

    // Cuando termine el sonido...
    // sonidoInicio.onended = () => {

    //     escribirLinea();

    // };

    sonidoInicio.onended = () => {


        sonidoTeclado.currentTime = 0;

        sonidoTeclado.play();


        escribirLinea();


    };

});


// ======================================
// CONTADOR DE TIEMPO JUNTOS
// Alejandro ❤️ Kimberly
// Desde: 01/09/2021
// ======================================

const fechaInicio = new Date(2021, 8, 1); 
// Mes 8 = Septiembre (JavaScript empieza los meses desde 0)


function actualizarContador(){


    const hoy = new Date();


    let anios = hoy.getFullYear() - fechaInicio.getFullYear();

    let meses = hoy.getMonth() - fechaInicio.getMonth();

    let dias = hoy.getDate() - fechaInicio.getDate();



    if(dias < 0){

        meses--;

        const diasMesAnterior = new Date(
            hoy.getFullYear(),
            hoy.getMonth(),
            0
        ).getDate();


        dias += diasMesAnterior;

    }


    if(meses < 0){

        anios--;

        meses += 12;

    }



    document.getElementById("anios").textContent = anios;

    document.getElementById("meses").textContent = meses;

    document.getElementById("dias").textContent = dias;


}



actualizarContador();


setInterval(actualizarContador,1000);