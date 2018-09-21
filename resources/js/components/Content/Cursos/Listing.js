import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class Cursos_Listing extends Component {

    constructor() {
        super();
        this.state = {
            cursos : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/api/cursos').then(
            response => {
                this.setState({
                    cursos: response.data
                });
        });
    }

    render() {
        return (
            <Router>
                {/*Content column*/}
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
                                <input type="text" className="form-control" placeholder="Buscar curso por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    
                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">
                            <div className="row">
                                <h1>Cursos</h1>
                            </div>
                            
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Clave</th>
                                        <th scope="col">Fecha fin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cursos.map(curso => {
                                            return (
                                                <tr>
                                                    <th scope="row">{curso.id}</th>
                                                    <td>{curso.nombre}</td>
                                                    <td>{curso.clave}</td>
                                                    <td>{curso.fechaFin}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('cursos')) {
    ReactDOM.render(<Cursos />, document.getElementById('cursos'));
}
