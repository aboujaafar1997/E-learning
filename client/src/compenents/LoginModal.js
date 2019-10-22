import React, { Component } from 'react';

class LoginModal extends Component {
    render() { 
        
        return (
            <div>
                <a href="/" class="nav-item nav-link" data-toggle="modal" data-target="#exampleModal0" data-whatever="@getbootstrap">
                    <span class="fas fa-portrait"></span> Connecter</a>
                <div class="modal fade" id="exampleModal0" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Connecter a votre compte</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Email</label>
                                        <input type="text" class="form-control" id="recipient-email" onChange={(e)=>this.props.email(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Mote de passe:</label>
                                        <input type="password" class="form-control" id="recipient-motedepass" onChange={(e)=>this.props.pwd(e)}/>
                                    </div>
                                </form>
                                {this.props.loginError ? <div class="alert alert-danger">Email ou mot de pass est incorrecte !!</div> : ''}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary exitLogin" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.onLogin}>Connecter</button>
                            </div>

                        </div>

                    </div>
                </div>
                

            </div>
        );
    }
}
export default LoginModal;