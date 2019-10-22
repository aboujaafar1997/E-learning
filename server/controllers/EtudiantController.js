const etudiantService = require('../services/EtudiantService');
const etudiantController = {};

etudiantController.ajouter = async(req,res) => {
    console.log(req.body);
    var resultat = await etudiantService.ajouter(req.body);
    res.send(resultat);
}

etudiantController.modifier = async(req,res) => {
    var resultat = await etudiantService.modifier(req.body.etudiant);
    res.send({resultat});
}

etudiantController.supprimer = async(req,res) => {
    var resultat = await etudiantService.supprimer(req.body.etudiant);
    res.send({resultat});
}

etudiantController.login = async(req,res) => {
    var resultat = await etudiantService.login(login);
    res.send({resultat});
}

etudiantController.afficherTout = async(req,res) => {
    var resultat = await etudiantService.afficherTout();
    res.send(resultat);
}

module.exports = etudiantController;