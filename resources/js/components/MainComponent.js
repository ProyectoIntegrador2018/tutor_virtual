import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Curso_Sub from './SubNavbars/Curso_Sub';
import Cursos_Listing from './Content/Cursos/Listing';
import Cursos_New from './Content/Cursos/New';
import Alumnos from './Content/Alumnos/Alumnos';
import Alumno_Sub from './SubNavbars/Alumnos_Sub';
import Alumnos_New from './Content/Alumnos/Alumnos_New'

export default class MainComponent extends Component {
    render() {
        return (
            <Router basename="index">
                <div className="row h-100">

                    {/* Main Navbar */}
                    <div className="col-2 pt-4 px-1 bg-primary-dark h-100" name="mainNav">
                        <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item bg-transparent text-center">
                                <Link to="/cursos" className="text-white h3">Cursos</Link>
                            </li>
                            <li className="list-group-item bg-transparent text-center">
                                <Link to="/alumnos" className="text-white h3">Alumnos</Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Sub Navbars */}
                    <Route path='/cursos' component={Curso_Sub}/>
                    <Route path='/alumnos' component={Alumno_Sub}/>

                    {/* Content Areas */}
                    <Route exact path='/cursos' component={Cursos_Listing}/>
                    <Route exact path='/cursos/nuevo' component={Cursos_New}/>

                    <Route exact path='/alumnos' component={Alumnos}/>
                    <Route exact path='/alumnos/nuevo' component={Alumnos_New}/>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('mainComponent')) {
    ReactDOM.render(<MainComponent />, document.getElementById('mainComponent'));
}
