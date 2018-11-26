import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default class Alumnos_New extends Component {

    //nombre apellidoPaterno apellidoMaterno correo pais estado ciudad municipio genero fechaNacimiento
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
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
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            alumno_username : "",
            alumno_password : "",
            alumno_nombres : "",
            alumno_apellidoPaterno : "",
            alumno_apellidoMaterno : "",
            alumno_correo : "",
            alumno_pais : "",
            alumno_estado : "",
            alumno_ciudad_municipio : "",
            alumno_fechaDeNacimiento : "",
            alumno_socio : "",
            alumno_organizacion : "",
            alumno_rol : ""
        }
    }

    onChangeAlumno_Username(e) {
        this.setState({
            alumno_username : e.target.value
        });
    }

    onChangeAlumno_Password(e) {
        this.setState({
            alumno_password : e.target.value
        });
    }

    onChangeAlumno_Nombres(e) {
        this.setState({
            alumno_nombres : e.target.value
        });
    }

    onChangeAlumno_ApellidoPaterno(e) {
        this.setState({
            alumno_apellidoPaterno : e.target.value
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

    onChangeAlumno_Ciudad_Municipio(e) {
        this.setState({
            alumno_ciudad_municipio : e.target.value
        });
    }

    onChangeAlumno_FechaDeNacimiento(e) {
        this.setState({
            alumno_fechaDeNacimiento : e.target.value
        });
    }

    onChangeAlumno_Socio(e) {
        this.setState({
            alumno_socio : e.target.value
        });
    }

    onChangeAlumno_Organizacion(e) {
        this.setState({
            alumno_organizacion : e.target.value
        });
    }

    onChangeAlumno_Rol(e) {
        this.setState({
            alumno_rol : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const alumno = {
            alumno_username : this.state.alumno_username,
            alumno_password : this.state.alumno_password,
            alumno_nombres : this.state.alumno_nombres,
            alumno_apellidoPaterno : this.state.alumno_apellidoPaterno,
            alumno_apellidoMaterno : this.state.alumno_apellidoMaterno,
            alumno_correo : this.state.alumno_correo,
            alumno_pais : this.state.alumno_pais,
            alumno_estado : this.state.alumno_estado,
            alumno_ciudad_municipio : this.state.alumno_ciudad_municipio,
            alumno_fechaDeNacimiento : this.state.alumno_fechaDeNacimiento,
            alumno_socio : this.state.alumno_socio,
            alumno_organizacion : this.state.alumno_organizacion,
            alumno_rol : this.state.alumno_rol
        }

        axios.post('/api/alumno/store', alumno).then(
            (response) => {
                // Success
                swal(
                    'Bien',
                    'Alumno creado con exito',
                    'success'
                )
            }
        )
        .catch((error) => {
                swal({
                    type: 'error',
                    title: 'Error al agregar alumno',
                    text: 'Porfavor verifica la información y vuelve a intentar'
                })
            }
        )
    }

    render() {
        return (
            <Router>
                <div className="col-8 p-4 main"> {/*Content column*/}

                    <div className="row">
                        <h1>Nuevo alumno</h1>
                    </div>

                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="alumno_username">Username</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_username"
                                aria-describedby="username"
                                onChange={this.onChangeAlumno_Username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_password">Password</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_password"
                                aria-describedby="password"
                                onChange={this.onChangeAlumno_Password} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_nombres">Nombres</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_nombres"
                                aria-describedby="nombres"
                                onChange={this.onChangeAlumno_Nombres} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_apellidoPaterno">Apellido Paterno</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_nombre"
                                aria-describedby="nombre"
                                onChange={this.onChangeAlumno_ApellidoPaterno} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_apellidoMaterno">Apellido Materno</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_apellidoMaterno"
                                aria-describedby="nombre"
                                onChange={this.onChangeAlumno_ApellidoMaterno} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_correo">Correo</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_correo"
                                aria-describedby="nombre"
                                onChange={this.onChangeAlumno_Correo} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_pais">Pais</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_pais"
                                aria-describedby="nombre"
                                onChange={this.onChangeAlumno_Pais} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_estado">Estado</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_estado"
                                aria-describedby="nombre"
                                onChange={this.onChangeAlumno_Estado} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_ciudad_municipio">Ciudad/Municipio</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_ciudad_municipio"
                                aria-describedby="ciudad_municipio"
                                onChange={this.onChangeAlumno_Ciudad_Municipio} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_fechaDeNacimiento">Fecha de Nacimiento</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_fechaDeNacimiento"
                                aria-describedby="fechaDeNacimiento"
                                onChange={this.onChangeAlumno_FechaDeNacimiento}
                                placeholder="AAAA-MM-DD" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_socio">Socio</label>
                                <input type="text"
                                className="form-control"
                                id="alumno_socio"
                                aria-describedby="socio"
                                onChange={this.onChangeAlumno_Socio} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alumno_organizacion">Organizacion</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_organizacion"
                            aria-describedby="organizacion"
                            onChange={this.onChangeAlumno_Organizacion}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alumno_rol">Rol</label>
                            <input type="text"
                            className="form-control"
                            id="alumno_rol"
                            aria-describedby="rol"
                            onChange={this.onChangeAlumno_Rol}/>
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
