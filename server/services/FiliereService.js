const db = require('../database/database');
const filiereService = {};

filiereService.ajouter = (nomfiliere) => {
    return new Promise((reslove,reject) => {
        db.query(`INSERT INTO filieres(nom_filiere) VALUES('${nomfiliere}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout de ${nomfiliere} reuessit`;
            reslove(res);
        });
    })

}

filiereService.modifier = (filiere) => {
    return new Promise((reslove,reject) => {
        var {idfiliere,nomfiliere}=filiere;
        db.query(`UPDATE filieres set nom_filiere='${nomfiliere}' where filiere_id=${idfiliere} `,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `mise a jour De filiere ${nomfiliere} reuessit`;
            reslove(res);
        });
    })
}

filiereService.supprimer = (filire) => {
    return new Promise((reslove,reject) => {
        var {idfiliere,nomfiliere}=filire;
        db.query(`DELETE FROM filieres where id=${idfiliere}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suppression ${nomfiliere} reuessit`;
            reslove(res);
        });  
    })
}

filiereService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM filieres WHERE id ="+id,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.filiere = result[0];
            reslove(res);
        });
    })
}

filiereService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM filieres",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.filiere = result;
            reslove(res);
        });
    });
}

module.exports = filiereService;
