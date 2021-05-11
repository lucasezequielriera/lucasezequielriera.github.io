const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// SDK de Mercado Pago
const mercadopago = require('mercadopago');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-2405390246476177-031915-2833ac98a602bcfb2169e61a6338c6ac-610563446'
});

// routes
app.post('/checkout', (req, res) => {
  res.send('<h1>Hola a todos!</h1>');
});

// server 

app.listen(100, () => {
  console.log("esto esta funcionando");
});