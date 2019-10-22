const db = require('../database/database');
const explicationService = {};

explicationService.ajouter = (explication) => {
    return new Promise((reslove,reject) => {
        let {text,cour_id} = explication;
        db.query(`INSERT INTO explications VALUES('${text},${cour_id}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout reuessit`;
            reslove(res);
        });
    })

}

explicationService.modifier = (explication) => {
    return new Promise((reslove,reject) => {
        let {excplication_id,text,cour_id} = explication;
        db.query(`UPDATE explications SET explication='${text},cour_id=${cour_id} WHERE excplication_id = ${excplication_id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `modification reuessit`;
            reslove(res);
        });
    })
}

explicationService.supprimer = (id) => {
    return new Promise((reslove,reject) => {
        db.query(`DELETE FROM explications where excplication_id=${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suppression reuessit`;
            reslove(res);
        });  
    })
}

explicationService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM explications WHERE excplication_id =${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.explication = result[0];
            reslove(res);
        });
    })
}

explicationService.afficherParCours = (id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM explications WHERE cour_id =${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.explications = result;
            reslove(res);
        });
    })
}

explicationService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM explications",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.explications = result;
            reslove(res);
        });
    });
}

module.exports = explicationService;
