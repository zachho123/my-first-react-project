# My First React Project

Below you will find a compilation of helpful notes and React.js-related resources.

# Source: https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/

## Components

- Components are the building blocks of React
- You can think of a components as a collection of HTML, CSS, JS, and some internal data (properties / state)
- Data is either retrieved from a component's parent component, or it's contained in the component itself

## Fundamental Aspects of React

JSX — Allows us to write HTML like syntax which gets
transformed to lightweightJavaScript objects.

Virtual DOM — A JavaScript representation of the actual
DOM.

React.Component — The way in which you create a new component.

render (method) — Describes what the UI will look like for
the particular component.

ReactDOM.render — Renders a React component to a DOM node.

state — The internal data store (object) of a component.

constructor (this.state) - The way in which you establish
the initial state of a component.

setState — A helper method used for updating the state of a
component and re-rendering the UI

props — The data which is passed to the child component
from the parent component.

propTypes — Allows you to control the presence, or types of
certain props passed to the child component.

defaultProps — Allows you to set default props for your component.

Component LifeCycle
  - componentDidMount — Fired after the component mounted
  - componentWillUnmount — Fired before the component will unmount
  - getDerivedStateFromProps - Fired when the component mounts and
whenever the props change. Used to update the state of a
component when its props change

Events
  - onClick
  - onSubmit
  - onChange

## Hello World in React

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```
