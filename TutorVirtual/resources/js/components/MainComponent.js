import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MainComponent extends Component {
    render() {
        return (
            <nav id="principal">
                <ul className="menuHover">
                    <li>
                        <a href="">
                            <h3>Est. Acad.</h3>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h3>Cursos</h3>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h3>Grupos</h3>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h3>Tutores</h3>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h3>Alumnos</h3>
                        </a>
                    </li>
                </ul>
                <div className="secondMenu">
                    <ul id="uploadExcel">
                        <li>
                            <h2>Subir Excel</h2>
                        </li>
                        <li>
                            <input type="file"/>
                        </li>
                        <li>
                            <button type="submit">Submit</button>
                        </li>
                    </ul>
                    <ul>
                    <li className="menuHover2">
                            <h2>Sub-sección</h2>
                        </li>
                        <li className="menuHover2">
                            <h2>Sub-sección</h2>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h2>Filtro 1</h2>
                        </li>
                        <li className="searchInput">
                            <input type="search"/>
                        </li>
                        <li>
                            <h2>Filtro 2</h2>
                        </li>
                        <li className="searchInput">
                            <input type="search"/>
                        </li>
                        <li>
                            <h2>Filtro 3</h2>
                        </li>
                        <li className="searchInput">
                            <input type="search"/>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

if (document.getElementById('mainComponent')) {
    ReactDOM.render(<MainComponent />, document.getElementById('mainComponent'));
}
