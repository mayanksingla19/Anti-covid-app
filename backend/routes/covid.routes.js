
    const covi = require("../controllers/covid.controller.js");

    var router = require("express").Router();

    router.post("/",covi.create);

    router.get("/",covi.findAll);

    router.get("/:Id_number",covi.findOne);


    router.delete("/:Id_number",covi.delete);

   
module.exports = router;