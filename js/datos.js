'use strict'

// LocalStorage Valores ingresados por "Registrarse" //
const datosClientes = JSON.parse(localStorage.getItem("clientes"));

//====================================================================================================================

// Mostrando internamente todos los "email" que hay dentro del array "datosClientes" //
const emailUsuarios = datosClientes.map(function(dato) {
    return dato.email;
});

// Mostrando internamente todas las "password" que hay dentro del array "datosClientes" //
const passwordUsuarios = datosClientes.map(function(dato) {
    return dato.password;
});
// /Luego se escribe en los inputs de "ingresar_sesión" y si encuentra los datos, ingresa a la sesión //

//======================================================================================================================