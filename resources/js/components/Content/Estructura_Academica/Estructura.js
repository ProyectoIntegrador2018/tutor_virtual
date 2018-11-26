import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Estructura extends Component {

    constructor(){
        super();
        this.onChangeDirectivo_Username = this.onChangeDirectivo_Username.bind(this);
        this.onChangeDirectivo_Password = this.onChangeDirectivo_Password.bind(this);
        this.onChangeDirectivo_Nombres = this.onChangeDirectivo_Nombres.bind(this);
        this.onChangeDirectivo_ApellidoPaterno = this.onChangeDirectivo_ApellidoPaterno.bind(this);
        this.onChangeDirectivo_ApellidoMaterno = this.onChangeDirectivo_ApellidoMaterno.bind(this);
        this.onChangeDirectivo_Correo = this.onChangeDirectivo_Correo.bind(this);
        this.onChangeDirectivo_Pais = this.onChangeDirectivo_Pais.bind(this);
        this.onChangeDirectivo_Estado = this.onChangeDirectivo_Estado.bind(this);
        this.onChangeDirectivo_Ciudad_Municipio = this.onChangeDirectivo_Ciudad_Municipio.bind(this);
        this.onChangeDirectivo_Socio = this.onChangeDirectivo_Socio.bind(this);
        this.onChangeDirectivo_Organizacion = this.onChangeDirectivo_Organizacion.bind(this);
        this.onChangeDirectivo_Rol = this.onChangeDirectivo_Rol.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = {
            directivos : [],
            isActive : false,
            directivoEsp : [],
            search_info : ""
        }
    }

    componentDidMount() {
        axios.get('/api/directivos').then(
            response => {
                this.setState({
                    directivos: response.data
                });
            }
        );
        //Modal.setAppElement('body');
    }

    onEnter(e){
        var search_info = this.state.search_info;

        if (search_info != "") {

            axios.get('/api/search/directivos/'+ search_info).then(
                response => {
                    this.setState({
                        directivos: response.data
                    });
                }
            );
        }
        else
        {
            axios.get('/api/directivos').then(
                response => {
                    this.setState({
                        directivos: response.data
                    });
                }
            );
        }
    }

    onChangeSearch(e){
        this.state.search_info = e.target.value;
        this.forceUpdate();
    }

    onDelete(directivo_id){
        console.log(directivo_id);
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
                axios.delete('/api/directivos/delete/' + directivo_id)
                .then(response =>{
                    var directivos = this.state.directivos;
                    for(var  i = 0; i< directivos.length; i++){
                        if(directivos[i].id == directivo_id){
                            directivos.splice(i,1);
                            this.setState({directivos:directivos});
                        }
                    }
                })
                swal(
                    'Eliminado!',
                    'El directivo ha sido elimnado con exito',
                    'success'
                )
            }
        })
    }

    toggleModal(directivo_id){
        console.log(directivo_id);
        this.setState({isActive: true});
        axios.get('/api/directivo/' + directivo_id).then(
            response => {
                this.setState({
                    directivoEsp: response.data
                });
            }
        );
    }

    closeModal(){
        this.setState({isActive:false});
    }

    onChangeDirectivo_Username(e) {
        this.state.directivoEsp.username = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Password(e) {
        this.state.directivoEsp.password = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Nombres(e) {
        this.state.directivoEsp.nombres = e.target.value;
        this.forceUpdate();
    }
    onChangeDirectivo_ApellidoPaterno(e) {
        this.state.directivoEsp.apellidoPaterno = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_ApellidoMaterno(e) {
        this.state.directivoEsp.apellidoMaterno = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Correo(e) {
        this.state.directivoEsp.correo = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Pais(e) {
        this.state.directivoEsp.pais = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Estado(e) {
        this.state.directivoEsp.estado = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Ciudad_Municipio(e) {
        this.state.directivoEsp.ciudad_municipio = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Socio(e) {
        this.state.directivoEsp.socio = e.target.value;
        this.forceUpdate();
    }

    onChangeDirectivo_Organizacion(e) {
        this.state.directivoEsp.organizacion = e.target.value;
        this.forceUpdate();
    }
    onChangeDirectivo_Rol(e) {
        this.state.directivoEsp.rol = e.target.value;
        this.forceUpdate();
    }

    onSubmit(e) {

        var directivo_id = this.state.directivoEsp.id;
        const directivo = {
            directivo_username : this.state.directivoEsp.username,
            directivo_password : this.state.directivoEsp.password,
            directivo_nombres : this.state.directivoEsp.nombres,
            directivo_apellidoPaterno : this.state.directivoEsp.apellidoPaterno,
            directivo_apellidoMaterno : this.state.directivoEsp.apellidoMaterno,
            directivo_correo : this.state.directivoEsp.correo,
            directivo_pais : this.state.directivoEsp.pais,
            directivo_estado : this.state.directivoEsp.estado,
            directivo_ciudad_municipio : this.state.directivoEsp.ciudad_municipio,
            directivo_socio : this.state.directivoEsp.socio,
            directivo_organizacion : this.state.directivoEsp.organizacion,
            directivo_rol : this.state.directivoEsp.rol
        }

        axios.put('/api/directivo/update/' + directivo_id, directivo).then(
            response =>{
                axios.get('/api/directivos').then(
                    response => {
                        this.setState({
                            directivos: response.data
                        });
                        swal(
                            'Bien',
                            'Directivo modificado con exito',
                            'success'
                        )
                    }
                );
            }
        );
    }

    render() {
        return (
            <Router>
                <div className="col-10 p-0 main">

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
                                    placeholder="Buscar directivo por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>

                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <h1>Estructura académica</h1>
                                </div>

                                <div className="col-auto">
                                    <a href="/index/estructura/nuevo" className="font-weight-bold">Agregar nuevo</a>
                                </div>
                            </div>

                            <table className="table table-hover">

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Apellido paterno</th>
                                        <th scope="col">Apellido materno</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.directivos.map(directivo => {
                                            return (
                                                <tr>
                                                    <th scope="row">{directivo.id}</th>
                                                    <td>{directivo.username}</td>
                                                    <td>{directivo.nombres}</td>
                                                    <td>{directivo.apellidoPaterno}</td>
                                                    <td>{directivo.apellidoMaterno}</td>
                                                    <td>{directivo.rol}</td>
                                                    <td>
                                                        <span>
                                                            <button className="btn btn-danger mx-1"  onClick={this.onDelete.bind(this, directivo.id)}><FontAwesomeIcon icon="trash-alt" /></button>
                                                            <button className="btn btn-info mx-1"  onClick={this.toggleModal.bind(this, directivo.id)}><FontAwesomeIcon icon="info-circle" /></button>
                                                        </span>

                                                    </td>

                                                    <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                                                        <button className="btn btn-primary" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon="arrow-left" /></button>
                                                        <div className="form-group">
                                                            <label htmlFor="directivo_username">Username</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_username"
                                                                aria-describedby="username"
                                                                value={this.state.directivoEsp.username}
                                                                onChange={this.onChangeDirectivo_Username} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_password">Password</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_password"
                                                                aria-describedby="password"
                                                                value={this.state.directivoEsp.password}
                                                                onChange={this.onChangeDirectivo_Password} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_nombres">Nombres</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_nombres"
                                                                aria-describedby="nombres"
                                                                value={this.state.directivoEsp.nombres}
                                                                onChange={this.onChangeDirectivo_Nombres} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_apellidoPaterno">Apellido Paterno</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_nombre"
                                                                aria-describedby="nombre"
                                                                value={this.state.directivoEsp.apellidoPaterno}
                                                                onChange={this.onChangeDirectivo_ApellidoPaterno} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_apellidoMaterno">Apellido Materno</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_apellidoMaterno"
                                                                aria-describedby="nombre"
                                                                value={this.state.directivoEsp.apellidoMaterno}
                                                                onChange={this.onChangeDirectivo_ApellidoMaterno} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_correo">Correo</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_correo"
                                                                aria-describedby="nombre"
                                                                value={this.state.directivoEsp.correo}
                                                                onChange={this.onChangeDirectivo_Correo} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_pais">Pais</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_pais"
                                                                aria-describedby="nombre"
                                                                value={this.state.directivoEsp.pais}
                                                                onChange={this.onChangeDirectivo_Pais} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_estado">Estado</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_estado"
                                                                aria-describedby="nombre"
                                                                value={this.state.directivoEsp.estado}
                                                                onChange={this.onChangeDirectivo_Estado} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_ciudad_municipio">Ciudad_Municipio</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_ciudad_municipio"
                                                                aria-describedby="ciudad_municipio"
                                                                value={this.state.directivoEsp.ciudad_municipio}
                                                                onChange={this.onChangeDirectivo_Ciudad_Municipio} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_socio">Socio</label>
                                                                <input type="text"
                                                                className="form-control"
                                                                id="directivo_socio"
                                                                aria-describedby="socio"
                                                                value={this.state.directivoEsp.socio}
                                                                onChange={this.onChangeDirectivo_Socio} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_organizacion">Organizacion</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="directivo_organizacion"
                                                            aria-describedby="organizacion"
                                                            value={this.state.directivoEsp.organizacion}
                                                            onChange={this.onChangeDirectivo_Organizacion}/>
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="directivo_rol">Rol</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="directivo_rol"
                                                            aria-describedby="rol"
                                                            value={this.state.directivoEsp.rol}
                                                            onChange={this.onChangeDirectivo_Rol}/>
                                                        </div>

                                                        <button className="btn btn-primary" onClick={this.onSubmit.bind(this,directivo.id)}><FontAwesomeIcon icon="save" /></button>
                                                    </Modal>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('Estructura')) {
    ReactDOM.render(<Estructura/>, document.getElementById('estructura'));
}
