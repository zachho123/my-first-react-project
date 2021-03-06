# My First React Project

Below you will find a compilation of helpful notes and React.js-related resources.

## Components

### Overview
- Are the building blocks of React
- Are collections of HTML, CSS, JS, and some internal data (properties / state)
- Data should be contained in the component that uses it, or be passed down from the parent component
- Every component is required to have a render method
  - The render method is a representation of what the real DOM should look like
  - The render method should not modify component state
- Typically, new React apps have a single App component which is the topmost parent
- **NOTE:** always start component names with a capital letter
  - React treats components starting with lowercase letters are treated as DOM tags (HTML) rather than a React component

### Functional vs Classical Component Declarations
- Components can be defined as a function or an ES6 class
- Function or Class Guide Rules:
  1. Component needs access to lifecycle methods -> **Use a class**
      - functions can't have methods and therefore can't have lifecycle methods
  2. Component needs access to *this* -> **Use a class**
      - function components don't have a *this* to access (it's undefined)
  3. Otherwise -> **Use a functional component**
      - class components provide extra features, which, if you're not using them, make the code more complex unnecessarily

#### Presentational vs Container Components

##### Presentational Components
- Concerned with *how things look*
- Usually have some DOM markup styles
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
- Each component has its own lifecycle events
- You can declare "lifecycle hook" methods to run code on component mounting/unmounting

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
- React passes JSX attributes to components as a single JavaScript object called "props"
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

## Lists and Keys
- You can use the map function to transform arrays into list elements to render
- We need to supply a key (special string attribute) when creating lists of elements
- Keys help React identify which items have changed, are added, or are removed
- Keys should ideally be unique, most often you would use IDs from your data
  - Keys only need to be unique among siblings, they do not need to be globally unique
- As a last resort you can use the item index as a key, however this is not recommended as issues can arise if the order of items change
- Keys only make sense in the context of the surrounding array, a good rule of thumb is that the elements inside the map() call need keys
- Keys aren't actually passed to your components, if you need the key value pass it explicitly as a prop with a different name

**Note:** If you choose not to assign an explicit key to list items then React will default to using indexes as keys

## Controlled Components
- In HTML form elements such as **input**, **textarea**, and **select** typically maintain their own state and update it based on user input
- In React, mutable state is typically kept in the state of a component, and only updated with setState()
- A "controlled component" combines these two and makes the React state the "single source of truth"
- With a controlled component, every state mutation will have an associated handler function (this makes it straightforward to modify or validate user input)

### Alternatives to Controlled Components
It can become tedious using controlled components since you need to write an event handler for every way your data can change and pipe all the input state through a React component, in these situations you may want to use an "uncontrolled component", an alternative technique for implementing input forms

## Lifting State Up
- In React, sharing state is accomplished by moving it up to the closest common ancestor of that components that need it
- There should be a single "source of truth" for any data that changes in a React application
- If something can be derived from either props or state, it probably shouldn't be in the state

## Thinking in React
Start with a mock of what the website should look like

### Step 1: Break the UI into a Component Hierarchy
- Draw boxes around every component and give them all names
- Components that appear inside another component should appear as a child component in the hierarchy

### Step 2: Build a Static Version in React
- Build a version that takes your data model and renders the UI but has no interactivity
- Don't use state at all to build this static version, state is reserved for interactivity (data that changes over time)
- On larger projects, it's usually easier to build bottom-up and write tests as you build
- The components should only have a render method (for this static version)

### Step 3: Identify the Minimal-Complete Representation of the UI State
- Key to this step is DRY: Don't Repeat Yourself
- Figure out absolute minimum state your application needs and compute everything else you need on-demand
- When determining if something needs to be state or not, ask:
  1. Is it passed in from a parent via props? If so, probably isn't state
  2. Does it remain unchanged over time? If so, it probably isn't state
  3. Can you compute it based on any other state or props in the component? If so, it isn't state

### Step 4: Identify Where Your State Should Live
- This is often the most challenging part
- For each piece of state in your application:
  - Identify every component that renders something based on that state
  - Find a common owner component (a single component above all the components that need the state in the hierarchy)
  - Either the common owner or another component higher up in the hierarchy should own the state
  - If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component

### Add Inverse Data Flow
- Update state to reflect user input
- Remember that components should only alter their own state
- Higher-up components pass callbacks to lower ones that fire when state should be updated


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
