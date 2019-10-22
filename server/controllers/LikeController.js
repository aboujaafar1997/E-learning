const likeService = require('../services/LikeService');
const likeController = {};

likeController.ajouter = async(req,res) => {
    let resultat = await likeService.ajouter(req.body.like);
    res.send(resultat);
}

likeController.supprimer = async(req,res) => {
    let resultat = await likeService.supprimer(req.body.like);
    res.send({resultat});
}

likeController.nombreLikes = async(req,res) => {
    let resultat = await likeService.nombreLikes(req.body.id_contenue);
    res.send(resultat);
}

module.exports = likeController;