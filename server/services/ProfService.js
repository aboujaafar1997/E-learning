const db = require('../database/database');
const profService = {};

profService.ajouter = (prof) => {
    return new Promise((reslove,reject) => {
        var {nom,prenom,email,password,cni,specialite,date_embauche}=prof;
        db.query(`INSERT INTO profs(nom,prenom,email,password,cin,specialite,date_embauche) VALUES('${nom}','${prenom}','${email}','${password}','${cni}','${specialite}','${date_embauche}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout de prof ${nom} reuessit`;
            reslove(res);
        });
    })
}

profService.modifier = (prof) => {
    return new Promise((reslove,reject) => {
        var {id,nom,prenom,email,password,cni,specialiter,dateembauche}=prof;
        db.query(`UPDATE profs set nom='${nom}' , prenom='${prenom}', email='${email}', password='${password}', cni='${cni}', specialiter='${specialiter}', dateembauche='${dateembauche}' where id=${id} `,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `mise a jour D'etudiant ${nom} reuessit`;
            reslove(res);
        });
    });
    
}

profService.supprimer = (prof) => {
    return new Promise((reslove,reject) => {
        var {id,nom}=prof;
        db.query(`DELETE FROM profs where id=${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suuprission De prof ${nom} reuessit`;
            reslove(res);
        });
    });
}

profService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM profs WHERE id ="+id,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.professeur = result[0];
            reslove(res);
        });
    })
}

profService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM profs",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.professeurs = result;
            reslove(res);
        });
    })
}

profService.login = async(login) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM profs WHERE email = '${login.email}' AND password = '${login.password}'`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.professeur = result[0];
            reslove(res);
        });
    });
}


module.exports = profService;
