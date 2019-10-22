const db = require('../database/database');
const likeService = {};

likeService.ajouter = (like) => {
    return new Promise((reslove,reject) => {
        let {id_etudiant,id_contenue} = like;
        db.query(`INSERT INTO likes VALUES('${id_etudiant},${id_contenue}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout reuessit`;
            reslove(res);
        });
    })
}

likeService.supprimer = (like) => {
    return new Promise((reslove,reject) => {
        let {id_etudiant,id_contenue} = like;
        db.query(`DELETE FROM likes where id_etudiant=${id_etudiant} AND id_contenue =${id_contenue}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suppression reuessit`;
            reslove(res);
        });  
    })
}

likeService.nombreLikes = (id_contenue) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT COUNT(*) AS 'nbreLikes' FROM likes WHERE id_contenue =${id_contenue}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.like = result[0];
            reslove(res);
        });
    })
}

module.exports = likeService;
