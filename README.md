# My First React Project

Below you will find a compilation of helpful notes and React.js-related resources.

## Components

### Overview
- Components are the building blocks of React
- Components are collections of HTML, CSS, JS, and some internal data (properties / state)
- Data should either be retrieved from a component's parent component, or should be contained in the component itself
- Every component is required to have a render method
  - The render method is a representation of what the real DOM should look like
  - The render method should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked
- Typically, new React apps have a single App component which is the topmost parent
- **NOTE:** always start component names with a capital letter
  - React treats components starting with lowercase letters are treated as DOM tags (HTML) rather than a React component

### Functional vs Classical Component Declarations
- Components can be defined either as a function that takes one argument (props) and returns a React element (JSX most likely), or as an ES6 class
- Basic Rules to follow when deciding how to declare components
  1. Component needs access to lifecycle methods -> **Use a class**
      - functions can't have methods and therefore can't have lifecycle methods
  2. Component needs access to *this* -> **Use a class**
      - function components don't have a *this* to access (it's undefined)
  3. Otherwise -> **Use a functional component**
      - class components provide extra features, which, if you're not using them, make the code more complex unnecessarily

#### Presentational vs Container Components
- Components will be much easier to reuse and reason about if you divide them into two categories

##### Presentational Components
- Concerned with *how things look*
- Can contain both presentational and container components, and usually have some DOM markup styles
- Often allow containment via *this.props.children*
- Don't specify how data is loaded / manipulated
- Receive data and callbacks exclusively via props
- Rarely have their own state (when they do, it's UI state, not data state)
- Are typically written as **functional components**

##### Container Components
- Concerned with *how things work*
- Can contain both presentational and container components, but usually *don't* have any DOM markup of their own (except wrapping divs), and never have styles
- Provide the data and behavior to presentational/other components
-  Are often stateful (tend to serve as data sources)

### Component LifeCycle
- Each component you make will have its own lifecycle events
  - Ex: You want to make an ajax request on the initial render to fetch some data
  - Ex: You want to run some logic whenever your props change
- You can declare special methods ("lifecycle hooks") on the component class to run some code when a component mounts and unmounts

#### componentDidMount
- Invoked once after the initial render
- When this method is invoked, you have access to the virtual DOM
- You access the virtual DOM via the this.getDOMNode() method
- *This is the lifecycle event where you'll be making your AJAX requests to fetch data*

#### componentWillUnmount
- Invoked immediately before a component is unmounted from the DOM
- *This is where you do necessary clean up*

#### getDerivedStateFromProps
- Invoked when the component mounts and whenever the props change
- Sometimes you need to update the state of your component based on the props that are being passed in
- This lifecycle method is passed the props and the state, and the object you return will be merged with the current state
- *Used to update the state of a component when its prop change*

## Receiving State from Parent Components (props, getDefaultProps)
- When React sees a user-defined React component, it passes JSX attributes to that component as a single JavaScript object called "props"
- You should handle state in the highest-most parent component which needs to use the specific data
- Try to always keep it so that wherever the data lives, is also where you manipulate the data
  - All getter/setter methods for a piece of data should always be in the same component where that data was defined
  - If you need to manipulate some piece of data outside of where that data lives, pass the getter/setter method into that component as a prop
- React components should never modify their own props

### defaultProps
- Allow you to specify a default (or backup) value for certain props just in case those props are never passed into the component

## State
- State is similar to props, but it is private and fully controlled by the component
- The constructor method is the way in which you set the state of a component
  - Any data you put on this.state inside of the constructor will be part of that component's state
- Components can modify their own internal state using the setState method
  - Whenever setState is called, the virtual DOM re-renders, the diff algorithm runs, and the real DOM is updated
  - Do not modify state directly (ie: this.state.comment = 'Hello')
- State updates may be asynchronous, therefore you should not rely on their values for calculating the next state
  - To solve this use the alternate form of setState() which accepts a function, this function takes two arguments:
    1. the previous state
    2. the props at the time the update is applied

```JavaScript
// Wrapping a function body in parentheses means return an object literal
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

## Additional Fields
- If you need to store something that doesn't participate in the data flow, feel free to add additional fields to the component class manually (instead of using props or state)

## ReactDOM.render()
- This method is what renders your React component(s) to the page
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

## Handling Events
- React events are named using camelCase, rather than lowercase
- With JSX you pass a function as the event handler, rather than a string
- You cannot return false to prevent default behavior in React, you must explicitly call preventDefault()
- When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class
- You have to be careful about the meaning of *this* in JSX callbacks, class methods are not bound by default

### Passing Arguments to Event Handlers
There are two ways to pass an extra parameter to an event handler, either using arrow functions or bind:

```html
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## Conditional Rendering

### Using if / ternary
Conditional rendering in React works the same as normal conditions in Javascript. Use if or conditional (ternary) operator to control which elements are rendered.

```JavaScript
// Using if
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

### Inline if with logical &&
```JavaScript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```

It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

### Preventing Component from Rendering
To make a component hide itself, simply have the component return null.

```JavaScript
function ExampleComponent(props) {
  if (someCondition) {
    return false;
  }

  return (
    <div>
      Stuff to render!
    </div>
  )
}
```

**Note:** returning null from a component's render method does not affect the firing of the component's lifecycle methods.





## Fundamental Aspects of React CheatSheet
- **JSX** — Allows us to write HTML like syntax which gets transformed to lightweightJavaScript objects.
- **Virtual DOM** — A JavaScript representation of the actual DOM.
- **React.Component** — The way in which you create a new component.
- **render** (method) — Describes what the UI will look like for the particular component.
- **ReactDOM.render** — Renders a React component to a DOM node.
- **state** — The internal data store (object) of a component.
- **constructor** (this.state) - The way in which you establish the initial state of a component.
- **setState** — A helper method used for updating the state of a
component and re-rendering the UI
- **props** — The data which is passed to the child component
from the parent component.
- **propTypes** — Allows you to control the presence, or types of certain props passed to the child component.
- **defaultProps** — Allows you to set default props for your component.
- **Component LifeCycle**
  - componentDidMount — Fired after the component mounted
  - componentWillUnmount — Fired before the component will unmount
  - getDerivedStateFromProps - Fired when the component mounts and whenever the props change. Used to update the state of a component when its props change
- **Events**
  - onClick
  - onSubmit
  - onChange

## Sources
- https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/
- https://reactjs.org/docs
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
- https://reactarmory.com/answers/es6-classes-vs-function-components
