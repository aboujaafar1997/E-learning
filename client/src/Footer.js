
import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
style={
    "color":"white"
}
    render() {
    return (
      <div >
    
<footer>
<div class="jumbotron bg-dark " style={this.style}>
   
    <div class="row">
        <div class="col-4">
        <a href="#" class="nav-item nav-link" onClick={(e)=>this.props.cours(e)}><span class="fas fa-book-open"></span> Cours</a>
                    <a href="#" class="nav-item nav-link" onClick={(e)=>this.props.exercice(e)}><span class="fas fa-book-reader"></span> Exercices </a>
                    <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.question(e)}><span class=" fas fa-edit"></span> About?</a>
            <a href="#" class="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span class="far fa-comment"></span> Question</a>
        
        </div>
        <div class="col-4">
            <ul class="list-unstyled">
            <a href="#" class="nav-item nav-link"><span class="fas fa-book-open"></span> Cours</a>
                    <a href="#" class="nav-item nav-link"><span class="fas fa-book-reader"></span> Exercices </a>
                    <a href="#" class="nav-item nav-link"><span class="far fa-comment"></span> Question</a>
                    <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span class=" fas fa-edit"></span> About?</a>

                

            </ul>
        </div>
        <div class="col-4">
            <ul class="list-unstyled">
            <a href="#" class="nav-item nav-link"><span class="fas fa-book-open"></span> Cours</a>
                    <a href="#" class="nav-item nav-link"><span class="fas fa-book-reader"></span> Exercices </a>
                    <a href="#" class="nav-item nav-link"><span class="far fa-comment"></span> Question</a>
                    <a href="/" class="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span class=" fas fa-edit"></span> About?</a>


            </ul>
        </div>

    </div>
</div>
</footer>

      </div>
    );
  }
}

export default Footer;
