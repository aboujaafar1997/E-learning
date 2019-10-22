import React, { Component } from 'react';
import Com from './Commenter'

class AffichegeComp extends Component {
style={
    "background-image": "url(java.jpg) " ,
    "background-size": "80% 100%",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "height":"250px"
}
    render() {
    return(
        <div>
            <div className="jumbotron" style={this.style}>
                <h1>JAVA</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-5"> </div>
                    <h1>Java</h1>
                </div>
                <hr />
                <div class="row">
                <p>
                    lorem lorem
                </p>
                </div>
                <br />
                <div className="row">
                    <div className="col-5"> </div>
                    <input type="submit" className="btn btn-danger" value="Download pdf " />
                </div>
                <br />
                <br />
                <div className="row" id="commenter">
                    <div class=" col-12 alert alert-secondary" role="alert"> Les commenters :</div>
                </div>
                <div class="row">
                        <Com />
                        <Com />
                        <Com />

                        <div class="form-group">
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Ajouter un commenter : </label>
                                <div className="">
                                    <div className="col-12"></div>
                                    <textarea class="form-control col-8" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <br></br><button type="submit" class="btn btn-primary">Envoyer</button>
                            </div>
                        </div>

                    </div>

            </div>

        </div>

    )}
}
export default AffichegeComp;

