const db = require('../database/database');
const etudiantService = {};

etudiantService.ajouter = (etudiant) => {
    return new Promise((reslove,reject) => {
        var {nom,prenom,email,password,cne,cni,niveauscolaire,grade,responsable}=etudiant;
        db.query(`INSERT INTO ETUDIANT(nom,prenom,email,password,cne,cni,niveauscolaire,grade,responsable) VALUES('${nom}','${prenom}','${email}','${password}','${cne}','${cni}','${niveauscolaire}','${grade}','${responsable}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    });
}

etudiantService.modifier = (etudiant) => {
    return new Promise((reslove,reject) => {
        var {id,nom,prenom,email,password,cne,cni,niveauscolaire,grade,responsable}=etudiant;
        var res = {};
        db.query(`UPDATE ETUDIANT set nom='${nom}' , prenom='${prenom}', email='${email}', password='${password}', cne='${cne}', cni='${cni}', niveauscolaire='${niveauscolaire}', grade='${grade}',responsable='${responsable}' where id=${id} `,(err,result) => {
            if(err) res.error = err;
            res.message = `mise a jour D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    });
}

etudiantService.supprimer = (etudiant) => {
    return new Promise((reslove,reject) => {
        var {id,nom}=etudiant;
        db.query(`DELETE FROM Etudient where id=${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suuprission D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    })
    
}

etudiantService.afficherParId = async(id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM Etudiant WHERE id = ${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.etudiant = result[0];
            reslove(res);
        });
    });
}

etudiantService.login = async(login) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM etudiant WHERE email = '${login.email}' AND password = '${login.password}'`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.etudiant = result[0];
            reslove(res);
        });
    });
}

etudiantService.afficherTout = async () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM Etudiant",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.etudiants = result;
        });
    });
}

module.exports = etudiantService;
