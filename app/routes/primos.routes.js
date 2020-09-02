module.exports = app => {
    const Primos = require("../controllers/primos.controller.js");
  
// Create a new Customer
app.post("/primos", Primos.create);
};