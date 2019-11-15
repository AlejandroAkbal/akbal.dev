/* --- Inicializar las tooltips --- */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* --- Analiticas --- */
insights.init("X0t9aMCKORpl74Z3");
insights.trackPages();

/* --- Modo fondo de pantalla --- */
var elem = document.documentElement;
var isFullscreen = false;

function makeFullscreen() {

    if (isFullscreen === false) {

        /* - Esconder decorativos - */
        $('nav').fadeOut();
        $("body").css("overflow", "hidden");

        /* - Hacer pantalla completa - */
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }

        isFullscreen = true;

    } else if (isFullscreen === true) {

        /* - Aparecer decorativos - */
        $('nav').fadeIn();
        $("body").css("overflow", "auto");

        /* - Esconder pantalla completa - */
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

        isFullscreen = false;

    }
}
