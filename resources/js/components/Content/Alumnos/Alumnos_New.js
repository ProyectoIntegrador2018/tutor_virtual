import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default class Alumnos_New extends Component {

    //nombre appellidoPaterno apellidoMaterno correo pais estado ciudad municipio genero fechaNacimiento
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
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            alumno_nombre : "",
            alumno_appellidoPaterno : "",
            alumno_apellidoMaterno : "",
            alumno_correo : "",
            alumno_pais : "",
            alumno_estado : "",
            alumno_ciudad : "",
            alumno_municipio : "",
            alumno_genero : "",
            alumno_fechaNacimiento : ""
        }
    }

    onChangeAlumno_Nombre(e) {
        this.setState({
            alumno_nombre : e.target.value
        });
    }

    onChangeAlumno_AppellidoPaterno(e) {
        this.setState({
            alumno_appellidoPaterno : e.target.value
        });
    }

    onChangeAlumno_ApellidoMaterno(e) {
        this.setState({
            alumno_apellidoMaterno : e.target.value
        });
    }

    onChangeAlumno_Correo(e) {
        this.setState({
            alumno_correo : e.target.value
        });
    }

    onChangeAlumno_Pais(e) {
        this.setState({
            alumno_pais : e.target.value
        });
    }

    onChangeAlumno_Estado(e) {
        this.setState({
            alumno_estado : e.target.value
        });
    }

    onChangeAlumno_Ciudad(e) {
        this.setState({
            alumno_ciudad : e.target.value
        });
    }

    onChangeAlumno_Municipio(e) {
        this.setState({
            alumno_municipio : e.target.value
        });
    }

    onChangeAlumno_Genero(e) {
        this.setState({
            alumno_genero : e.target.value
        });
    }

    onChangeAlumno_FechaNacimiento(e) {
        this.setState({
            alumno_fechaNacimiento : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const alumno = {
            alumno_nombre : this.state.alumno_nombre,
            alumno_appellidoPaterno : this.state.alumno_appellidoPaterno,
            alumno_apellidoMaterno : this.state.alumno_apellidoMaterno,
            alumno_correo : this.state.alumno_correo,
            alumno_pais : this.state.alumno_pais,
            alumno_estado : this.state.alumno_estado,
            alumno_ciudad : this.state.alumno_ciudad,
            alumno_municipio : this.state.alumno_municipio,
            alumno_genero : this.state.alumno_genero,
            alumno_fechaNacimiento : this.state.alumno_fechaNacimiento
        }

        axios.post('http://localhost:4200/api/alumno/store', alumno).then(
            (response) => {
            // Success
            swal(
                'Bien',
                'Alumno creado con exito',
                'success'
              )
        })
        .catch((error) => {
            swal({
                type: 'error',
                title: 'Error al agregar alumno',
                text: 'Porfavor verifica la informacion y vuelve a intentar'
              })
        })
    }

    render() {
        return (
            <Router>
                {/*Content column*/}
                <div className="col-8 p-4">
                    <div className="row">
                        <h1>Nuevo alumno</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="alumno_nombre">Nombre</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_nombre"
                            aria-describedby="nombre"
                            value={this.state.alumno_nombre}
                            onChange={this.onChangeAlumno_Nombre}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_appellidoPaterno">Appellido Paterno</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_appellidoPaterno"
                            aria-describedby="appellidoPaterno"
                            value={this.state.alumno_appellidoPaterno}
                            onChange={this.onChangeAlumno_AppellidoPaterno}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_apellidoMaterno">Apellido Materno</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_apellidoMaterno"
                            aria-describedby="apellidoMaterno"
                            value={this.state.alumno_apellidoMaterno}
                            onChange={this.onChangeAlumno_ApellidoMaterno}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_correo">Correo</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_correo"
                            aria-describedby="correo"
                            value={this.state.alumno_correo}
                            onChange={this.onChangeAlumno_Correo}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_pais">Pais</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_pais"
                            aria-describedby="pais"
                            value={this.state.alumno_pais}
                            onChange={this.onChangeAlumno_Pais}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_estado">Estado</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_estado"
                            aria-describedby="estado"
                            value={this.state.alumno_estado}
                            onChange={this.onChangeAlumno_Estado}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_ciudad">Ciudad</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_ciudad"
                            aria-describedby="ciudad"
                            value={this.state.alumno_ciudad}
                            onChange={this.onChangeAlumno_Ciudad}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_municipio">Municipio</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_municipio"
                            aria-describedby="municipio"
                            value={this.state.alumno_municipio}
                            onChange={this.onChangeAlumno_Municipio}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_genero">Género</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_municipio"
                            aria-describedby="municipio"
                            value={this.state.alumno_genero}
                            onChange={this.onChangeAlumno_Genero}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_fechaNacimiento">Fecha de nacimiento</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_municipio"
                            aria-describedby="municipio"
                            value={this.state.alumno_fechaNacimiento}
                            onChange={this.onChangeAlumno_FechaNacimiento}
                            placeholder="AAAA-MM-DD"/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Crear</button>
                    </form>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('alumnos')) {
    ReactDOM.render(<Alumnos_New />, document.getElementById('alumnos'));
}
