import React from 'react';

import HelloWorld from '../components/HelloWorld';
import AlterState from '../components/AlterStateExample';
import PropsExample from '../components/PropsExample';
import ParentChildExample from '../components/ParentChildPropsExample';
import HandleEvent from '../components/HandlingEvents';
import LoginControl from '../components/ConditionalRendering';
import NumberList from '../components/RenderingLists';
import NameForm from '../components/ControlledComponent';
import LiftState from '../components/LiftingState';
import ChildrenProps from '../components/ChildrenProps';

// For NumberList Example
const numbers = [1, 2, 3, 4, 5];

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello World</h2>
                <HelloWorld />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Alter State</h2>
                <AlterState />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Props Example</h2>
                <PropsExample />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Parent Child Props / State</h2>
                <ParentChildExample />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Handling Events</h2>
                <HandleEvent />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Conditional Rendering</h2>
                <LoginControl />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Rendering Lists</h2>
                <NumberList numbers={numbers} />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Controlled Component</h2>
                <NameForm />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>LiftingState</h2>
                <LiftState />
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2>Using props.children</h2>
                <ChildrenProps />
            </div>
        );
    }
}

export default App;
