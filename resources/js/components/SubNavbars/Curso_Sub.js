import React, { Component } from 'react';
import axios, { post } from 'axios';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Curso_Sub extends Component {

    constructor() {
        super();
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.state = {
            isActive : false,
            uploadStatus: false
        }
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);

        axios.post('/api/importCursos', data)
        .then(function (response) {
            this.state.isActive = false;
        })
        .catch(function (error) {
            this.state.isActive = false;
        });

        swal(
            'Listo',
            'Archivo procesado!',
            'success'
        ).then((result) => {
            location.reload();
        })
    }

    toggleModal(){
        this.setState({isActive: true});
    }

    closeModal(){
        this.setState({isActive:false});
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
                    <button className="btn btn-primary" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon="arrow-left" /></button>

                    <h2>Formato requerido del archivo Excel</h2>

                    <p>
                        El archivo excel a utilizar para importar <strong>cursos</strong> debe respetar el siguiente formato para una lectura adecuada.
                    </p>

                    <ul>
                        <li>El archivo de excel deberá tener una sola hoja con la información a importar.</li>
                        <li>La primera fila deberá tener los nombres de las columnas a importar en el siguiente orden:
                            <ul>
                                <li>Curso/Diplomado</li>
                                <li>Clave de cursos (Verificar que sea únicamente la clave del curso)</li>
                                <li>Periodo de Inscripciones
                                    <ul>
                                        <li>Fecha de inicio de inscipción</li>
                                        <li>Fecha de fin de inscipción</li>
                                    </ul>
                                </li>
                                <li>Duración Curso/Diplomado
                                    <ul>
                                        <li>Fecha de inicio</li>
                                        <li>Fecha de fin</li>
                                    </ul>
                                </li>
                                <li>Tipo de reconocimiento</li>
                                <li>Duración del curso (ésta deberá tener sólo números)</li>
                            </ul>
                        </li>
                        <li>Las filas siguientes deberan tener la información de los tutores a importar.</li>
                    </ul>

                    <form onSubmit={this.handleUploadImage}>
                        <h1>Seleccionar archivo de excel</h1>

                        <div className="form-group">
                            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
                        </div>

                        <button className="btn btn-success" type="submit">Agregar cursos</button>
                    </form>
                </Modal>

            </div>
        );
    }
}

if (document.getElementById('cursoSub')) {
    ReactDOM.render(<Curso_Sub />, document.getElementById('cursoSub'));
}
