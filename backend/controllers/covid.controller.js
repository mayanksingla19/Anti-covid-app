const db = require("../models");
const covi = db.covid;

exports.create = (req,res) => {
    if(!req.body.Id_number){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const covid = new covi({
        Id_proof:req.body.Id_proof,
        Id_number:req.body.Id_number,
        name: req.body.name,
        D_O_B:req.body.D_O_B
    });
    covid.save(covid)
        .then(data => {
            res.send(data);
        })
        .catch( err => {
            res.status(500).send({
                message : err.message || "Some error ocrrued"
            });
        });
}

exports.findAll = (req,res) => {
    covi.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error in find All"
        });
    });
};

exports.findOne = (req,res) => {
    const Id_number = req.params.Id_number;
    covi.find({ "Id_number" : Id_number})
    .then( data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error in find All"
        });
    });
};

exports.delete = (req,res) => {
    const Id_number = req.params.Id_number;
    covi.remove({ "Id_number" : Id_number})
    .then( data => {
        res.send("Record is Removed");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error in Delete All"
        });
    });
};

