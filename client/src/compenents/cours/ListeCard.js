import React, { Component } from 'react';
import Card from './CardCours';
import AjouterCours from './AjouterCours';

class ListCard extends Component {

    render() {
    let list = this.props.data.map((cours,index) => {
        return <Card details={this.props.affiche} key={index} cours={cours} image="220" />
    });
    console.log(this.props.user);
    
    return (

    <div style={this.Css} id="hello">
        <div id="hello" class="container"><br/>
            <div class="row">
                <div class="col-8" style={{padding:"5px"}}>
                    <input  type="text" onChange={this.props.recherche} class="form-control"/>
                </div>
                
                {this.user ? <AjouterCours user = {this.props.user} /> : ''}
                
            </div>
            <div class="row">
                {list}
            </div>
        </div>
    </div>
    );

}


}

export default ListCard;
