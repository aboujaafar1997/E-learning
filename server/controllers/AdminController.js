const adminService = require('../services/AdminService');
const adminController = {};

adminController.ajouter = async(req,res) => {
    var resultat = await adminService.ajouter(req.body.admin);
    res.send({resultat});
}

adminController.modifier = async(req,res) => {
    var resultat = await adminService.modifier(req.body.admin);
    res.send({resultat});
}

adminController.supprimer = async(req,res) => {
    var resultat = await adminService.supprimer(req.body.admin);
    res.send({resultat});
}

adminController.afficherTout = async(req,res) => {
    var resultat = await adminService.afficherParId(req.body.id);
    res.send(resultat);
}

adminController.afficherTout = async(req,res) => {
    var resultat = await adminService.afficherTout();
    res.send(resultat);
}
module.exports = adminController;