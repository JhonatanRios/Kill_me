function myFunction() {
    window.open("https://www.amazon.com/Kill-me-Melanie-Cockcroft/dp/8416849110/ref=sr_1_1?ie=UTF8&qid=1485466479&sr=8-1&keywords=Melanie+Cockcroft");
}

new TiltSlider(document.getElementById('slideshow'));

window.onload = function () {
    baguetteBox.run('.baguetteBoxThree', {
        animation: 'fadeIn',
        noScrollbars: true
    });
    if (typeof oldIE === 'undefined' && Object.keys) {
        hljs.initHighlighting();
    }
};

$(function () {
    $().timelinr({
        arrowKeys: 'true'
    })
});

$(function () {
    var $this = $('.container');
    var d = $(document).height(),
        c = $(window).height();
    $(window).scroll(function () {
        var s = $(this).scrollTop();  
        var pos = (1 - s / (d - c)) * 100;

           // left demo
        $('.stop-color').attr('offset', pos + '%');

           // right demo
        $('#back').css('top', pos + '%');
    });

    $this.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

//Uso del 3D
$('#myTurntable').turntable({
    axis: 'x',
    reverse: true
});

//Uso del SweetAlert
document.getElementById('botSubmit').addEventListener('click', tomarDatos);

function tomarDatos(e) {
    e.preventDefault();

    var mail = document.getElementById('cuadro').value;
    swal("Thanks for subscribing!", "Check your email: " + mail, "success");
}