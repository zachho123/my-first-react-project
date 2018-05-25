import React from 'react';
import ReactDOM from 'react-dom';

/* Hello World Example */
// class HelloWorld extends React.Component {
//     render() {
//         return (
//             <div>Hello World!</div>
//         );
//     }
// }
//
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));

/* Altering State Example */
class HelloUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'zach'
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return (
            <div>
                Hello {this.state.username} <br />
                Change Name:
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));
