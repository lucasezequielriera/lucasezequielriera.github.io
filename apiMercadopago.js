const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mercadopago = require('mercadopago');

// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}))

// Agrega credenciales
mercadopago.configure({
  access_token: 'APP_USR-2405390246476177-031915-2833ac98a602bcfb2169e61a6338c6ac-610563446'
});

// routes
app.post('/checkout', (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
      title: req.body.title,
      unit_price: Number(req.body.price),
      quantity: 1,
      }
    ]
  };
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.redirect(response.body.init_point);
    }).catch(function (error) {
      console.log(error);
    });
});

// server 
app.listen(3000, () => {
  console.log("It's ok");
});