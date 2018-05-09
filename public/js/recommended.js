$(function () {
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    //Menu Responsive
    //Calculamos ancho de pagina
    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

    if (ancho < 700) {
        enlaces.hide();
        icono.addClass('fa-bars');

    }

    btnMenu.on('click', function (e) {
        enlaces.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
    });

    $(window).on('resize', function () {
        if ($(this).width() > 700) {
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });
});

// filtro con min y max
console.log('hola cliente');
var slider = document.querySelector('#slider');
document.querySelector('.minMax').addEventListener('click', function (e) {
    e.preventDefault();
    location.href = '/reco?min=' + slider.value;
});

var mov;

var sliderDos = document.getElementById("slider");
var outputDos = document.getElementById("demo");

outputDos.innerHTML = slider.value;

sliderDos.oninput = function () {
    outputDos.innerHTML = this.value;
    mov = this.value;
}