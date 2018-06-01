console.log(arreglo);

fetch('https://killme2.herokuapp.com/productosPorIds?id=' + arreglo)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {
        console.log(res);

        var lista = document.querySelector('.lista');
        res.forEach(function (elem) {
            lista.innerHTML += '<li class="librito"><div class="contp"><div class="contimagenc"><img width="100" src="' + elem.libro + '" class="imagenc"></div><div class="continfo"><p class="nomble">' + elem.nombre + '</p><p class="plecio"><span>$</span> ' + elem.precio + '</p></div></div></li>';
        });
    });

//Uso del SweetAlert
document.getElementById('paga').addEventListener('click', tomarDatos);

function tomarDatos(e) {
    e.preventDefault();

    var nombre = document.getElementById('cuadro').value;
    swal("Thanks for Buying!", "Check your Name: " + nombre, "success");
}

document.getElementById('eliminar').addEventListener('click', elimina);

function elimina(e) {
    e.preventDefault();
    localStorage.clear(".arreglo");
}