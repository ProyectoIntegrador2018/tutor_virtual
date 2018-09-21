import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Cursos_New extends Component {

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
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            curso_nombre : "",
            curso_clave : "",
            curso_fechaInicioInscripcion : "",
            curso_fechaFinInscripcion : "",
            curso_fechaInicio : "",
            curso_fechaFin : "",
            curso_reconocimiento : "",
            curso_horas : ""
        }
    }

    onChangeCurso_Nombre(e) {
        this.setState({
            curso_nombre : e.target.value
        });
    }

    onChangeCurso_Clave(e) {
        this.setState({
            curso_clave : e.target.value
        });
    }

    onChangeCurso_FechaInicioInscripcion(e) {
        this.setState({
            curso_fechaInicioInscripcion : e.target.value
        });
    }

    onChangeCurso_FechaFinInscripcion(e) {
        this.setState({
            curso_fechaFinInscripcion : e.target.value
        });
    }

    onChangeCurso_FechaInicio(e) {
        this.setState({
            curso_fechaInicio : e.target.value
        });
    }

    onChangeCurso_FechaFin(e) {
        this.setState({
            curso_fechaFin : e.target.value
        });
    }

    onChangeCurso_Reconocimiento(e) {
        this.setState({
            curso_reconocimiento : e.target.value
        });
    }

    onChangeCurso_Horas(e) {
        this.setState({
            curso_horas : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const curso = {
            curso_nombre : this.state.curso_nombre,
            curso_clave : this.state.curso_clave,
            curso_fechaInicioInscripcion : this.state.curso_fechaInicioInscripcion,
            curso_fechaFinInscripcion : this.state.curso_fechaFinInscripcion,
            curso_fechaInicio : this.state.curso_fechaInicio,
            curso_fechaFin : this.state.curso_fechaFin,
            curso_reconocimiento : this.state.curso_reconocimiento,
            curso_horas : this.state.curso_horas
        }

        axios.post('http://localhost:4200/api/curso/store', curso).then(
            response => Console.log(response.data)
        );
    }

    render() {
        return (
            <Router>
                {/*Content column*/}
                <div className="col-8 p-4">
                    <div className="row">
                        <h1>Nuevo curso</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="curso_nombre">Nombre</label>
                            <input type="text"
                            className="form-control"
                            id="curso_nombre"
                            aria-describedby="nombre"
                            value={this.state.curso_nombre}
                            onChange={this.onChangeCurso_Nombre}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_clave">Clave</label>
                            <input type="text"
                            className="form-control"
                            id="curso_clave"
                            aria-describedby="clave"
                            value={this.state.curso_clave}
                            onChange={this.onChangeCurso_Clave}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaInicioInscripcion">Fecha de inicio de inscripcion</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaInicioInscripcion"
                            aria-describedby="fechaInicioInscripcion"
                            value={this.state.curso_fechaInicioInscripcion}
                            onChange={this.onChangeCurso_FechaInicioInscripcion}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaFinInscripcion">Fecha de fin de inscripcion</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaFinInscripcion"
                            aria-describedby="fechaFinInscripcion"
                            value={this.state.curso_fechaFinInscripcion}
                            onChange={this.onChangeCurso_FechaFinInscripcion}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaInicio">Fecha de inicio del curso</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaInicio"
                            aria-describedby="fechaInicio"
                            value={this.state.curso_fechaInicio}
                            onChange={this.onChangeCurso_FechaInicio}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_fechaFin">Fecha de fin del curso</label>
                            <input type="text"
                            className="form-control"
                            id="curso_fechaFin"
                            aria-describedby="fechaFin"
                            value={this.state.curso_fechaFin}
                            onChange={this.onChangeCurso_FechaFin}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_clave">Tipo de reconocimiento</label>
                            <input type="text"
                            className="form-control"
                            id="curso_reconocimiento"
                            aria-describedby="reconocimiento"
                            value={this.state.curso_reconocimiento}
                            onChange={this.onChangeCurso_Reconocimiento}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="curso_clave">Duración del curso</label>
                            <input type="text"
                            className="form-control"
                            id="curso_horas"
                            aria-describedby="horas"
                            value={this.state.curso_horas}
                            onChange={this.onChangeCurso_Horas}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Crear</button>
                    </form>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('cursos')) {
    ReactDOM.render(<Cursos_New />, document.getElementById('cursos'));
}
