import React, { Component } from 'react';
class Com extends Component {
style1={
    "padding": "20px",
    "border-radius": "50px 20px"
}
 render() {
 return(
<div className="col-12">

<div style={this.style1} class="alert alert-secondary" role="alert">
<h6>28/03/20018 23h:03min:01s</h6>
<img src="professor.png" className=" img-responsive rounded-circle img-circle" /> {this.props.contenu}
<div className=" d-flex justify-content-between">
<p1>{this.props.jaime} jaime :) </p1>
<button type="button" class="btn btn-primary btn-sm" >Like</button>
</div>
<br></br>
</div>

</div>
 );  

  }
}
export default Com;

