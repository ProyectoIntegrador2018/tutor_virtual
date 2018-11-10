import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default class Tutores_New extends Component {

    //nombre apellidoPaterno apellidoMaterno correo pais estado ciudad municipio genero fechaNacimiento
    constructor() {
        super();
        this.onChangeTutor_Nombre = this.onChangeTutor_Nombre.bind(this);
        this.onChangeTutor_ApellidoPaterno = this.onChangeTutor_ApellidoPaterno.bind(this);
        this.onChangeTutor_ApellidoMaterno = this.onChangeTutor_ApellidoMaterno.bind(this);
        this.onChangeTutor_Correo = this.onChangeTutor_Correo.bind(this);
        this.onChangeTutor_Pais = this.onChangeTutor_Pais.bind(this);
        this.onChangeTutor_Estado = this.onChangeTutor_Estado.bind(this);
        this.onChangeTutor_Ciudad = this.onChangeTutor_Ciudad.bind(this);
        this.onChangeTutor_Municipio = this.onChangeTutor_Municipio.bind(this);
        this.onChangeTutor_Genero = this.onChangeTutor_Genero.bind(this);
        this.onChangeTutor_Curso = this.onChangeTutor_Curso.bind(this);
        this.onChangeTutor_Institucion = this.onChangeTutor_Institucion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            tutor_nombre : "",
            tutor_apellidoPaterno : "",
            tutor_apellidoMaterno : "",
            tutor_correo : "",
            tutor_pais : "",
            tutor_estado : "",
            tutor_ciudad : "",
            tutor_municipio : "",
            tutor_genero : "",
            tutor_curso : "",
            tutor_institucion : ""
        }
    }

    onChangeTutor_Nombre(e) {
        this.setState({
            tutor_nombre : e.target.value
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

    onChangeTutor_Ciudad(e) {
        this.setState({
            tutor_ciudad : e.target.value
        });
    }

    onChangeTutor_Municipio(e) {
        this.setState({
            tutor_municipio : e.target.value
        });
    }

    onChangeTutor_Genero(e) {
        this.setState({
            tutor_genero : e.target.value
        });
    }

    onChangeTutor_Curso(e) {
        this.setState({
            tutor_curso : e.target.value
        });
    }
    onChangeTutor_Institucion(e) {
        this.setState({
            tutor_institucion : e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const tutor = {
            tutor_nombre : this.state.tutor_nombre,
            tutor_apellidoPaterno : this.state.tutor_apellidoPaterno,
            tutor_apellidoMaterno : this.state.tutor_apellidoMaterno,
            tutor_correo : this.state.tutor_correo,
            tutor_pais : this.state.tutor_pais,
            tutor_estado : this.state.tutor_estado,
            tutor_ciudad : this.state.tutor_ciudad,
            tutor_municipio : this.state.tutor_municipio,
            tutor_genero : this.state.tutor_genero,
            tutor_curso : this.state.tutor_curso,
            tutor_institucion : this.state.tutor_institucion
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
                            <label htmlFor="tutor_nombre">Nombre</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_nombre"
                            aria-describedby="nombre"
                            value={this.state.tutor_nombre}
                            onChange={this.onChangeTutor_Nombre}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_apellidoPaterno">Apellido Paterno</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_apellidoPaterno"
                            aria-describedby="apellidoPaterno"
                            value={this.state.tutor_apellidoPaterno}
                            onChange={this.onChangeTutor_ApellidoPaterno}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_apellidoMaterno">Apellido Materno</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_apellidoMaterno"
                            aria-describedby="apellidoMaterno"
                            value={this.state.tutor_apellidoMaterno}
                            onChange={this.onChangeTutor_ApellidoMaterno}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_correo">Correo</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_correo"
                            aria-describedby="correo"
                            value={this.state.tutor_correo}
                            onChange={this.onChangeTutor_Correo}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_pais">Pais</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_pais"
                            aria-describedby="pais"
                            value={this.state.tutor_pais}
                            onChange={this.onChangeTutor_Pais}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_estado">Estado</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_estado"
                            aria-describedby="estado"
                            value={this.state.tutor_estado}
                            onChange={this.onChangeTutor_Estado}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_ciudad">Ciudad</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_ciudad"
                            aria-describedby="ciudad"
                            value={this.state.tutor_ciudad}
                            onChange={this.onChangeTutor_Ciudad}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_municipio">Municpio</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_municipio"
                            aria-describedby="municipio"
                            value={this.state.tutor_municipio}
                            onChange={this.onChangeTutor_Municipio}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_genero">Genero</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_municipio"
                            aria-describedby="municipio"
                            value={this.state.tutor_genero}
                            onChange={this.onChangeTutor_Genero}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_curso">Curso</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_Curso"
                            aria-describedby="curso"
                            value={this.state.tutor_curso}
                            onChange={this.onChangeTutor_Curso}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_institucion">Institucion</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_Institucion"
                            aria-describedby="institucion"
                            value={this.state.tutor_institucion}
                            onChange={this.onChangeTutor_Institucion}/>
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
