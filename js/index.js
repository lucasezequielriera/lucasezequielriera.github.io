//////////////////////////////////////////////////////////// REGISTRARSE ////////////////////////////////////////////////////////////

// Formulario Wizard //
(function ($) {
    let form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Anterior',
            next: 'Siguiente',
            finish: 'Terminar',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onFinished: function (event, currentIndex) {
            swal({
                icon: "success",
                timer: 2500,
                text: "Perfecto!",
                text: "Te redireccionaremos para que puedas ingresar a tu perfil",
                button: false,
            });
        },
    });
    $(".toggle-password").on('click', function () {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
})(jQuery);

// Objeto Constructor de Clientes //
function Clientes(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
}

// Array Principal de Clientes //
let clientes = [];

// Variables //
let botonAnterior = document.body.getElementsByTagName("a")[4];
let botonSiguiente = document.body.getElementsByTagName("a")[5];
let botonTerminar = document.body.getElementsByTagName("a")[6];
let input = document.querySelector("input");
let inputNombre = document.querySelector("#your_name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#your_password");
let inputRePassword = document.querySelector("#confirm_password");

// Validación de Formulario //
botonTerminar.addEventListener("click", validarInput);

function validarInput() {
    if (!inputNombre.value && !inputEmail.value && !inputPassword.value && !inputPassword.value) {
        swal({
            icon: "error",
            text: "No has escrito en ningún campo, completa todo el formulario",
            button: false,
            timer: 2000,
        });
        return false;
    } else if (!inputNombre.value || !inputEmail.value || !inputPassword.value || !inputPassword.value) {
        swal({
            icon: "error",
            button: false,
            text: "No has completado todos los campos",
            timer: 2000,
        });
        return false;
    } else if (inputPassword.value != inputRePassword.value) {
        swal({
            icon: "error",
            button: false,
            text: "Las contraseñas no coinciden",
            timer: 2000,
        });
        return false;
    } else {
        // Encadenando función // 
        crearCliente();
    }
}

// Agrega el cliente al array luego de pasar por las validaciones //
function crearCliente() {
    const clienteNuevo = new Clientes(inputNombre.value, inputEmail.value, inputPassword.value);
    clientes.push(clienteNuevo);
    // Encadenando función //
    guardarClientesEnLocalStorage();
    // Después de 3 segundos se redirecciona a "Iniciar Sesión" //
    setTimeout(function () {
        window.location.href = "../iniciar_sesion.html";
    }, 3000);
}

// Guarda la información del nuevo cliente al localStorage //
function guardarClientesEnLocalStorage() {
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

// Carga lo guardado del localStorage en el array de "clientes", una manera diferente en vez de ponerlo dentro del array //
function cargarClientesDeLocalStorage() {
    if (localStorage.getItem("clientes") !== null) {
        clientes = JSON.parse(localStorage.getItem("clientes"));
    }
}

//////////////////////////////////////////////////////////// INDEX ////////////////////////////////////////////////////////////

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
                        <img src="./images/logo.png" alt="">
                        <p class="footer_canvas">Engineered by <a href="#">Agrowd</a></p>
                    </div>
                </div>
            </div>
            <!-- / Vista Offcanvas -->
        </div>
    </div>
    `
    // Saludo al perfil conectado //
    document.querySelector("#nombrePerfil").textContent = `Bienvenido!`
    // Cerrar sesión cuando se clickea en botón "cerrar sesión" //
    document.querySelector(".cerrarSesion").addEventListener("click", cerrarSesion);
}

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

// Animación en Logo //
const logotooeshop = $('#mostrarLogo');

logotooeshop.click(function() {
    logotooeshop.animate({
                    marginLeft: '50px'
                }, 'fast')
                .animate({
                    marginLeft: '0px',
                }, 'fast')
                .animate({
                    marginLeft: '50px'
                }, 'normal')
                .animate({
                    marginLeft: '0px',
                }, 'normal')
                .animate({
                    marginLeft: '50px'
                }, 'slow')
                .animate({
                    marginLeft: '0px',
                }, 'slow')
});

/// Contacto ///

// Selectores //
const formContacto = document.querySelector("#formularioContacto");
const inputs = formContacto.querySelectorAll("input[type='text']");

// Inputs del formulario de contacto //
const nombreContacto = formContacto.querySelector("#nombreContacto");
const apellidoContacto = formContacto.querySelector("#apellidoContacto");
const emailContacto = formContacto.querySelector("#emailContacto");
const telefonoContacto = formContacto.querySelector("#telefonoContacto");
const paisContacto = formContacto.querySelector("#paisContacto");
const provinciaContacto = formContacto.querySelector("#provinciacontacto");
const asuntoContacto = formContacto.querySelector("#asuntoContacto");
const mensajeContacto = formContacto.querySelector("#mensajeContacto");

formContacto.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Todo perfecto, mensaje enviándose...");
});

// Inicializar función para que no se sobreescriba con los datos anteriores en el array "clientes" //
cargarClientesDeLocalStorage();
mostrarSesion();