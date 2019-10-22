const etudiantService = require('../services/EtudiantService');
const professeurService = require('../services/ProfService');
const authController = {};

authController.login = async(req,res) => {
    var resultatEtudiant = await etudiantService.login(req.body.login);
    var resultatProf = await professeurService.login(req.body.login);
    var resultat = {};

    if(resultatEtudiant.etudiant){
        resultat.role = "etudiant";
        resultat.etudiant = resultatEtudiant.etudiant;
        resultat.login = true;
    }

    else if(resultatProf.professeur){
        resultat.role = "professeur";
        resultat.professeur = resultatProf.professeur;
        resultat.login = true;
    }
    else{
        resultat.login = false;
    }

    res.json(resultat);
}


module.exports = authController;