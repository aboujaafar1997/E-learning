const profService = require('../services/ProfService');
const profController = {};

profController.ajouter = async(req,res) => {
    var resultat = await profService.ajouter(req.body);
    res.send({resultat});
}

profController.modifier = async(req,res) => {
    var resultat = await profService.modifier(req.body);
    res.send({resultat});
}

profController.supprimer = async(req,res) => {
    var resultat= await profService.supprimer(req.body);
    res.send({resultat});
}

profController.afficherParId = async(req,res) => {
    var {id}=req.body;
    var resultat=await profService.afficherParId(id);
    res.send({resultat});
}

profController.afficherTout = async(req,res) => {
    var resultat = await profService.afficherTout();
    res.send(resultat);
}

module.exports = profController;