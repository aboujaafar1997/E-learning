const filiereService = require('../services/FiliereService');
const filiereController = {};

filiereController.ajouter = async(req,res) => {
    var resultat = await filiereService.ajouter(req.body.filiere);
    res.send(resultat);
}

filiereController.modifier = async(req,res) => {
    var resultat = await filiereService.modifier(req.body.filiere);
    res.send({resultat});
}

filiereController.supprimer = async(req,res) => {
    var resultat = await filiereService.supprimer(req.body.filiere);
    res.send({resultat});
}

filiereController.afficherParId = async(req,res) => {
    var {id}=req.body;
    var resultat = await filiereService.afficherParId(id);
    res.send({resultat});
}

filiereController.afficherTout = async(req,res) => {
    var resultat = await filiereService.afficherTout();
    res.send(resultat);
}

module.exports = filiereController;