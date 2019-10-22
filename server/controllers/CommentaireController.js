const commentaireService = require('../services/CommentaireService');
const commentaireController = {};

commentaireController.ajouter = async(req,res) => {
    let {commentaire} = req.body;
    let resultat = await commentaireService.ajouter(commentaire);
    res.send({resultat});
}

commentaireController.modifier = async(req,res) => {
    let {commentaire} = req.body;
    var resultat = await commentaireService.modifier(commentaire);
    res.send({resultat});
}
commentaireController.supprimer = async(req,res) => {
    let {id} = req.body;
    var resultat = await commentaireService.supprimer(id);
    res.send({resultat});
}

commentaireController.afficherTout = async(req,res) => {
    var resultat = await commentaireService.afficherTout();
    res.send({resultat});
}

commentaireController.afficherParCours = async(req,res) => {
   // let {id} = req.body;
    var resultat = await commentaireService.afficherParCours();
    res.send({resultat});
}

module.exports = commentaireController;