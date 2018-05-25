import React from 'react';
import ReactDOM from 'react-dom';
import run from './1-alterStateExample.js'

class HelloUser extends React.Component {
    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
}

ReactDOM.render(<HelloUser name="Tyler" />, document.getElementById('root'));
