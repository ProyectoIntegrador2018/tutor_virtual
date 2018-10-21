import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Curso_Sub extends Component {

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
    
    render() {
        return (
            <div className="col-2 pt-4 px-1 bg-primary" name="subNav">
            
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button type="button" className="btn btn-outline-light btn-lg" onClick={this.toggleModal.bind(this)}>
                            Subir<br/>Excel
                        </button>
                    </div>
                </div>

                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                </Modal>

            </div>
        );
    }
}

if (document.getElementById('cursoSub')) {
    ReactDOM.render(<Curso_Sub />, document.getElementById('cursoSub'));
}
