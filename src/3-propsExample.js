class HelloUser extends React.Component {
    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
}

ReactDOM.render(<HelloUser name="Tyler" />, document.getElementById('root'));
