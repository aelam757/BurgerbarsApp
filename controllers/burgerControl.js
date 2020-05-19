const express = require("express");
const burgers = require("../models/burgerbar.js");
const router = express.Router();

router.get("/", function(req,res){
    res.redirect("/burgers");
})

router.get("/burgers", (req, res) => {
  burgers.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", (req, res) => {
    console.log(req.body.burger_name);
    console.log(req.body.devoured);
    console.log(req.body);
    console.log("Im here")
  burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(res) {
    res.redirect("/burgers");
  });
});

router.put("/burgers/devoured/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("burgers", condition);
  burgers.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
     res.redirect("/burgers");
    }
  );
});

router.delete("/burgers/clear/:id", function(req,res){
    let condition = "id = " + req.params.id;
    console.log("burgers", condition);
    burgers.clear(condition, function(result){
        res.redirect("/burgers");
    });
});

module.exports = router;