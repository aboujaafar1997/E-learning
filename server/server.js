const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

var multer  = require('multer');

var upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
          const newFilename = Date.now() + '-'+ file.originalname;
          cb(null, newFilename);
      },
    })
  });
var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fichier', maxCount: 1 }])

/*
* Middlewares
*/
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads',express.static(__dirname + '/uploads'));

const etudiantController = require('./controllers/EtudiantController');
const profController = require('./controllers/ProfController');
const adminController = require('./controllers/AdminController');
const commentaireController = require('./controllers/CommentaireController');
const coursController = require('./controllers/CoursController');
const explicationController = require('./controllers/ExplicationController');
const filiereController = require('./controllers/FiliereController');
const likeController = require('./controllers/LikeController');
const moduleController = require('./controllers/ModuleController');
const notificationController = require('./controllers/NotificationController');
const authController = require('./controllers/AuthController');
//////*********************AUTHENTIFICATION****************/
app.post('/login',authController.login);

////************************ETUDIAMT************************ */
app.post('/etudiants/ajouter',etudiantController.ajouter);
app.post('/etudiants/modifier',etudiantController.modifier);
app.post('/etudiants/supprimer',etudiantController.supprimer);
app.post('/etudiants/afficherTout',etudiantController.afficherTout);
/////////****************PROF********************* */
app.post('/professeurs/ajouter',profController.ajouter);
app.post('/professeurs/modifier',profController.modifier);
app.post('/professeurs/supprimer',profController.supprimer);
app.post('/professeurs/afficherTout',profController.afficherTout);
app.post('/professeurs/afficherParID',profController.afficherParId);
//////*********************ADMIN****************/
app.post('/admins/ajouter',adminController.ajouter);
app.post('/admins/modifier',adminController.modifier);
app.post('/admins/supprimer',adminController.supprimer);
app.post('/admins/afficherTout',adminController.afficherTout);
//////*********************COURS****************/
app.post('/cours/ajouter',cpUpload,coursController.ajouter);
app.post('/cours/modifier',coursController.modifier);
app.post('/cours/supprimer',coursController.supprimer);
app.get('/cours/afficherTout',coursController.afficherTout);
app.get('/cours/:id',coursController.afficherParId);
//////*********************COMMENTAIRES****************/
app.post('/commentaires/ajouter',commentaireController.ajouter);
app.post('/commentaires/modifier',commentaireController.modifier);
app.post('/commentaires/supprimer',commentaireController.supprimer);
app.get('/commentaires/afficherTout',commentaireController.afficherTout);
//////*********************EXPLICATIONS****************/
app.post('/explications/ajouter',explicationController.ajouter);
app.post('/explications/modifier',explicationController.modifier);
app.post('/explications/supprimer',explicationController.supprimer);
app.post('/explications/afficherParCours',explicationController.afficherParCours);
//////*********************FILIERES****************/
app.post('/filieres/ajouter',filiereController.ajouter);
app.post('/filieres/modifier',filiereController.modifier);
app.post('/filieres/supprimer',filiereController.supprimer);
app.post('/filieres/afficherTout',filiereController.afficherTout);
//////*********************MODULES****************/
app.post('/modules/ajouter',moduleController.ajouter);
app.post('/modules/modifier',moduleController.modifier);
app.post('/modules/supprimer',moduleController.supprimer);
app.post('/modules/afficherParFiliere',moduleController.afficherParFiliere);
app.get('/modules/all',moduleController.afficherTout);
//////*********************LIKES****************/
app.post('/likes/ajouter',likeController.ajouter);
app.post('/likes/supprimer',likeController.supprimer);
app.post('/likes/nombreLikes',likeController.nombreLikes);
//////*********************NOTIFICATIONS****************/
app.post('/notifications/ajouter',notificationController.ajouter);



app.listen(5000);