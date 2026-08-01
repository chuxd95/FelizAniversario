/* =====================================
   RECUERDOS
   Alejandro ❤️ Kimberly
===================================== */


// ==========================
// LLUVIA DE CORAZONES
// ==========================


function crearCorazon(){


    const corazon = document.createElement("div");


    corazon.className = "corazon";


    corazon.innerHTML = "❤️";


    corazon.style.left =
    Math.random() * 100 + "%";


    corazon.style.fontSize =
    (15 + Math.random() * 30) + "px";


    corazon.style.animationDuration =
    (5 + Math.random() * 5) + "s";



    document
    .getElementById("corazones")
    .appendChild(corazon);



    setTimeout(()=>{


        corazon.remove();


    },10000);


}



// Crear corazones constantemente

setInterval(crearCorazon,250);





// ==========================
// MÚSICA
// ==========================


window.addEventListener("load",()=>{


    const musica =
    document.getElementById("musica");


    musica.volume = 0.5;


    musica.play()
    .catch(()=>{


        console.log(
        "El navegador espera interacción para reproducir música"
        );


    });


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


// ==========================
// CARTA ANIMADA
// ==========================


const textoCarta = `

Mi amada Kimberly ❤️


Hoy quiero dedicarte estas palabras
desde lo más profundo de mi corazón.


Gracias por cada momento,
cada sonrisa y cada recuerdo
que hemos construido juntos.


Sé que no fui perfecto,
pero quiero que sepas que estoy dispuesto
a mejorar y demostrarte con hechos
lo mucho que te amo.


Quiero volver a conquistarte
cada día, con paciencia,
respeto y mucho amor.


No quiero apresurar tu decisión,
solo quiero que recuerdes
que mi corazón sigue eligiéndote.


Gracias por estos años de historia,
por estar en mi vida
y por todos los momentos
que siempre guardaré.


Te Amo Mucho Mi Reyna, Kimberly Manuyama❤️


De tu Chusito y Esposito: Alejandro Chu

`;


let posicionCarta = 0;


function escribirCarta(){


    if(posicionCarta < textoCarta.length){


        document.getElementById("cartaTexto")
        .innerHTML += textoCarta.charAt(posicionCarta);


        posicionCarta++;


        setTimeout(escribirCarta,45);


    }


}



const carta =
document.querySelector(".carta-amor");


if(carta){


    window.addEventListener("scroll",()=>{


        let posicion =
        carta.getBoundingClientRect().top;


        if(posicion < window.innerHeight-100
        && posicionCarta===0){


            escribirCarta();


        }


    });


}

// ==========================
// EFECTO FINAL
// ==========================


const final =
document.querySelector(".final-amor");


if(final){


final.addEventListener("mouseenter",()=>{


    for(let i=0;i<20;i++){

        crearCorazon();

    }


});


}

// ==========================
// BOTÓN APAGAR SISTEMA
// ==========================


const btnApagar =
document.getElementById("btnApagar");


if(btnApagar){


btnApagar.addEventListener("click",()=>{


    document.getElementById("mensajeApagado").innerHTML =

    "Sistema apagado ❤️<br><br>" +
    "Pero mi amor por ti siempre seguirá encendido ❤️";


    setTimeout(()=>{


        let mensaje =
        encodeURIComponent(
        "Feliz aniversario mi Reyna hermosa ❤️🥹"
        );


        window.open(
        "https://wa.me/?text="+mensaje,
        "_blank"
        );


    },3000);



});


}
