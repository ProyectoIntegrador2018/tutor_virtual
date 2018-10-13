import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

export default class Alumnos extends Component {

    constructor() {
        super();
        this.state = {
            alumnos : [],
            isActive : false,
            AlumnoEsp : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/api/alumnos').then(
            response => {
                this.setState({
                    alumnos: response.data
                });
        });
        //Modal.setAppElement('body');
    }


    onDelete(alumno_id){
        console.log(alumno_id);
        axios.delete('http://localhost:4200/api/alumnos/delete/' + alumno_id)
        .then(response =>{

            var alumnos = this.state.alumnos;
            for(var  i = 0; i< alumnos.length; i++){
                if(alumnos[i].id == alumno_id){
                    alumnos.splice(i,1);
                    this.setState({alumnos:alumnos});
                }
            }
        })
    }

    render() {
        return (
<Router>
    <div className="col-8 p-0">
    {/*Search bar*/}
    <div className="row p-0">
    <div className="col-12 p-0">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                <i className="material-icons">search</i>
                </span>
            </div>
            <input type="text" className="form-control form-control-lg" placeholder="Buscar alumno por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    </div>
    </div>
    {/*Content row*/}
    <div className="row justify-content-center p-4">
    <div className="col p-0">
        <div className="row">
            <h1>alumno</h1>
        </div>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Pais fin</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
{
    this.state.alumnos.map(alumno => {
        return (
            <tr>
                <th scope="row">{alumno.id}</th>
                <td>{alumno.nombre}</td>
                <td>{alumno.correo}</td>
                <td>{alumno.pais}</td>
                <td><button onClick={this.onDelete.bind(this,alumno.id)}>Delete</button></td>
                {/* <td><button onClick={this.toggleModal.bind(this, alumno.id)}>Detalle</button></td> */}
            </tr>
                )
                                })
}
            </tbody>
        </table>
    </div>
    <div className="row">
        <a href="/index/alumnos/nuevo">Agregar alumnos</a>
    </div>
    </div>
    </div>
</Router>
        );
    }
}

if (document.getElementById('Alumnos')) {
    ReactDOM.render(<Alumnos />, document.getElementById('alumnos'));
}
