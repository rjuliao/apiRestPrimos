const sql = require("./db.js");

// constructor
const Primos = function(primos) {
  this.n = primos.n;
  this.data_p = primos.data_p;
};


Primos.create = (newPrimos, result) => {
    sql.query("INSERT INTO n_primos SET ?", newPrimos, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created customer: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer });
    });
  };

  module.exports = Primos