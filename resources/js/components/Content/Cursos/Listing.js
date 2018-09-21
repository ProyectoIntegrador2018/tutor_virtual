import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Cursos_Listing extends Component {

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
                                        <i class="material-icons">search</i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Buscar curso por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    
                    {/*Content row*/}
                    <div className="row justify-content-center p-4">
                        <div className="col p-0">
                            <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
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
