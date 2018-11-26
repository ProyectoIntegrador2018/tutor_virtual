import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Grupos extends Component {

    constructor(){
        super();
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = {
            grupos : [],
            isActive : false,
            grupoEsp : [],
            search_info : ""
        }
    }

    componentDidMount() {
        axios.get('/api/grupos').then(
            response => {
                this.setState({
                    grupos: response.data
                });
            }
        );
    }

    onEnter(e){
        var search_info = this.state.search_info;

        if (search_info != "") {
            axios.get('/api/search/grupos/'+ search_info).then(
                response => {
                    this.setState({
                        grupos: response.data
                    });
                }
            );
        }
        else
        {
            axios.get('/api/grupos').then(
                response => {
                    this.setState({
                        grupos: response.data
                    });
                }
            );
        }

    }

    onChangeSearch(e){
        this.state.search_info = e.target.value;
        this.forceUpdate();
    }

    onDelete(grupo_id){
        console.log(grupo_id);
        swal({
            title: 'Estas seguro de borrarlo?',
            text: "Esta accion no es reversible",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                axios.delete('/api/grupos/delete/' + grupo_id)
                .then(response =>{
                    var grupos = this.state.grupos;
                    for(var  i = 0; i< grupos.length; i++){
                        if(grupos[i].id == grupo_id){
                            grupos.splice(i,1);
                            this.setState({grupos:grupos});
                        }
                    }
                })
                swal(
                    'Eliminado!',
                    'El grupo ha sido elimnado con exito',
                    'success'
                )
            }
        })
    }

    toggleModal(grupo_id){
        console.log(grupo_id);
        this.setState({isActive: true});
        axios.get('/api/grupo/' + grupo_id).then(
            response => {
                this.setState({
                    grupoEsp: response.data
                });
            }
        );
    }

    closeModal(){
        this.setState({isActive:false});
    }

    render() {
        return (
            <Router>
                <div className="col-8 p-0 main">
                    {/*Search bar*/}
                    <div className="row p-0">
                        <div className="col-12 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="material-icons">search</i>
                                    </span>
                                </div>
                                <input value={this.state.search_info} onKeyUp={this.onEnter.bind(this)}
                                    onChange={this.onChangeSearch} type="text" className="form-control form-control-lg"
                                    placeholder="Buscar grupo..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>

                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <h1>Grupos</h1>
                                </div>

                                <div className="col-auto">
                                    <a href="/index/grupos/nuevo" className="font-weight-bold">Agregar nuevo grupo</a>
                                </div>
                            </div>

                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.grupos.map(grupo => {
                                        return (
                                            <tr>
                                                <th scope="row">{grupo.id}</th>
                                                <td>
                                                    <span>
                                                        <button className="btn btn-danger mx-1"  onClick={this.onDelete.bind(this,grupo.id)}><FontAwesomeIcon icon="trash-alt" /></button>
                                                        <button className="btn btn-info mx-1"  onClick={this.toggleModal.bind(this, grupo.id)}><FontAwesomeIcon icon="info-circle" /></button>
                                                    </span>
                                                </td>

                                                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                                                    <button className="btn btn-primary" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon="arrow-left" /></button>

                                                    <div className="form-group">
                                                        <label htmlFor="tutor_nombre">Numero de grupo</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="grupo_numero"
                                                            aria-describedby="nombre"
                                                            value={this.state.grupoEsp.id}/>
                                                    </div>

                                                    {/* <button className="btn btn-primary" onClick={this.onSubmit.bind(this,tutor.id)}><FontAwesomeIcon icon="save" /></button> */}
                                                </Modal>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('Grupos')) {
    ReactDOM.render(<Grupos/>, document.getElementById('grupos'));
}
