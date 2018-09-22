import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Curso_Sub from './SubNavbars/Curso_Sub';
import Cursos_Listing from './Content/Cursos/Listing';
import Cursos_New from './Content/Cursos/New';

export default class MainComponent extends Component {
    render() {
        return (
            <Router basename="index">
                <div className="container-fluid">
                    <div className="row">

                        {/* Main Navbar */}
                        <div className="col-2 pt-4 px-1 bg-primary-dark" name="mainNav">
                            <ul className="list-group list-group-flush bg-transparent">
                                <li className="list-group-item bg-transparent text-center">
                                    <Link to="/cursos" className="text-white h3">Cursos</Link>
                                </li>
                                <li className="list-group-item bg-transparent text-center">
                                    <Link to="/cursos" className="text-white h3">Alumnos</Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Sub Navbars */}
                        <Route path='/cursos' component={Curso_Sub}/>

                        {/* Content Areas */}
                        <Route exact path='/cursos' component={Cursos_Listing}/>
                        <Route exact path='/cursos/nuevo' component={Cursos_New}/>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('mainComponent')) {
    ReactDOM.render(<MainComponent />, document.getElementById('mainComponent'));
}
