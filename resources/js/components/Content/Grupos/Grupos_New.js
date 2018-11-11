import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default class Grupos_New extends Component {

    //nombre apellidoPaterno apellidoMaterno correo pais estado ciudad municipio genero fechaNacimiento
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();

        axios.post('/api/grupo/store').then(
            (response) => {
            // Success
            swal(
                'Bien',
                'Grupo  creado con exito',
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
                        <h1>Nuevo Grupo</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary btn-lg">Crear</button>
                    </form>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('grupos')) {
    ReactDOM.render(<Gripos_New />, document.getElementById('grupos'));
}