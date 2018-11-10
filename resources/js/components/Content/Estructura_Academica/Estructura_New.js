import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default class Estructura_New extends Component {

    //nombre apellidoPaterno apellidoMaterno correo pais estado ciudad municipio genero fechaNacimiento
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
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
        this.state = {
            directivo_username : "",
            directivo_password : "",
            directivo_nombres : "",
            directivo_apellidoPaterno : "",
            directivo_apellidoMaterno : "",
            directivo_correo : "",
            directivo_pais : "",
            directivo_estado : "",
            directivo_ciudad_municipio : "",
            directivo_socio : "",
            directivo_organizacion : "",
            directivo_rol : ""
        }
    }

    onChangeDirectivo_Username(e) {
        this.setState({
            directivo_username : e.target.value
        });
    }

    onChangeDirectivo_Password(e) {
        this.setState({
            directivo_password : e.target.value
        });
    }

    onChangeDirectivo_Nombres(e) {
        this.setState({
            directivo_nombres : e.target.value
        });
    }

    onChangeDirectivo_ApellidoPaterno(e) {
        this.setState({
            directivo_apellidoPaterno : e.target.value
        });
    }

    onChangeDirectivo_ApellidoMaterno(e) {
        this.setState({
            directivo_apellidoMaterno : e.target.value
        });
    }

    onChangeDirectivo_Correo(e) {
        this.setState({
            directivo_correo : e.target.value
        });
    }

    onChangeDirectivo_Pais(e) {
        this.setState({
            directivo_pais : e.target.value
        });
    }

    onChangeDirectivo_Estado(e) {
        this.setState({
            directivo_estado : e.target.value
        });
    }

    onChangeDirectivo_Ciudad_Municipio(e) {
        this.setState({
            directivo_ciudad_municipio : e.target.value
        });
    }

    onChangeDirectivo_Socio(e) {
        this.setState({
            directivo_socio : e.target.value
        });
    }

    onChangeDirectivo_Organizacion(e) {
        this.setState({
            directivo_organizacion : e.target.value
        });
    }

    onChangeDirectivo_Rol(e) {
        this.setState({
            directivo_rol : e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const directivo = {
            directivo_username : this.state.directivo_username,
            directivo_password : this.state.directivo_password,
            directivo_nombres : this.state.directivo_nombres,
            directivo_apellidoPaterno : this.state.directivo_apellidoPaterno,
            directivo_apellidoMaterno : this.state.directivo_apellidoMaterno,
            directivo_correo : this.state.directivo_correo,
            directivo_pais : this.state.directivo_pais,
            directivo_estado : this.state.directivo_estado,
            directivo_ciudad_municipio : this.state.directivo_ciudad_municipio,
            directivo_socio : this.state.directivo_socio,
            directivo_organizacion : this.state.directivo_organizacion,
            directivo_rol : this.state.directivo_rol
        }

        axios.post('/api/directivo/store', directivo).then(
            (response) => {
            // Success
            swal(
                'Bien',
                'Directivo creado con exito',
                'success'
              )
        })
        .catch((error) => {
            swal({
                type: 'error',
                title: 'Error al agregar directivo',
                text: 'Porfavor verifica la informacion y vuelve a intentar'
              })
        })
    }

    render() {
        return (
            <Router>
                {/*Content column*/}
                <div className="col-10 p-4 main">
                    <div className="row">
                        <h1>Nuevo directivo</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="directivo_username">Username</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_username"
                                aria-describedby="username"
                                onChange={this.onChangeDirectivo_Username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_password">Password</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_password"
                                aria-describedby="password"
                                onChange={this.onChangeDirectivo_Password} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_nombres">Nombres</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_nombres"
                                aria-describedby="nombres"
                                onChange={this.onChangeDirectivo_Nombres} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_apellidoPaterno">Apellido Paterno</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_nombre"
                                aria-describedby="nombre"
                                onChange={this.onChangeDirectivo_ApellidoPaterno} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_apellidoMaterno">Apellido Materno</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_apellidoMaterno"
                                aria-describedby="nombre"
                                onChange={this.onChangeDirectivo_ApellidoMaterno} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_correo">Correo</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_correo"
                                aria-describedby="nombre"
                                onChange={this.onChangeDirectivo_Correo} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_pais">Pais</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_pais"
                                aria-describedby="nombre"
                                onChange={this.onChangeDirectivo_Pais} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_estado">Estado</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_estado"
                                aria-describedby="nombre"
                                onChange={this.onChangeDirectivo_Estado} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_ciudad_municipio">Ciudad_Municipio</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_ciudad_municipio"
                                aria-describedby="ciudad_municipio"
                                onChange={this.onChangeDirectivo_Ciudad_Municipio} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_socio">Socio</label>
                                <input type="text"
                                className="form-control"
                                id="directivo_socio"
                                aria-describedby="socio"
                                onChange={this.onChangeDirectivo_Socio} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="directivo_organizacion">Organizacion</label>
                            <input type="text"
                            className="form-control"
                            id="directivo_organizacion"
                            aria-describedby="organizacion"
                            onChange={this.onChangeDirectivo_Organizacion}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="directivo_rol">Rol</label>
                            <input type="text"
                            className="form-control"
                            id="directivo_rol"
                            aria-describedby="rol"
                            onChange={this.onChangeDirectivo_Rol}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Crear</button>
                    </form>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('Estructura_New')) {
    ReactDOM.render(<Estructura_New />, document.getElementById('estructura_new'));
}
