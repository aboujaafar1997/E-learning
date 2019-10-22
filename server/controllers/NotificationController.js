const notificationService = require('../services/NotificationService');
const notificationController = {};

notificationController.ajouter = async(req,res) => {
    let resultat = await notificationService.ajouter(req.body.notification);
    res.send(resultat);
}

module.exports = notificationController;