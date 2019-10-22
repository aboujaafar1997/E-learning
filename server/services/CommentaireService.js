const db = require('../database/database');
const commentaireService = {};

commentaireService.ajouter = async(commentaire) => {
    return new Promise((reslove,reject) => {
        let {text,id_contenu} = commentaire;
        db.query(`INSER INTO commentaires VALUES(${text},0,${id_contenu})`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.message = `Ajout Reussit`
            reslove(resultat);
        });
    });
}

commentaireService.modifier = async(commentaire) => {
    return new Promise((reslove,reject) => {
        let {commentaire_id,text} = commentaire;
        db.query(`UPDATE commentaires SET commentaire=${text} WHERE commentaire_id=${commentaire_id}`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.message = `Modification Reussit`
            reslove(resultat);
        });
    });
}

commentaireService.supprimer = async(id) => {
    return new Promise((reslove,reject) => {
        db.query(`DELETE FROM commentaires WHERE commentaire_id=${id}`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.message = `Suppression Reussit`
            reslove(resultat);
        });
    });
}


commentaireService.afficherParCours = async() => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM commentaires`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.cour = res
            reslove(resultat);
        });
    });
}

commentaireService.afficherTout = async() => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM commentaires `,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.cour = res
            reslove(resultat);
        });
    });
}



module.exports = commentaireService;