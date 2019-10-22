const db = require('../database/database');
const adminService = {};

adminService.ajouter = (admin) => {
    return new Promise((reslove,reject) => {
        var {nom,prenom,email,password,cni,dateembauche}=admin;
        db.query(`INSERT INTO ADMIN VALUES('${nom}','${prenom}','${email}','${password}','${cni}','${dateembauche}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    })
}

adminService.modifier = (admin) => {
    return new Promise((reslove,reject) => {
        var {id,nom,prenom,email,password,cni,dateembauche}=admin;
        db.query(`UPDATE ADMIN set nom='${nom}' , prenom='${prenom}', email='${email}', password='${password}', cni='${cni}', dateembauche='${dateembauche}' where id=${id} `,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `mise a jour D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    });
}

adminService.supprimer = (admin) => {
    return new Promise((reslove,reject) => {
        var {id,nom}=admin;
        db.query(`DELETE FROM ADMIN where id=${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suuprission D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    });
}

adminService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        var {id,nom}=admin;
        db.query("SELECT * FROM ADMIN WHERE id ="+id,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = result[0];
            reslove(res);
        });
    });
}

adminService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        var {id,nom}=admin;
        db.query("SELECT * FROM ADMIN",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = result;
            reslove(res);
        });
    });
}

module.exports = adminService;
