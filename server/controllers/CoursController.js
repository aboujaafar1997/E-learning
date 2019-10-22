const courService = require('../services/CourService');
const coursController = {};

coursController.ajouter = async(req,res) => {
    let {nom_cour,contenue,prof_id,code_module} = req.body;
    let cours = {};

    cours.nom_cour = nom_cour;
    cours.contenue = contenue;
    cours.prof_id = prof_id;
    cours.code_module = code_module;
    cours.image = req.files['image'][0].path.replace('\\','/');
    cours.fichier = req.files['fichier'][0].path.replace('\\','/');

    let resultat = await courService.ajouter(cours);
    res.json(resultat);
    
}

coursController.modifier = async(req,res) => {
    let {cours} = req.body;
    var resultat = await courService.modifier(cours);
    res.send({resultat});
}
coursController.supprimer = async(req,res) => {
    let {id} = req.body;
    var resultat = await courService.supprimer(id);
    res.send({resultat});
}

coursController.afficherTout = async(req,res) => {
    var resultat = await courService.afficherTout();
    res.send({resultat});
}

coursController.afficherParId = async(req,res) => {
    let {id} = req.params;
    var resultat = await courService.afficherParId(id);
    res.send({resultat});
}

module.exports = coursController;