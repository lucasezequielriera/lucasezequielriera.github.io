'use strict'

////////////////////////////// Stores //////////////////////////////

// NAVBAR SESION //
const estadoSesion = localStorage.getItem("sesion");

// Definir estado de sesión //
function mostrarSesion() {
    if (estadoSesion == 1) {
        nuevoNavbar();
    }
}

function nuevoNavbar() {
    // Desaparecer botones "Registrarse" y "Iniciar sesión" //
    document.querySelector(".registrarme", "#principal_buttons").style.display = "none";
    document.querySelector(".iniciarSesion").style.display = "none";
    // Mostrar Navbar de Perfil //
    document.querySelector("#navbar").innerHTML += `
    <!-- Pestaña Perfil -->
    <div id="perfil "class="perfil">
        <p id="nombrePerfil">Mi Perfil</p>
        <div class="perfil_usuario">
            <button class=" button_verPerfil btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></button>
            <!-- Vista Offcanvas -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <div class="profile_cover"></div>
                    <div class="profile_data">
                        <h5 id="offcanvasRightLabel">Lucas Riera</h5>
                        <h6>Cliente</h6>
                    </div>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <a class="pestaña_perfil" href="#"><img src="../escuelasiade/iconos/usuario.png" alt="" class="mi_cuenta"> Mi cuenta</a>
                    <a class="pestaña_perfil" href="#"><img src="../escuelasiade/iconos/carrito_perfil.png" alt="" class="compras_realizadas"> Mis compras</a>
                    <a class="pestaña_perfil" href="#"><img src="../escuelasiade/iconos/reputacion.png" alt="" class="reputacion"> Ver mi reputación</a>
                    <a class="pestaña_perfil cerrarSesion" href="#"><img src="../escuelasiade/iconos/cerrar_sesion.png" alt="" class="cerrar_sesion"> Cerrar Sesión</a>
                    <div class="canvas_bottom">
                        <img src="../images/logo.png" alt="">
                        <p class="footer_canvas">Engineered by <a href="#">Agrowd</a></p>
                    </div>
                </div>
            </div>
            <!-- / Vista Offcanvas -->
        </div>
    </div>
    `
    // Saludo al perfil conectado //
    document.querySelector("#nombrePerfil").textContent = `Mi Perfil`
    // Cerrar sesión cuando se clickea en botón "cerrar sesión" //
    document.querySelector(".cerrarSesion").addEventListener("click", cerrarSesion);
}

// Función cerrar sesión //
function cerrarSesion(e) {
    e.preventDefault();
    swal({
            icon: "warning",
            text: "Estás seguro que quieres salir de tu perfil?",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Hasta la próxima!", {
                    icon: "success",
                    button: false,
                    timer: 2000,
                });
                setTimeout(function () {
                    localStorage.removeItem("sesion");
                    location.reload();
                }, 2500);
            }
        });
}

// Imagen de portada y carga de foto //
$('#verborgen1_file').hide();
$('#uploadButton1').on('click', function () {
    $('#verborgen1_file').click();
});

$('#verborgen1_file').change(function () {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
        $('#pf_foto1').css('background-image', 'url("' + reader.result + '")');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
});

$('#image_input1').on('click', function () {
    $('#uploadButton1').trigger('click');
});

// Imagen de perfil y carga de foto //
$('#verborgen_file').hide();
$('#uploadButton').on('click', function () {
    $('#verborgen_file').click();
});

$('#verborgen_file').change(function () {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
        $('#pf_foto').css('background-image', 'url("' + reader.result + '")');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
});

$('#image_input').on('click', function () {
    $('#uploadButton').trigger('click');
});

// Editar descripción debajo del perfil por HTML y guardarla en localStorage //
$(function () {
    $('#btnEditable').on('click', function () {
        let esEditable = $('#idTexto').attr('contenteditable');
        if (esEditable) {
            $('#idTexto').attr('contenteditable', false);
            $('#btnEditable').html('Editar descripción');
            // Declarando botón de "ver más" para poder manipularlo //
            let verMas = document.getElementById('btnEditable');
            // Estilizando el botón de "ver más" //
            verMas.style.display = 'none';
            // Guardando los datos en el localStorage //
            let textoDescripcion = document.getElementById('idTexto').innerHTML;
            localStorage.setItem('textoDescripcion', textoDescripcion);
            textoDescripcion = localStorage.getItem('textoDescripcion');
        } else {
            $('#idTexto').attr('contenteditable', true);
            $('#btnEditable').html('Confirmar edición');
            // Declarando botón de "ver más" para poder manipularlo //
            let verMas = document.getElementById('btnEditable');
            // Estilizando el botón de "ver más" //
            verMas.style.backgroundColor = 'green';
            verMas.style.color = 'white';
        }
    });
})
document.getElementById('idTexto').innerHTML = localStorage.getItem('textoDescripcion');

// Sticky Navegador //
$(document).ready(function () {
    var altura = $('#navegador').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > (altura - 49)) {
            $('#navegador').addClass('menu-fixed');
            $('#productos').css('margin-top', '100px');
            $('#navegador').css('box-shadow', '0px 0px 10px black');
        } else {
            $('#navegador').removeClass('menu-fixed');
            $('#productos').css('margin-top', '50px');
            $('#navbar').css('display', 'flex');
            $('#navegador').css('box-shadow', '0px 0px 10px rgba(0, 0, 0, 0.418)');
        }
    });
});

// Scroll Spy en Sticky Navbar //
const botonProductos = document.querySelector("#btnProductos");
const botonDescripcion = document.querySelector("#btnDescripcion");
const botonUbicacion = document.querySelector("#btnUbicacion");
const botonMediosDePago = document.querySelector("#btnMediosDePago");

// Presionar en "Productos" //
botonProductos.addEventListener('click', () => {
    botonProductos.classList.add('activate');
    botonDescripcion.classList.remove('activate');
    botonUbicacion.classList.remove('activate');
    botonMediosDePago.classList.remove('activate');
});

// Presionar en "Descripción" //
botonDescripcion.addEventListener('click', () => {
    botonDescripcion.classList.add('activate');
    botonProductos.classList.remove('activate');
    botonUbicacion.classList.remove('activate');
    botonMediosDePago.classList.remove('activate');
});

// Presionar en "Ubicación" //
botonUbicacion.addEventListener('click', () => {
    botonUbicacion.classList.add('activate');
    botonProductos.classList.remove('activate');
    botonDescripcion.classList.remove('activate');
    botonMediosDePago.classList.remove('activate');
});

// Presionar en "Medios de Pago" //
botonMediosDePago.addEventListener('click', () => {
    botonMediosDePago.classList.add('activate');
    botonProductos.classList.remove('activate');
    botonUbicacion.classList.remove('activate');
    botonDescripcion.classList.remove('activate');
});

// AJAX //

const dataArray = [JSON.parse(sessionStorage.getItem("data"))];

// Array de productos //
const Card = dataArray[0];

// Utilizando AJAX para mostrar productos desde JSON //
document.addEventListener("DOMContentLoaded", function usandoAjax() {
    $.ajax({
        method: 'GET',
        url: '../escuelasiade/productos.json',
        dataType: 'json',
        success: function (data) {
            sessionStorage.setItem("data", JSON.stringify(data));
        }
    });
});

// Al clickear en botón "Agregar Producto" agrega productos //
document.getElementById('addProducto').addEventListener('click', crearProducto);

function crearProducto() {
    let nombre = prompt("Ingresá el nombre de tu producto");
    let categoria = prompt("Ingresa la categoria");
    let descripcion = prompt("Ingresa la descripción de tu producto");
    let boton = prompt("Ingresa el nombre de tu botón");
    let precio = prompt("Ingresa el precio del producto");
    if (!nombre | !categoria | !descripcion | !boton | !precio) {
        swal({
            button: false,
            text: "No has ingresado todos los campos",
            icon: "error",
            timer: 2000
        });
        return false;
    } else {
        Card.push({"nombre": nombre, "categoria": categoria, "descripcion": descripcion, "boton": boton, "precio": precio, "imagen": "../images/categorias/cursos.jpg   "});
    }
}

// Mostrar los productos en HTML //
function mostrarProductos() {
    const productosDisponibles = document.getElementById("productos_disponibles");
    const botonVerMas = document.querySelector("#botonVerMas");
    botonVerMas.classList.add("Cerrado");

    if (botonVerMas.classList == "Cerrado") {
        Card.some(function (value, index) {
            productosDisponibles.innerHTML +=
                `<div class="card pocosProductos">
                <div class="image_product"><img src="${value.imagen}"></div>
                <div class="card-body">
                    <h5 class="card-title">${value.nombre}</h5>
                    <h6 class="card-subtitle">${value.categoria}</h6>
                    <hr>
                    <p class="card-text">${value.descripcion}</p>
                    <button type="button" class="btn btn-success card-button first-button" data-bs-toggle="modal" data-bs-target="#exampleModal">${value.boton}</button>
                    <form action="http://localhost:3000/checkout" method="POST">
                        <input type="hidden" name="title" value="${value.nombre}">
                        <input type="hidden" name="price" value="${value.precio}">
                        <input type="submit" value="Comprar Ahora" class="btn card-button comprar">
                    </form>
                    <p class="card-bottom"><span>$${value.precio}</span> Pesos Argentinos</p>
                </div>
            </div>`
            if (index === 9) {
                return index === 9;
            }
        });
    }

    // Estados al presionar botón "Ver Más" //
    botonVerMas.addEventListener("click", () => {
        if (botonVerMas.classList == "Cerrado") {
            productosDisponibles.innerHTML = "";
            botonVerMas.classList.remove("Cerrado");
            botonVerMas.classList.add("Abierto");
            botonVerMas.textContent = "Ver Menos";
            Card.forEach(function (value, index) {
                productosDisponibles.innerHTML +=
                    `<div class="card pocosProductos">
                    <div class="image_product"><img src="${value.imagen}"></div>
                    <div class="card-body">
                        <h5 class="card-title">${value.nombre}</h5>
                        <h6 class="card-subtitle">${value.categoria}</h6>
                        <hr>
                        <p class="card-text">${value.descripcion}</p>
                        <button type="button" class="btn btn-success card-button first-button" data-bs-toggle="modal" data-bs-target="#exampleModal">${value.boton}</button>
                        <a href="" class="btn card-button comprar">Comprar</a>
                        <p class="card-bottom"><span>$${value.precio}</span> Pesos Argentinos</p>
                    </div>
                </div>`
            });
        } else {
            productosDisponibles.innerHTML = "";
            botonVerMas.classList.remove("Abierto");
            botonVerMas.classList.add("Cerrado");
            botonVerMas.textContent = "Ver Más";
            Card.some(function (value, index) {
                productosDisponibles.innerHTML +=
                    `<div class="card pocosProductos">
                    <div class="image_product"><img src="${value.imagen}"></div>
                    <div class="card-body">
                        <h5 class="card-title">${value.nombre}</h5>
                        <h6 class="card-subtitle">${value.categoria}</h6>
                        <hr>
                        <p class="card-text">${value.descripcion}</p>
                        <button type="button" class="btn btn-success card-button first-button" data-bs-toggle="modal" data-bs-target="#exampleModal">${value.boton}</button>
                        <a href="" class="btn card-button">Comprar</a>
                        <p class="card-bottom"><span>$${value.precio}</span> Pesos Argentinos</p>
                    </div>
                </div>`
                if (index === 9) {
                    return index === 9;
                }
            });
        }
    })
}

// Inicializar función para mostrar los productos en HTML //
mostrarSesion();
mostrarProductos();