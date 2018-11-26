import React, { Component } from 'react';
import axios, { post } from 'axios';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Tutores_Sub extends Component {

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

        axios.post('/api/importTutores', data)
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
                        El archivo excel a utilizar para importar <strong>tutores</strong> debe respetar el siguiente formato para una lectura adecuada.
                    </p>

                    <ul>
                        <li>El archivo de excel deberá tener una sola hoja con la información a importar.</li>
                        <li>La primera fila deberá tener los nombres de las columnas a importar en el siguiente orden:
                            <ul>
                                <li>Usuario</li>
                                <li>Contraseña</li>
                                <li>Nombre</li>
                                <li>Apellido Paterno</li>
                                <li>Apellido Materno</li>
                                <li>Email</li>
                                <li>Rol</li>
                                <li>Socio</li>
                                <li>Organización</li>
                                <li>País</li>
                                <li>Estado</li>
                                <li>Municipio</li>
                            </ul>
                        </li>
                        <li>Las filas siguientes deberan tener la información de los tutores a importar.</li>
                    </ul>

                    <form onSubmit={this.handleUploadImage}>
                        <h2>Seleccionar archivo de excel</h2>

                        <div className="form-group">
                            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
                        </div>

                        <button className="btn btn-success" type="submit">Agregar tutores</button>
                    </form>
                </Modal>

            </div>
        );
    }
}

if (document.getElementById('tutoresSub')) {
    ReactDOM.render(<Tutores_Sub />, document.getElementById('tutoresSub'));
}
