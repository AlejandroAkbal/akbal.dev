var selectorVelocidad = document.getElementById("selectorVelocidad");

/*selectorVelocidad.oninput = function () {
    selectorVelocidad.title = this.value;
}

    FALTA HACER QUE FUNCIONE XDXD

*/

var actualizarTiempo = selectorVelocidad.value * 1000;

var actualizarConsola = window.setInterval(loadDoc, actualizarTiempo);

/* -------- Peticion asincrona del log -------- */

function loadDoc() {
    /*console.log("prueba");*/
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            /* --- Formatear el log para eliminar texto innecesario --- */

            consola = this.responseText.replace(new RegExp("\\[Server thread\\/.*?\\]: ", "g"), "");
            consola = consola.replace(new RegExp("\\[Craft Scheduler Thread - .*?\\/INFO\\]: ", "g"), "");
            consola = consola.replace(new RegExp("\\[User Authenticator .*?\\/INFO\\]: ", "g"), "[User Authenticator] ");
            consola = consola.replace(new RegExp("\\[pool-.*?\\/INFO\\]: ", "g"), "");

            document.getElementById("console-text").innerHTML = consola;
        }
    };
    xhttp.open("GET", "../log/index.html", true);
    xhttp.send();
}

/* -------- Activar el modo pantalla completa al darle a la consola -------- */

$('#consola').click(function () {
    $('#consola').toggleClass("fullscreen");

    /* --- Scrollear al final --- */

    $('#consola').animate({
        scrollTop: $('#consola')[0].scrollHeight
    }, 1700);
});

/* --- Activar las tooltips de bootstrap --- */

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
