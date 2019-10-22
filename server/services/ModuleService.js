const db = require('../database/database');
const filiereService = {};

filiereService.ajouter = (module) => {
    return new Promise((reslove,reject) => {
        let {nom_module,semestre,filiere_id} = module;
        db.query(`INSERT INTO modules(nom_module,semestre,filiere_id) VALUES('${nom_module}',${semestre},${filiere_id})`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout de ${nom_module} reuessit`;
            reslove(res);
        });
    })

}

filiereService.modifier = (module) => {
    return new Promise((reslove,reject) => {
        let {code_module,nom_module,semestre,filiere_id} = module;
        db.query(`UPDATE modules SET nom_module='${nom_module}',semestre=${semestre},filiere_id=${filiere_id} WHERE code_module = ${code_module}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `modification de ${nom_module} reuessit`;
            reslove(res);
        });
    })
}

filiereService.supprimer = (module) => {
    return new Promise((reslove,reject) => {
        var {code_module,nom_module}=module;
        db.query(`DELETE FROM modules where id=${code_module}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `suppression de ${nom_module} reuessit`;
            reslove(res);
        });  
    })
}

filiereService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM modules WHERE id =${id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.module = result[0];
            reslove(res);
        });
    })
}

filiereService.afficherParFiliere = (filiere_id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM modules WHERE filiere_id =${filiere_id}`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.modules = result;
            reslove(res);
        });
    })
}

filiereService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM modules",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.modules = result;
            reslove(res);
        });
    });
}

module.exports = filiereService;
