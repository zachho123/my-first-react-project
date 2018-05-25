import React from 'react';

class HelloUser extends React.Component {
    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
};

export default HelloUser;
