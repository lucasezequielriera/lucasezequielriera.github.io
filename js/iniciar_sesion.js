'use strict'

// Variables //
let inputUsuarioIngreso = document.querySelector("#usuario");
let inputPasswordIngreso = document.querySelector("#password");
let botonInicioSesion = document.querySelector("#submit");
let sesion;

// Agregar estilos a input "Usuario //"
document.querySelector("#usuario").addEventListener("keyup", () => {
    if (inputUsuarioIngreso.value.length >= 1) {
        document.querySelector("#usuario").style.backgroundColor = "white";
        document.querySelector("#usuario").style.boxShadow = "none";
    } else {
        document.querySelector("#usuario").style.backgroundColor = "white";
        document.querySelector("#usuario").style.boxShadow = "0px 0px 10px rgb(201, 201, 201)";
    }
});

// Agregar estilos a input "Password" //
document.querySelector("#password").addEventListener("keyup", () => {
    if (inputPasswordIngreso.value.length >= 1) {
        document.querySelector("#password").style.backgroundColor = "white";
        document.querySelector("#password").style.boxShadow = "none";
    } else {
        document.querySelector("#password").style.backgroundColor = "white";
        document.querySelector("#password").style.boxShadow = "0px 0px 10px rgb(201, 201, 201)";
    }
});

// Validar Formulario de Inicio de Sesión//
document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault();
    if ((emailUsuarios.includes(inputUsuarioIngreso.value) == true) && (passwordUsuarios.includes(inputPasswordIngreso.value) == true)) {
        swal({
            icon: "success",
            text: "Bienvenido!",
            button: false,
            timer: 2500,
        });
        sesion = 1;
        localStorage.setItem("sesion", sesion);
        setTimeout( function() {
            window.location.href = "../index.html";
        }, 3000);
    } else if (!inputUsuarioIngreso.value || !inputPasswordIngreso.value) {
        swal({
            icon: "error",
            text: "No ingresaste algún dato",
            button: false,
            timer: 2000,
        });
        return false;
    } else if ((emailUsuarios.includes(inputUsuarioIngreso) == false) && (passwordUsuarios.includes(inputPasswordIngreso) == false)) {
        swal({
            icon: "error",
            text: "Los datos son incorrectos",
            button: false,
            timer: 2000,
        });
        return false;
    }
});