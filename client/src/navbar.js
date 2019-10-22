import React, { Component } from 'react';
import LoginModal from './compenents/LoginModal';
import RegisterModal from './compenents/RegisterModal';
import './App.css';

class Navbar extends Component {
    state={
      mv:"true"
    }
    
  style2={

  };
  render() {
    
    return (
      <div>

<nav class="navbar bg-dark navbar-dark navbar-expand-sm">
        <div class="container">
            <div class="navbar-brand "><a href="/" className="text-white" onClick={(e)=>this.props.home(e)}>ESTE LEARNING</a></div>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav">
                  <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between " id="navbarNav">
                <div class="navbar-nav">
                    {this.props.user ?
                      <span class="d-inline-flex">
                        <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.cours(e)}><span class="fas fa-book-open"></span> Cours</a>
                        <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.execice(e)}><span class="fas fa-book-reader"></span> Exercices </a>
                        <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.question(e)}><span class="far fa-comment"></span> Question</a>
                      </span>
                      :
                      ''
                    }
                    <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span class=" fas fa-edit"></span> About?</a>
                </div>
                  <div class="navbar-nav">
                    {
                      this.props.user ? 
                      <button class="btn btn-secondary" onClick={this.props.logout}>Deconnecter</button>
                      :
                      <span class="d-inline-flex">
                      {/* Register Modal */}
                      <RegisterModal 
                        inscrireProf={this.props.inscrireProf}
                        inscrireEtudiant={this.props.inscrireEtudiant}
                        email={this.props.email} nom={this.props.nom} prenom={this.props.nom} 
                        pwd ={this.props.pwd} rpwd={this.props.rpwd} cne={this.props.cne} 
                        cin={this.props.cin} specialite={this.props.specialite} niveau={this.props.niveau} 
                        date={this.props.date} />
  
                      {/* //Login modal */}
                      <LoginModal onLogin={this.props.onLogin} loginError={this.props.loginError}
                                  email={this.props.email} pwd={this.props.pwd}/>
                      </span>
                      }
                  </div>
</div>
</div>
</nav>
      </div>
    );
  }

}

export default Navbar;