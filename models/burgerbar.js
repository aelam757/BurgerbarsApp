let orm = require("../config/orm.js");

let burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, val, cb) {
    orm.create("burgers", cols, val, function(res) {
      cb(res);
    });
  },
  update: function(dbObjVals, cond, cb) {
    orm.update("burgers", dbObjVals, cond, function(res) {
      cb(res);
    });
  },
  delete: function(cond, cb) {
    orm.delete("burgers", cond, function(res) {
      cb(res);
    });
  }
};


module.exports = burgers;