import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Grupo_Sub extends Component {
    render() {
        return (
            <div className="col-2 pt-4 px-1 bg-primary" name="subNav">

                <div className="row justify-content-center">
                    <div className="col">

                    </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('gruposSub')) {
    ReactDOM.render(<Grupo_Sub />, document.getElementById('gruposSub'));
}
