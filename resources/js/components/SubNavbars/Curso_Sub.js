import React, { Component } from 'react';
import axios, { post } from 'axios';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

export default class Curso_Sub extends Component {

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.state = {
            isActive : false,
            image: ''
        }
    }

    onFormSubmit(e) {
        e.preventDefault() 
        this.fileUpload(this.state.image);
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        this.createImage(files[0]);
    }

    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
            image: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }

    fileUpload(image){
        const url = 'http://localhost:4200/api/fileupload';
        const formData = {file: this.state.image}
        return  post(url, formData)
                .then(response => console.log(response))
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
                    <button onClick={this.closeModal.bind(this)}>Regresar</button>

                    <form onSubmit={this.onFormSubmit}>
                        <h1>Seleccionar archivo de excel</h1>
                        <input type="file"  onChange={this.onChange} />
                        <button type="submit">Agregar cursos</button>
                    </form>
                </Modal>

            </div>
        );
    }
}

if (document.getElementById('cursoSub')) {
    ReactDOM.render(<Curso_Sub />, document.getElementById('cursoSub'));
}
