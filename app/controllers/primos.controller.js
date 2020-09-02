const Primos = require("../model/primos.models.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const n_primos = new Primos({
      n: req.body.n,
      data_p: req.body.data_p
    });
  
    
    Primos.create(primos, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "ERROR AL MOMENTO DE GUARDAR LOS N PRIMERO PRIMOS"
        });
      else res.send(data);
    });
  };