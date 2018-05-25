# My First React Project

Below you will find a compilation of helpful notes and React.js-related resources.

## Components

- Components are the building blocks of React
- You can think of a components as a collection of HTML, CSS, JS, and some internal data (properties / state)
- Data is either retrieved from a component's parent component, or it's contained in the component itself
- Every component is required to have a render method
  - The render method is a representation of what the real DOM should look like

## ReactDOM.render()
- ReactDOM.render() takes two arguments
    1. the component to render
    2. the DOM node where you want to render the component
- You usually only have to use ReactDOM.render once in your application because rendering the most parent component will render all child components

## The Virtual DOM
- The virtual DOM is a JavaScript representation of the actual DOM
- React keeps track of the difference between the current virtual DOM and with the previous virtual DOM and only updates the real DOM with the necessary changes
- The process:
  - Some user event changes the state of your application ->
  - Re-render virtual DOM ->
  - Diff previous virtual DOM with new virtual DOM ->
  - Only update real DOM with necessary changes

## State
- The constructor method is the way in which you set the state of a component
  - Any data you put on this.state inside of the constructor will be part of that component's state
- Components can modify their own internal state using the setState method
  - Whenever setState is called, the virtual DOM re-renders, the diff algorithm runs, and the real DOM is updated
- onChange is a React attribute you can use to specify a method to be called every time an element changes

```html
<!-- Where doSomething() is a method on the class -->
<input
    type="text"
    onChange={this.doSomething}
/>
```

## Receiving State from Parent Components (props, getDefaultProps)
- props is the data which is passed to the child component from the parent component
- Handle state in the highest-most parent component which needs to use the specific data
- Try to always keep it so that wherever the data lives, is also where you manipulate the data
  - All getter/setter methods for a piece of data should always be in the same component where that data was defined
  - If you need to manipulate some piece of data outside of where that data lives, pass the getter/setter method into that component as a prop

### defaultProps
- Allow you to specify a default (or backup) value for certain props just in case those props are never passed into the component

## Component LifeCycle
- Each component you make will have its own lifecycle events
  - Ex: You want to make an ajax request on the initial render to fetch some data
  - Ex: You want to run some logic whenever your props change

### componentDidMount
- Invoked once after the initial render
- When this method is invoked, you have access to the virtual DOM
- You access the virtual DOM via the this.getDOMNode() method
- *This is the lifecycle event where you'll be making your AJAX requests to fetch data*

### componentWillUnmount
- Invoked immediately before a component is unmounted from the DOM
- *This is where you do necessary clean up*


## Fundamental Aspects of React CheatSheet
- JSX — Allows us to write HTML like syntax which gets transformed to lightweightJavaScript objects.
- Virtual DOM — A JavaScript representation of the actual DOM.
- React.Component — The way in which you create a new component.
- render (method) — Describes what the UI will look like for the particular component.
- ReactDOM.render — Renders a React component to a DOM node.
- state — The internal data store (object) of a component.
- constructor (this.state) - The way in which you establish the initial state of a component.
- setState — A helper method used for updating the state of a
component and re-rendering the UI
- props — The data which is passed to the child component
from the parent component.
- propTypes — Allows you to control the presence, or types of certain props passed to the child component.
- defaultProps — Allows you to set default props for your component.
- Component LifeCycle
  - componentDidMount — Fired after the component mounted
  - componentWillUnmount — Fired before the component will unmount
  - getDerivedStateFromProps - Fired when the component mounts and whenever the props change. Used to update the state of a component when its props change
- Events
  - onClick
  - onSubmit
  - onChange

#### *Source: https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/*
