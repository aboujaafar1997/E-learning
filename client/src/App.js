import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import ListCard from './compenents/cours/ListeCard';
import CoursDetail from'./compenents/cours/CoursDetails';
import Home from './Home';
import About from './About';

import './App.css';

class App extends Component {
  state={
    nom:"",
    prenom:"",
    email:"",
    pwd:"",
    rpwd:"",
    cne:"",
    cni:"",
    niveau:"",
    specialite:"",
    date:"",
    username:"",
    online:"",
    dataCours:[],
    dataCoursfilter:[],
    dataExercice:[],
    dataExercicefilter:[],
    dataQuestion:[],
    dataQuestionfilter:[],
    affichege:"home",
    idaffichage:"",
    loginError:false,
    user:false,
    role:false

  }

  render() {
    
    var component;
    if (this.state.affichege==="cours") component= <ListCard recherche={this.rechercheCours} data={this.state.dataCoursfilter} user = {this.state.user} affiche={this.compenentautrechange}/> ;
    if (this.state.affichege==="exercice") component= <ListCard recherche={this.rechercheExercice} data={this.state.dataExercicefilter} user = {this.state.user} affiche={this.compenentautrechange}/> ;
    if (this.state.affichege==="question") component= <ListCard recherche={this.rechercheQuestion} data={this.state.dataQuestionfilter} user = {this.state.user} affiche={this.compenentautrechange}/> ;
    if (this.state.affichege==="autre") component=<CoursDetail id={this.state.id}/> ;
    if (this.state.affichege==="home") component=<Home data1={this.state.dataCoursfilter} data2={this.state.dataExercicefilter} ListCard data={this.state.dataQuestionfilter}/> ;
    if (this.state.affichege==="about") component=<About/>
    return (
      <div className="App">
        <Navbar email={this.emailchange} nom={this.nomchange} prenom={this.prenomchange} 
                pwd ={this.passschange} rpwd={this.rpassschange} cne={this.cnechange} 
                cin={this.cinchange} specialite={this.specialitechange} niveau={this.niveauchange} 
                date={this.datechange} cours={this.compenentcourschange} 
                execice={this.compenentexercicechange} 
                question={this.compenentquestionchange}
                onLogin={this.Connecter}
                inscrireEtudiant={this.inscrireEtudiant}
                inscrireProf={this.inscrireProf}
                loginError={this.state.loginError}
                user = {this.state.user}
                about={this.compenentaboutchange}
                home={this.compenenthomechange}
                logout={this.logout}
                />

          {component}

        <Footer cours={this.compenentcourschange} execice={this.compenentexercicechange} 
                question={this.compenentquestionchange}/>
      </div>
    );

  }
////////////*****************************conecter et recuperer les informations a le state************************************ *////
  Connecter= async(e)=>{
    console.log('connecting ...');
    var login={
      email:this.state.email,
      password:this.state.pwd
    }
    let response = await fetch('http://localhost:5000/login',
                                {method:"POST",headers : {'Content-Type':'application/json'},
                                body: JSON.stringify({login})});

    let resultat = await response.json();

    var user = {};
    
    if(resultat.login){
      //pour fermer le modal du login
      document.querySelector('.exitLogin').click();

      if(resultat.etudiant){
        user = resultat.etudiant;  
      }
      else{
        user = resultat.professeur;
      }
      this.setState({
        user:user,
        role:resultat.role
      });

      console.log(this.state.user);
      

      //get data when user logged in
      this.fetchCours();
      
    }
    else{
      this.setState({loginError:true},()=>{
        console.log(this.state.loginError);
      });
    }
    
  }

  logout = (e)=>{
    console.log('test');
    
    this.setState({
      user:false
    });

    this.setState({affichege:"home"});
  }
/************************************************************************************************************** */

  inscrireEtudiant = async (e) => {
    
    let etudiant = {
      nom : this.state.nom,
      prenom : this.state.prenom,
      email : this.state.email,
      password : this.state.pwd,
      cne : this.state.cne,
      cni : this.state.cni,
      niveauscolaire : this.state.niveau,
      grade : "",
      responsable : false
    }
    console.log(etudiant);
    
    let options = {method:"POST",headers : {'Content-Type':'application/json'},body: JSON.stringify(etudiant)};
    let response = await fetch('http://localhost:5000/etudiants/ajouter',options);

    let resultat = await response.json();

    console.log(resultat);

  }

  inscrireProf = async (e) => {

    let prof = {
      nom : this.state.nom,
      prenom : this.state.prenom,
      email : this.state.email,
      password : this.state.pwd,
      cne : this.state.cne,
      cni : this.state.cni,
      specialite : this.state.specialite,
      date_embauche : this.state.date
    }
    
    let options = {method:"POST",headers : {'Content-Type':'application/json'},body: JSON.stringify(prof)};
    let response = await fetch('http://localhost:5000/professeurs/ajouter',options);

    let resultat = await response.json();

    console.log(resultat);

  }

  

/************************************************recherche filter cours**************************************** */
  rechercheCours=(e)=>{ 
      this.setState({
        dataCoursfilter : this.state.dataCours.filter((cour) => cour.nom_cour.toUpperCase().startsWith(e.target.value.toUpperCase())===true)
      });
  }
/********************************************************************************************************** */

/*****************************************************recherche exercices ************************************* */
  rechercheExercice = (e) => {
    this.setState({
      dataExercicefilter: this.state.dataExercice.filter((user) => user.email.toUpperCase().startsWith(e.target.value.toUpperCase()) === true)
    });
  }
  /**************************************************************************************************************** */

  /*****************************************recherche question ********************************************** */
  rechercheQuestion=(e)=>{ 
    this.setState({
      dataQuestionfilter: this.state.dataQuestion.filter((user) => user.email.toUpperCase().startsWith(e.target.value.toUpperCase())===true)
    });
  }

    /******************************************remplir state from modal******************************************* */
  emailchange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  passschange = (e) => {
    this.setState({
      pwd: e.target.value
    });
  }
  rpassschange = (e) => {
    this.setState({
      rpwd: e.target.value
    });
  }
  nomchange = (e) => {
    this.setState({
      nom: e.target.value
    });
  }
  prenomchange = (e) => {
    this.setState({
      prenom: e.target.value
    });
  }
  cnechange = (e) => {
    this.setState({
      cne: e.target.value
    });
  }
  cinchange = (e)=>{
    this.setState({cin:e.target.value});
  }
  specialitechange = (e)=>{
    this.setState({specialite:e.target.value});
  }
  datechange = (e)=>{
    this.setState({date:e.target.value});
  }
  niveauchange = (e)=>{
    this.setState({niveau:e.target.value});
  }
  
  /************************************FETCH DATA FROM API************************************ */
  async fetchCours(){
    console.log("fetching cours");
        
    let response = await fetch('http://localhost:5000/cours/afficherTout');
    let resultat = await response.json();

    console.log(resultat.resultat.cours);

    this.setState({
        dataCours:resultat.resultat.cours,
        dataCoursfilter:resultat.resultat.cours
    });

    console.log(this.state);
    
  }

  /***********************************************change compenent exercice cours question autre *********************************** */
compenentcourschange = (e)=>{
  e.preventDefault();
  this.setState({affichege:"cours"});
}
compenentexercicechange = (e)=>{
  e.preventDefault();
  this.setState({affichege:"exercice"});
}
compenentquestionchange = (e)=>{
  e.preventDefault();
  this.setState({affichege:"question"});
}
compenentaboutchange = (e)=>{
  e.preventDefault();
  this.setState({affichege:"about"});
}
compenentautrechange = (e)=>{
  this.setState({
    id:e
  });
  this.setState({affichege:"autre"});
}
compenenthomechange = (e)=>{
  e.preventDefault();
  this.setState({affichege:"home"});
}
}

export default App;
