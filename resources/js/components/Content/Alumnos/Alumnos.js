import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Alumnos extends Component {

    constructor() {
        super();
        this.onChangeAlumno_Username = this.onChangeAlumno_Username.bind(this);
        this.onChangeAlumno_Password = this.onChangeAlumno_Password.bind(this);
        this.onChangeAlumno_Nombres = this.onChangeAlumno_Nombres.bind(this);
        this.onChangeAlumno_ApellidoPaterno = this.onChangeAlumno_ApellidoPaterno.bind(this);
        this.onChangeAlumno_ApellidoMaterno = this.onChangeAlumno_ApellidoMaterno.bind(this);
        this.onChangeAlumno_Correo = this.onChangeAlumno_Correo.bind(this);
        this.onChangeAlumno_Pais = this.onChangeAlumno_Pais.bind(this);
        this.onChangeAlumno_Estado = this.onChangeAlumno_Estado.bind(this);
        this.onChangeAlumno_Ciudad_Municipio = this.onChangeAlumno_Ciudad_Municipio.bind(this);
        this.onChangeAlumno_FechaDeNacimiento = this.onChangeAlumno_FechaDeNacimiento.bind(this);
        this.onChangeAlumno_Socio = this.onChangeAlumno_Socio.bind(this);
        this.onChangeAlumno_Organizacion = this.onChangeAlumno_Organizacion.bind(this);
        this.onChangeAlumno_Rol = this.onChangeAlumno_Rol.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = {
            alumnos : [],
            isActive : false,
            alumnoEsp : [],
            search_info : ""
        }
    }

    componentDidMount() {
        axios.get('/api/alumnos').then(
            response => {
                this.setState({
                    alumnos: response.data
                });
            }
        );
        //Modal.setAppElement('body');
    }

    onEnter(e){
        var search_info = this.state.search_info;

        if (search_info != "") {
            axios.get('/api/search/alumnos/'+ search_info).then(
                response => {
                    this.setState({
                        alumnos: response.data
                    });
                }
            );
        }
        else
        {
            axios.get('/api/alumnos').then(
                response => {
                    this.setState({
                        alumnos: response.data
                    });
                }
            );
        }
    }

    onChangeSearch(e){
        this.state.search_info = e.target.value;
        this.forceUpdate();
    }

    onDelete(alumno_id){
        console.log(alumno_id);
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
                axios.delete('/api/alumnos/delete/' + alumno_id)
                .then(response =>{
                    var alumnos = this.state.alumnos;

                    for(var  i = 0; i< alumnos.length; i++){
                        if(alumnos[i].id == alumno_id){
                            alumnos.splice(i,1);
                            this.setState({alumnos:alumnos});
                        }
                    }
                })
                swal(
                    'Eliminado!',
                    'El alumno ha sido elimnado con exito',
                    'success'
                )
            }
        })
    }

    toggleModal(alumno_id){
        console.log(alumno_id);
        this.setState({isActive: true});
        axios.get('/api/alumno/' + alumno_id).then(
            response => {
                this.setState({
                    alumnoEsp: response.data
                });
            }
        );
    }

    closeModal(){
        this.setState({isActive:false});
    }

    onChangeAlumno_Username(e) {
        this.state.alumnoEsp.username = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Password(e) {
        this.state.alumnoEsp.password = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Nombres(e) {
        this.state.alumnoEsp.nombres = e.target.value;
        this.forceUpdate();
    }
    onChangeAlumno_ApellidoPaterno(e) {
        this.state.alumnoEsp.apellidoPaterno = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_ApellidoMaterno(e) {
        this.state.alumnoEsp.apellidoMaterno = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Correo(e) {
        this.state.alumnoEsp.correo = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Pais(e) {
        this.state.alumnoEsp.pais = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Estado(e) {
        this.state.alumnoEsp.estado = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Ciudad_Municipio(e) {
        this.state.alumnoEsp.ciudad_municipio = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_FechaDeNacimiento(e) {
        this.state.alumnoEsp.fechaDeNacimiento = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Socio(e) {
        this.state.alumnoEsp.socio = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Organizacion(e) {
        this.state.alumnoEsp.organizacion = e.target.value;
        this.forceUpdate();
    }
    onChangeAlumno_Rol(e) {
        this.state.alumnoEsp.rol = e.target.value;
        this.forceUpdate();
    }

    onSubmit(e) {

        var alumno_id = this.state.alumnoEsp.id;
        const alumno = {
            alumno_username : this.state.alumnoEsp.username,
            alumno_password : this.state.alumnoEsp.password,
            alumno_nombres : this.state.alumnoEsp.nombres,
            alumno_apellidoPaterno : this.state.alumnoEsp.apellidoPaterno,
            alumno_apellidoMaterno : this.state.alumnoEsp.apellidoMaterno,
            alumno_correo : this.state.alumnoEsp.correo,
            alumno_pais : this.state.alumnoEsp.pais,
            alumno_estado : this.state.alumnoEsp.estado,
            alumno_ciudad_municipio : this.state.alumnoEsp.ciudad_municipio,
            alumno_fechaDeNacimiento : this.state.alumnoEsp.fechaDeNacimiento,
            alumno_socio : this.state.alumnoEsp.socio,
            alumno_organizacion : this.state.alumnoEsp.organizacion,
            alumno_rol : this.state.alumnoEsp.rol
        }

        axios.put('/api/alumno/update/' + alumno_id, alumno).then(
            response =>{
                axios.get('/api/alumnos').then(
                    response => {
                        this.setState({
                            alumnos: response.data
                        });
                        swal(
                            'Bien',
                            'Alumno modificado con exito',
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
                <div className="main col-8 p-0">

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
                                    placeholder="Buscar alumno por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>

                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">

                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <h1>Alumnos</h1>
                                </div>

                                <div className="col-auto">
                                    <a href="/index/alumnos/nuevo" className="font-weight-bold">Agregar nuevo</a>
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
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.alumnos.map(alumno => {
                                        return (
                                            <tr>
                                                <th scope="row">{alumno.id}</th>
                                                <td>{alumno.username}</td>
                                                <td>{alumno.nombres}</td>
                                                <td>{alumno.apellidoPaterno}</td>
                                                <td>{alumno.apellidoMaterno}</td>
                                                <td>
                                                    <span>
                                                        <button className="btn btn-danger mx-1" onClick={this.onDelete.bind(this,alumno.id)}><FontAwesomeIcon icon="trash-alt" /></button>
                                                        <button className="btn btn-info mx-1" onClick={this.toggleModal.bind(this, alumno.id)}><FontAwesomeIcon icon="info-circle" /></button>
                                                    </span>
                                                </td>

                                                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                                                    <button className="btn btn-primary" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon="arrow-left" /></button>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_username">Username</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_username"
                                                            aria-describedby="username"
                                                            value={this.state.alumnoEsp.username}
                                                            onChange={this.onChangeAlumno_Username} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_password">Password</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_password"
                                                            aria-describedby="password"
                                                            value={this.state.alumnoEsp.password}
                                                            onChange={this.onChangeAlumno_Password} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_nombres">Nombres</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_nombres"
                                                            aria-describedby="nombres"
                                                            value={this.state.alumnoEsp.nombres}
                                                            onChange={this.onChangeAlumno_Nombres} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_apellidoPaterno">Apellido Paterno</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_nombre"
                                                            aria-describedby="nombre"
                                                            value={this.state.alumnoEsp.apellidoPaterno}
                                                            onChange={this.onChangeAlumno_ApellidoPaterno} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_apellidoMaterno">Apellido Materno</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_apellidoMaterno"
                                                            aria-describedby="nombre"
                                                            value={this.state.alumnoEsp.apellidoMaterno}
                                                            onChange={this.onChangeAlumno_ApellidoMaterno} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_correo">Correo</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_correo"
                                                            aria-describedby="nombre"
                                                            value={this.state.alumnoEsp.correo}
                                                            onChange={this.onChangeAlumno_Correo} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_pais">Pais</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_pais"
                                                            aria-describedby="nombre"
                                                            value={this.state.alumnoEsp.pais}
                                                            onChange={this.onChangeAlumno_Pais} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_estado">Estado</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_estado"
                                                            aria-describedby="nombre"
                                                            value={this.state.alumnoEsp.estado}
                                                            onChange={this.onChangeAlumno_Estado} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_ciudad_municipio">Ciudad_Municipio</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_ciudad_municipio"
                                                            aria-describedby="ciudad_municipio"
                                                            value={this.state.alumnoEsp.ciudad_municipio}
                                                            onChange={this.onChangeAlumno_Ciudad_Municipio} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_fechaDeNacimiento">Fecha de Nacimiento</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_fechaDeNacimiento"
                                                            aria-describedby="fechaDeNacimiento"
                                                            value={this.state.alumnoEsp.fechaDeNacimiento}
                                                            onChange={this.onChangeAlumno_FechaDeNacimiento}
                                                            placeholder="AAAA-MM-DD" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_socio">Socio</label>
                                                            <input type="text"
                                                            className="form-control"
                                                            id="alumno_socio"
                                                            aria-describedby="socio"
                                                            value={this.state.alumnoEsp.socio}
                                                            onChange={this.onChangeAlumno_Socio} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_organizacion">Organizacion</label>
                                                        <input type="text"
                                                        className="form-control"
                                                        id="alumno_organizacion"
                                                        aria-describedby="organizacion"
                                                        value={this.state.alumnoEsp.organizacion}
                                                        onChange={this.onChangeAlumno_Organizacion}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="alumno_rol">Rol</label>
                                                        <input type="text"
                                                        className="form-control"
                                                        id="alumno_rol"
                                                        aria-describedby="rol"
                                                        value={this.state.alumnoEsp.rol}
                                                        onChange={this.onChangeAlumno_Rol}/>
                                                    </div>

                                                    <button className="btn btn-primary" onClick={this.onSubmit.bind(this,alumno.id)}><FontAwesomeIcon icon="save" /></button>
                                                </Modal>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                        </div> {/*Content column*/}
                    </div> {/*Content row*/}

                </div>
            </Router>
        );
    }
}

if (document.getElementById('Alumnos')) {
    ReactDOM.render(<Alumnos />, document.getElementById('alumnos'));
}
