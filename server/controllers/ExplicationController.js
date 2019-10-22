const explicationService = require('../services/ExplicationService');
const explicationController = {};

explicationController.ajouter = async(req,res) => {
    var resultat = await explicationService.ajouter(req.body.explication);
    res.send(resultat);
}

explicationController.modifier = async(req,res) => {
    var resultat = await explicationService.modifier(req.body.explication);
    res.send({resultat});
}

explicationController.supprimer = async(req,res) => {
    var resultat = await explicationService.supprimer(req.body.explication);
    res.send({resultat});
}

explicationController.supprimer = async(req,res) => {
    var {id}=req.body;
    var resultat = await explicationService.supprimer(id);
    res.send({resultat});
}

explicationController.afficherParCours = async(req,res) => {
    var resultat = await explicationService.afficherParCours(req.body.cours_id);
    res.send(resultat);
}

module.exports = explicationController;