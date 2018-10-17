import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import swal from 'sweetalert2';

export default class Alumnos extends Component {

    constructor() {
        super();
        this.onChangeAlumno_Nombre = this.onChangeAlumno_Nombre.bind(this);
        this.onChangeAlumno_AppellidoPaterno = this.onChangeAlumno_AppellidoPaterno.bind(this);
        this.onChangeAlumno_ApellidoMaterno = this.onChangeAlumno_ApellidoMaterno.bind(this);
        this.onChangeAlumno_Correo = this.onChangeAlumno_Correo.bind(this);
        this.onChangeAlumno_Pais = this.onChangeAlumno_Pais.bind(this);
        this.onChangeAlumno_Estado = this.onChangeAlumno_Estado.bind(this);
        this.onChangeAlumno_Ciudad = this.onChangeAlumno_Ciudad.bind(this);
        this.onChangeAlumno_Municipio = this.onChangeAlumno_Municipio.bind(this);
        this.onChangeAlumno_Genero = this.onChangeAlumno_Genero.bind(this);
        this.onChangeAlumno_FechaNacimiento = this.onChangeAlumno_FechaNacimiento.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = {
            alumnos : [],
            isActive : false,
            alumnoEsp : [],
            search_info : ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/api/alumnos').then(
            response => {
                this.setState({
                    alumnos: response.data
                });
        });
        //Modal.setAppElement('body');
    }

    onEnter(e){
        var search_info = this.state.search_info;
        
        if (search_info != "") {
            
            axios.get('http://localhost:4200/api/search/alumnos/'+ search_info).then(
                response => {
                    this.setState({
                        alumnos: response.data
                    });
            });
            
         }
           else
            {
                axios.get('http://localhost:4200/api/alumnos').then(
                    response => {
                        this.setState({
                            alumnos: response.data
                        });
                });
            } 
        

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
                axios.delete('http://localhost:4200/api/alumnos/delete/' + alumno_id)
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
                'El curso ha sido elimnado con exito',
                'success'
              )
            }
          })

    }

    toggleModal(alumno_id){
        console.log(alumno_id);
        this.setState({isActive: true});
        axios.get('http://localhost:4200/api/alumno/' + alumno_id).then(
            response => {
                this.setState({
                    alumnoEsp: response.data
                    
                });
        });
    }

    closeModal(){
        this.setState({isActive:false});
        

    }

    onChangeAlumno_Nombre(e) {
        this.state.alumnoEsp.nombre = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_AppellidoPaterno(e) {
        this.state.alumnoEsp.appellidoPaterno = e.target.value;
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

    onChangeAlumno_Ciudad(e) {
        this.state.alumnoEsp.ciudad = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Municipio(e) {
        this.state.alumnoEsp.municipio = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_Genero(e) {
        this.state.alumnoEsp.genero = e.target.value;
        this.forceUpdate();
    }

    onChangeAlumno_FechaNacimiento(e) {
        this.state.alumnoEsp.fechaNacimiento = e.target.value;
        this.forceUpdate();
    }
    onChangeSearch(e){
        this.state.search_info = e.target.value;
        this.forceUpdate();
    }

    onSubmit(e) {
        
        var alumno_id = this.state.alumnoEsp.id;
        const alumno = {
            alumno_nombre : this.state.alumnoEsp.nombre,
            alumno_appellidoPaterno : this.state.alumnoEsp.appellidoPaterno,
            alumno_apellidoMaterno : this.state.alumnoEsp.apellidoMaterno,
            alumno_correo : this.state.alumnoEsp.correo,
            alumno_pais : this.state.alumnoEsp.pais,
            alumno_estado : this.state.alumnoEsp.estado,
            alumno_ciudad : this.state.alumnoEsp.ciudad,
            alumno_municipio : this.state.alumnoEsp.municipio,
            alumno_genero : this.state.alumnoEsp.genero,
            alumno_fechaNacimiento : this.state.alumnoEsp.fechaNacimiento

        }
        
        axios.put('http://localhost:4200/api/alumno/update/' + alumno_id, alumno).then(
            response =>{
                axios.get('http://localhost:4200/api/alumnos').then(
                    response => {
                        this.setState({
                            alumnos: response.data
                        });
                });
                }
            
        );
        

    }

    render() {
        return (
<Router>
    <div className="col-8 p-0">
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
        <div className="row">
            <h1>alumno</h1>
        </div>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Pais fin</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
{
    this.state.alumnos.map(alumno => {
        return (
            <tr>
                <th scope="row">{alumno.id}</th>
                <td>{alumno.nombre}</td>
                <td>{alumno.correo}</td>
                <td>{alumno.pais}</td>
                <td><button onClick={this.onDelete.bind(this,alumno.id)}>Delete</button></td>
                <td><button onClick={this.toggleModal.bind(this, alumno.id)}>Detalle</button></td>
                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                    <button onClick={this.closeModal.bind(this)}>Hide Modal</button>
                        <div className="form-group">                         
                            <label htmlFor="alumno_nombre">Nombre</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_nombre"
                                aria-describedby="nombre"
                                value={this.state.alumnoEsp.nombre} 
                                onChange={this.onChangeAlumno_Nombre} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="alumno_appellidoPaterno">Apellido Paterno</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_nombre"
                                aria-describedby="nombre"
                                value={this.state.alumnoEsp.appellidoPaterno} 
                                onChange={this.onChangeAlumno_AppellidoPaterno} />
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
                            <label htmlFor="alumno_ciudad">Ciudad</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_ciudad"
                                aria-describedby="nombre"
                                value={this.state.alumnoEsp.ciudad} 
                                onChange={this.onChangeAlumno_Ciudad} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="alumno_municipio">Municipio</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_municipio"
                                aria-describedby="nombre"
                                value={this.state.alumnoEsp.municipio} 
                                onChange={this.onChangeAlumno_Municipio} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="alumno_genero">Genero</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_genero"
                                aria-describedby="nombre"
                                value={this.state.alumnoEsp.genero} 
                                onChange={this.onChangeAlumno_Genero} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="alumno_fechaNacimiento">Fecha de nacimiento</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_fechaNacimiento"
                                aria-describedby="nombre"
                                value={this.state.alumnoEsp.fechaNacimiento} 
                                onChange={this.onChangeAlumno_FechaNacimiento} />
                        </div>

                         <button onClick={this.onSubmit.bind(this,alumno.id)}>Actualizar</button> 
                </Modal>
            </tr>
                )
                                })
}
            </tbody>
        </table>
    </div>
    <div className="row">
        <a href="/index/alumnos/nuevo">Agregar alumnos</a>
    </div>
    </div>
    </div>
</Router>
        );
    }
}

if (document.getElementById('Alumnos')) {
    ReactDOM.render(<Alumnos />, document.getElementById('alumnos'));
}
