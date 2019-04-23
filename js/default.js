/* --- Inicializar las tooltips --- */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* --- "Fondo" de pantalla --- */
var logo = document.getElementById('logo');
var fullscreen = false;

logo.addEventListener('click', function () {

    if (fullscreen === false) {
        $('#fondo').css({
            cursor: 'none'
        });
        $('nav').fadeOut();
        $("body").css("overflow", "hidden");

        fullscreen = true;

    } else if (fullscreen === true) {
        $('#fondo').css({
            cursor: 'default'
        });
        $('nav').fadeIn();
        $("body").css("overflow", "auto");

        fullscreen = false;

    }
})
