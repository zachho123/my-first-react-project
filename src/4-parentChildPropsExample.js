import React from 'react';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Zach Ho',
            friends: [
                'Greg',
                'Matt'
            ],
        }

        this.addFriend = this.addFriend.bind(this);
    }
    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }
    render() {
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend} />
                <Childcomponent names={this.state.friends} />
            </div>
        )
    }
}

class AddFriend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }
    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }
    handleAddNew() {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
        )
    }
}

class Childcomponent extends React.Component {
    render() {
        /* the map method creates a new array, calls our callback on each
         * item in the array, and fills the new array with the result of
         * calling the callback on each item */
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map((friend) => {
                        return <li>{friend}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ParentComponent;
