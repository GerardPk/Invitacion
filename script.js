function abrirInvitacion() {

    document
        .getElementById("pantallaInicial")
        .style.display = "none";

    document
        .getElementById("invitacion")
        .style.display = "block";

    escribirMensaje();
}

const texto =
"Me encantaría que me acompañaras a una comida muy especial. Tu presencia es indispensable.";

let i = 0;

function escribirMensaje() {

    const elemento =
        document.getElementById("mensaje");

    const intervalo = setInterval(() => {

        elemento.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){
            clearInterval(intervalo);
        }

    },40);
}

const fechaEvento =
new Date("2026-07-05T15:00:00");

function actualizarContador(){

    const ahora = new Date();

    const diferencia =
    fechaEvento - ahora;

    const dias =
    Math.floor(
        diferencia / (1000*60*60*24)
    );

    const horas =
    Math.floor(
        (diferencia%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutos =
    Math.floor(
        (diferencia%(1000*60*60))
        /(1000*60)
    );

    document.getElemen*ById(
        "cuentaRegresiva"
  * ).innerHTML =
    dias + " días "*+
    horas + " horas " +
    minu*os + " minutos";
}

setInterval(ac*ualizarContador,1000);
actualizarC*ntador();