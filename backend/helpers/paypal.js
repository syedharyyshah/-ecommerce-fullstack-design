const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Abz2ScKLKZaWeSgFasuF2PT1rCuip6i41TJurcqYDQy3Dno9MrVbh7zT6tV_a-zio_EOgYlCv3SKomvI",
  client_secret: "ED1Zr3pRAq8G37RSQpMGPZPCT-JO5jGZExVZzLSdkHli0FwCcS2V0Oj6iNO7ch20SUC1dYUNnb8PUE0H",
});

module.exports = paypal;