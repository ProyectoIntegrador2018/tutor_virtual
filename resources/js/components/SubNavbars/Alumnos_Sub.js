import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Alumno_Sub extends Component {
    render() {
        return (
            <div className="col-2 pt-4 px-1 bg-primary" name="subNav">

                <div className="row justify-content-center">
                    <div className="col">

                        <h4>Asignados 0</h4>
                        <h4>Pendientes 1000</h4>
                        <h3>Filtros Rapidos</h3>
                        
                        <div className="row p-0">
                            <div className="col-12 p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="material-icons">search</i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder="Buscar por ciudad..." aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('alumnosSub')) {
    ReactDOM.render(<Alumnos_Sub />, document.getElementById('alumnosSub'));
}
