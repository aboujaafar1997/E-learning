import React, { Component } from 'react';

class AjouterCours extends Component {

    state = {
        modules:[]
    }

    componentDidMount(){
        this.fetchModules();
    }

    render() { 
        
        return (
            <div class="col-3" style={{padding:"5px"}}>
                <button type="button" class="btn btn-danger col-12" data-toggle="modal" data-target="#exampleModalCenter">
                    Ajouter Cours
                </button>

                
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Ajouter Cours</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Titre</label>
                            <input type="text" class="form-control"  placeholder="Titre du cours" ref="nom_cour"/>
                        </div>

                        <div class="form-group">
                            <label>Module</label>
                            <select class="form-control" ref="code_module">
                                {
                                    this.state.modules.map((module)=>{
                                        return <option value={module.code_module}>{module.nom_module}</option>
                                    })
                                }
                            </select>
                        </div>

                            <div class="form-group ">
                                <div class="custom-file">
                                    <input type="file" class="form-control custom-file-input" id="customFile" ref="image"/>
                                    <label class="custom-file-label" for="customFile">Image</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="custom-file">
                                    <input type="file" class="form-control custom-file-input" id="customFile1" ref="fichier"/>
                                    <label class="custom-file-label" for="customFile1">PDF</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Contenu</label>
                                <textarea rows="10" class="form-control" ref="contenue"></textarea>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={this.handleAjouter.bind(this)}>Ajouter</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }

    async fetchModules(){
        console.log("fetching modules");
        
        let response = await fetch('http://localhost:5000/modules/all');
        let resultat = await response.json();

        this.setState({
            modules:resultat.modules
        });
        
    }

    async handleAjouter(){
        
        let {nom_cour,image,fichier,code_module,contenue} = this.refs;
        
        let data = new FormData();
        data.append('image',image.files[0]);
        data.append('fichier',fichier.files[0]);
        data.append('nom_cour',nom_cour.value);
        data.append('contenue',contenue.value);
        data.append('code_module',code_module.value);
        data.append('prof_id',this.props.user.id);

        let response = await fetch('http://localhost:5000/cours/ajouter',
                            {method:"POST",headers : {'Accept':'application/json'},
                            body: data});

        let resultat = await response.json();
        console.log(resultat);
        
        if(resultat.added){
            console.log('added');
        }
        else{
            console.log('Ooops');
        }
    }
}

export default AjouterCours;