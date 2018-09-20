import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Test extends Component {
    render() {
        return (

            <div className="">
                I'm an test component!
            </div>
        
        );
    }
}

if (document.getElementById('test')) {
    ReactDOM.render(<Test />, document.getElementById('test'));
}
