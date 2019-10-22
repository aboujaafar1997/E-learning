import React, { Component } from 'react';


class Card extends Component {
    state = {
      color:{ 
      background : "red"}
    }

  render() {
    let image ='http://localhost:5000/'+this.props.cours.image;
    const color={background:"#e0e0e0bf",
   "margin":"5px",
    border : "1px solid black",
    transition:"1s",    
};
    return (
      <div style={color} class="col-4" >
        <img src={image} alt="robot" width="100px"/>
        <br/>
        <h4 style={this.style1}>{this.props.cours.nom_cour}</h4>
        <div className="row">
        <center><p style={this.style1} className="col-8" >
          {this.props.cours.contenue.substring(1,20) + '...'}
        </p></center>
        </div>
        <center><input className="btn btn-danger" type="submit" value="lire la suite" onClick={(e)=>this.props.details(this.props.cours.cour_id)}/>
        </center>
        <br></br>
      </div> 
    )
  }

style1={
  
  "text-align": "center",
  
}
  
}

export default Card;
