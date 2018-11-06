import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
// ES6 Modules or TypeScript
import swal from 'sweetalert2'

export default class Cursos_Listing extends Component {

    constructor() {
        super();
        this.onChangeCurso_Nombre = this.onChangeCurso_Nombre.bind(this);
        this.onChangeCurso_Clave = this.onChangeCurso_Clave.bind(this);
        this.onChangeCurso_FechaInicioInscripcion = this.onChangeCurso_FechaInicioInscripcion.bind(this);
        this.onChangeCurso_FechaFinInscripcion = this.onChangeCurso_FechaFinInscripcion.bind(this);
        this.onChangeCurso_FechaInicio = this.onChangeCurso_FechaInicio.bind(this);
        this.onChangeCurso_FechaFin = this.onChangeCurso_FechaFin.bind(this);
        this.onChangeCurso_Reconocimiento = this.onChangeCurso_Reconocimiento.bind(this);
        this.onChangeCurso_Horas = this.onChangeCurso_Horas.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state = {
            cursos : [],
            isActive : false,
            cursoEsp : [],
            search_info : ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/api/cursos').then(
            response => {
                this.setState({
                    cursos: response.data
                });
        });
        Modal.setAppElement('body');
    }


    onEnter(e){
        var search_info = this.state.search_info;
        if (search_info != "") {
            axios.get('http://localhost:4200/api/search/cursos/'+ search_info).then(
                response => {
                    this.setState({
                        cursos: response.data
                    });
                }
            );
        }
        else
        {
            axios.get('http://localhost:4200/api/cursos').then(
                response => {
                    this.setState({
                        cursos: response.data
                    });
                }
            );
        }
    }

    onDelete(curso_id){
        console.log(curso_id);
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
                axios.delete('http://localhost:4200/api/cursos/delete/' + curso_id)
                    .then(response => {
                        var cursos = this.state.cursos;
                        for(var  i = 0; i< cursos.length; i++) {
                            if(cursos[i].id == curso_id){
                                cursos.splice(i,1);
                                this.setState({cursos:cursos});
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

    toggleModal(curso_id){
        console.log(curso_id);
        this.setState({isActive: true});
        axios.get('http://localhost:4200/api/curso/' + curso_id).then(
            response => {
                this.setState({
                    cursoEsp: response.data
                });
            }
        );
    }

    closeModal(){
        this.setState({isActive:false});
    }

    onSubmit(e) {
        //e.preventDefault();
        var curso_id = this.state.cursoEsp.id;
        const curso = {
            curso_nombre : this.state.cursoEsp.nombre,
            curso_clave : this.state.cursoEsp.clave,
            curso_fechaInicioInscripcion : this.state.cursoEsp.fechaInicioInscripcion,
            curso_fechaFinInscripcion : this.state.cursoEsp.fechaFinInscripcion,
            curso_fechaInicio : this.state.cursoEsp.fechaInicio,
            curso_fechaFin : this.state.cursoEsp.fechaFin,
            curso_reconocimiento : this.state.cursoEsp.reconocimiento,
            curso_horas : this.state.cursoEsp.horas
        }
        
        axios.put('http://localhost:4200/api/curso/update/' + curso_id, curso).then(
            response =>{
                axios.get('http://localhost:4200/api/cursos').then(
                    response => {
                        this.setState({
                            cursos: response.data
                        });
                        swal(
                            'Bien',
                            'Curso modificado con exito',
                            'success'
                          )
                    }
                );
            }
        );
    }

    onChangeCurso_Nombre(e) { 
        this.state.cursoEsp.nombre = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_Clave(e) {
        this.state.cursoEsp.clave = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_FechaInicioInscripcion(e) {
        this.state.cursoEsp.fechaInicioInscripcion = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_FechaFinInscripcion(e) {
        this.state.cursoEsp.fechaFinInscripcion = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_FechaInicio(e) {
        this.state.cursoEsp.fechaInicio = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_FechaFin(e) {
        this.state.cursoEsp.fechaFin = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_Reconocimiento(e) {
        this.state.cursoEsp.reconocimiento = e.target.value;
        this.forceUpdate();
    }

    onChangeCurso_Horas(e) {
        this.state.cursoEsp.horas = e.target.value;
        this.forceUpdate();
    }

    onChangeSearch(e){
        this.state.search_info = e.target.value;
        this.forceUpdate();
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
                                placeholder="Buscar curso por nombre..." 
                                aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    
                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">

                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <h1>Cursos</h1>
                                </div>

                                <div className="col-auto">
                                    <a href="/index/cursos/nuevo" className="font-weight-bold">Agregar nuevo</a>
                                </div>
                            </div>
                            
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Clave</th>
                                        <th scope="col">Fecha inicio</th>
                                        <th scope="col">Fecha fin</th>
                                        <th scope="col">Acciones</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cursos.map(curso => {
                                        return (
                                            <tr>
                                                <th scope="row">{curso.id}</th>
                                                <td>{curso.nombre}</td>
                                                <td>{curso.clave}</td>
                                                <td>{curso.fechaInicio}</td>
                                                <td>{curso.fechaFin}</td>
                                                <td><button onClick={this.onDelete.bind(this,curso.id)}>Eliminar</button></td>
                                                <td><button onClick={this.toggleModal.bind(this, curso.id)}>Detalle</button></td>
                                                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                                                    <button onClick={this.closeModal.bind(this)}>Regresar</button>
                                                    <div className="form-group">
                                                        <label htmlFor="curso_nombre">Nombre</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_nombre"
                                                            aria-describedby="nombre"
                                                            value={this.state.cursoEsp.nombre} 
                                                            onChange={this.onChangeCurso_Nombre} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_clave">Clave</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_clave"
                                                            aria-describedby="clave"
                                                            value={this.state.cursoEsp.clave}
                                                            onChange={this.onChangeCurso_Clave}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_fechaInicioInscripcion">Fecha de inicio de inscripcion</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_fechaInicioInscripcion"
                                                            aria-describedby="fechaInicioInscripcion"
                                                            value={this.state.cursoEsp.fechaInicioInscripcion}
                                                            onChange={this.onChangeCurso_FechaInicioInscripcion}
                                                            placeholder="AAAA-MM-DD"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_fechaFinInscripcion">Fecha de fin de inscripcion</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_fechaFinInscripcion"
                                                            aria-describedby="fechaFinInscripcion"
                                                            value={this.state.cursoEsp.fechaFinInscripcion}
                                                            onChange={this.onChangeCurso_FechaFinInscripcion}
                                                            placeholder="AAAA-MM-DD"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_fechaInicio">Fecha de inicio del curso</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_fechaInicio"
                                                            aria-describedby="fechaInicio"
                                                            value={this.state.cursoEsp.fechaInicio}
                                                            onChange={this.onChangeCurso_FechaInicio}
                                                            placeholder="AAAA-MM-DD"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_fechaFin">Fecha de fin del curso</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_fechaFin"
                                                            aria-describedby="fechaFin"
                                                            value={this.state.cursoEsp.fechaFin}
                                                            onChange={this.onChangeCurso_FechaFin}
                                                            placeholder="AAAA-MM-DD"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_clave">Tipo de reconocimiento</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_reconocimiento"
                                                            aria-describedby="reconocimiento"
                                                            value={this.state.cursoEsp.reconocimiento}
                                                            onChange={this.onChangeCurso_Reconocimiento}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="curso_clave">Duración del curso</label>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="curso_horas"
                                                            aria-describedby="horas"
                                                            value={this.state.cursoEsp.horas}
                                                            onChange={this.onChangeCurso_Horas}/>
                                                    </div>
                                                    <button onClick={this.onSubmit.bind(this,curso.id)}>Actualizar</button>
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

if (document.getElementById('cursos')) {
    ReactDOM.render(<Cursos />, document.getElementById('cursos'));
}
