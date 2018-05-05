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
var sliderMax = document.querySelector('#sliderMax');
document.querySelector('.minMax').addEventListener('click', function(e){
    e.preventDefault();
    location.href = '/?min=' + slider.value + '&max='+sliderMax.value;
});


// carrito
document.querySelectorAll('.agregar').forEach(function(button) {
    button.addEventListener('click', function(){
        var id = button.parentElement.getAttribute('data-id');

        if(arreglo.indexOf(id) >= 0){
            console.log('paila');
            return;
        }

        arreglo.push(id);
        actualizarCarrito();

        localStorage.setItem('arreglo', JSON.stringify(arreglo));
    });
});