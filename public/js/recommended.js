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