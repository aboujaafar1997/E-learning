const db = require('../database/database');
const notificationService = {};

notificationService.ajouter = (notification) => {
    return new Promise((reslove,reject) => {
        let {user_id,id_contenu,message} = notification;
        db.query(`INSERT INTO notifications(message,user_id,id_contenu) VALUES('${user_id},${message},${id_contenu}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout reuessit`;
            reslove(res);
        });
    })
}

module.exports = notificationService;
