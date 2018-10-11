import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

export default class Cursos_Listing extends Component {

    constructor() {
        super();
        this.state = {
            cursos : [],
            isActive : false,
            cursoEsp : []
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

    onDelete(curso_id){
        console.log(curso_id);
        axios.delete('http://localhost:4200/api/cursos/delete/' + curso_id)
        .then(response =>{

            var cursos = this.state.cursos;
            for(var  i = 0; i< cursos.length; i++){
                if(cursos[i].id == curso_id){
                    cursos.splice(i,1);
                    this.setState({cursos:cursos});
                }
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
        });
    }

    closeModal(){
        this.setState({isActive:false});
        

    }

    render() {
        return (
            <Router>
                {/*Content column*/}
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
                                <input type="text" className="form-control form-control-lg" placeholder="Buscar curso por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    
                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">
                            <div className="row">
                                <h1>Cursos</h1>
                            </div>
                            
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Clave</th>
                                        <th scope="col">Fecha fin</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cursos.map(curso => {
                                            return (
                                                <tr>
                                                    <th scope="row">{curso.id}</th>
                                                    <td>{curso.nombre}</td>
                                                    <td>{curso.clave}</td>
                                                    <td>{curso.fechaFin}</td>
                                                    <td><button onClick={this.onDelete.bind(this,curso.id)}>Delete</button></td>
                                                    <td><button onClick={this.toggleModal.bind(this, curso.id)}>Detalle</button></td>
                                                    <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                                                        <button onClick={this.closeModal.bind(this)}>Hide Modal</button>
                                                        <div className="form-group">
                                                        
                            <label htmlFor="curso_nombre">Nombre</label>
                            <input readOnly type="text"
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
                            value={this.state.cursoEsp.fechainicioinscripcion}
                            onChange={this.onChangeCurso_FechaInicioInscripcion}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaFinInscripcion">Fecha de fin de inscripcion</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaFinInscripcion"
                            aria-describedby="fechaFinInscripcion"
                            value={this.state.cursoEsp.fechafininscripcion}
                            onChange={this.onChangeCurso_FechaFinInscripcion}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaInicio">Fecha de inicio del curso</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaInicio"
                            aria-describedby="fechaInicio"
                            value={this.state.cursoEsp.fechainicio}
                            onChange={this.onChangeCurso_FechaInicio}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaFin">Fecha de fin del curso</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaFin"
                            aria-describedby="fechaFin"
                            value={this.state.cursoEsp.fechafin}
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
                                                    </Modal>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <a href="/index/cursos/nuevo">Agregar</a>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('cursos')) {
    ReactDOM.render(<Cursos />, document.getElementById('cursos'));
}
