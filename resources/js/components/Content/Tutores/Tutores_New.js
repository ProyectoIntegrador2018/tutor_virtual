import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default class Tutores_New extends Component {

    //nombre apellidoPaterno apellidoMaterno correo pais estado ciudad municipio genero fechaNacimiento
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTutor_Username = this.onChangeTutor_Username.bind(this);
        this.onChangeTutor_Password = this.onChangeTutor_Password.bind(this);
        this.onChangeTutor_Nombres = this.onChangeTutor_Nombres.bind(this);
        this.onChangeTutor_ApellidoPaterno = this.onChangeTutor_ApellidoPaterno.bind(this);
        this.onChangeTutor_ApellidoMaterno = this.onChangeTutor_ApellidoMaterno.bind(this);
        this.onChangeTutor_Correo = this.onChangeTutor_Correo.bind(this);
        this.onChangeTutor_Pais = this.onChangeTutor_Pais.bind(this);
        this.onChangeTutor_Estado = this.onChangeTutor_Estado.bind(this);
        this.onChangeTutor_Ciudad_Municipio = this.onChangeTutor_Ciudad_Municipio.bind(this);
        this.onChangeTutor_Socio = this.onChangeTutor_Socio.bind(this);
        this.onChangeTutor_Organizacion = this.onChangeTutor_Organizacion.bind(this);
        this.onChangeTutor_Rol = this.onChangeTutor_Rol.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            tutor_username : "",
            tutor_password : "",
            tutor_nombres : "",
            tutor_apellidoPaterno : "",
            tutor_apellidoMaterno : "",
            tutor_correo : "",
            tutor_pais : "",
            tutor_estado : "",
            tutor_ciudad_municipio : "",
            tutor_socio : "",
            tutor_organizacion : "",
            tutor_rol : ""
        }
    }

    onChangeTutor_Username(e) {
        this.setState({
            tutor_username : e.target.value
        });
    }

    onChangeTutor_Password(e) {
        this.setState({
            tutor_password : e.target.value
        });
    }

    onChangeTutor_Nombres(e) {
        this.setState({
            tutor_nombres : e.target.value
        });
    }

    onChangeTutor_ApellidoPaterno(e) {
        this.setState({
            tutor_apellidoPaterno : e.target.value
        });
    }

    onChangeTutor_ApellidoMaterno(e) {
        this.setState({
            tutor_apellidoMaterno : e.target.value
        });
    }

    onChangeTutor_Correo(e) {
        this.setState({
            tutor_correo : e.target.value
        });
    }

    onChangeTutor_Pais(e) {
        this.setState({
            tutor_pais : e.target.value
        });
    }

    onChangeTutor_Estado(e) {
        this.setState({
            tutor_estado : e.target.value
        });
    }

    onChangeTutor_Ciudad_Municipio(e) {
        this.setState({
            tutor_ciudad_municipio : e.target.value
        });
    }

    onChangeTutor_Socio(e) {
        this.setState({
            tutor_socio : e.target.value
        });
    }

    onChangeTutor_Organizacion(e) {
        this.setState({
            tutor_organizacion : e.target.value
        });
    }

    onChangeTutor_Rol(e) {
        this.setState({
            tutor_rol : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const tutor = {
            tutor_username : this.state.tutor_username,
            tutor_password : this.state.tutor_password,
            tutor_nombres : this.state.tutor_nombres,
            tutor_apellidoPaterno : this.state.tutor_apellidoPaterno,
            tutor_apellidoMaterno : this.state.tutor_apellidoMaterno,
            tutor_correo : this.state.tutor_correo,
            tutor_pais : this.state.tutor_pais,
            tutor_estado : this.state.tutor_estado,
            tutor_ciudad_municipio : this.state.tutor_ciudad_municipio,
            tutor_socio : this.state.tutor_socio,
            tutor_organizacion : this.state.tutor_organizacion,
            tutor_rol : this.state.tutor_rol
        }

        axios.post('/api/tutor/store', tutor).then(
            (response) => {
            // Success
            swal(
                'Bien',
                'Tutor creado con exito',
                'success'
              )
        })
        .catch((error) => {
            swal({
                type: 'error',
                title: 'Error al agregar tutor',
                text: 'Porfavor verifica la informacion y vuelve a intentar'
              })
        })
    }

    render() {
        return (
            <Router>
                {/*Content column*/}
                <div className="col-8 p-4 main">
                    <div className="row">
                        <h1>Nuevo tutor</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="tutor_username">Username</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_username"
                                aria-describedby="username"
                                onChange={this.onChangeTutor_Username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_password">Password</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_password"
                                aria-describedby="password"
                                onChange={this.onChangeTutor_Password} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_nombres">Nombres</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_nombres"
                                aria-describedby="nombres"
                                onChange={this.onChangeTutor_Nombres} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_apellidoPaterno">Apellido Paterno</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_nombre"
                                aria-describedby="nombre"
                                onChange={this.onChangeTutor_ApellidoPaterno} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_apellidoMaterno">Apellido Materno</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_apellidoMaterno"
                                aria-describedby="nombre"
                                onChange={this.onChangeTutor_ApellidoMaterno} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_correo">Correo</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_correo"
                                aria-describedby="nombre"
                                onChange={this.onChangeTutor_Correo} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_pais">Pais</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_pais"
                                aria-describedby="nombre"
                                onChange={this.onChangeTutor_Pais} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_estado">Estado</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_estado"
                                aria-describedby="nombre"
                                onChange={this.onChangeTutor_Estado} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_ciudad_municipio">Ciudad_Municipio</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_ciudad_municipio"
                                aria-describedby="ciudad_municipio"
                                onChange={this.onChangeTutor_Ciudad_Municipio} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_socio">Socio</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_socio"
                                aria-describedby="socio"
                                onChange={this.onChangeTutor_Socio} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_organizacion">Organizacion</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_organizacion"
                            aria-describedby="organizacion"
                            onChange={this.onChangeTutor_Organizacion}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_rol">Rol</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_rol"
                            aria-describedby="rol"
                            onChange={this.onChangeTutor_Rol}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Crear</button>
                    </form>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('tutores')) {
    ReactDOM.render(<Tutores_New />, document.getElementById('tutores'));
}
