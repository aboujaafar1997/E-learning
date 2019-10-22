const moduleService = require('../services/ModuleService');
const moduleController = {};

moduleController.ajouter = async(req,res) => {
    var resultat = await moduleService.ajouter(req.body.module);
    res.send(resultat);
}

moduleController.modifier = async(req,res) => {
    var resultat = await moduleService.modifier(req.body.module);
    res.send({resultat});
}

moduleController.supprimer = async(req,res) => {
    var resultat = await moduleService.supprimer(req.body.module);
    res.send({resultat});
}

moduleController.supprimer = async(req,res) => {
    var {id}=req.body.module;
    var resultat = await moduleService.supprimer(id);
    res.send({resultat});
}

moduleController.afficherParFiliere = async(req,res) => {
    var resultat = await moduleService.afficherParFiliere(req.body.filiere_id);
    res.send(resultat);
}

moduleController.afficherTout = async(req,res) => {
    var resultat = await moduleService.afficherTout();
    res.send(resultat);
}

module.exports = moduleController;