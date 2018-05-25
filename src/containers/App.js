import React from 'react';

import HelloWorld from '../components/HelloWorld';
import AlterState from '../components/AlterStateExample';
import PropsExample from '../components/PropsExample';
import ParentChildExample from '../components/ParentChildPropsExample';
import HandleEvent from '../components/HandlingEvents';
import LoginControl from '../components/ConditionalRendering'

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
            </div>
        );
    }
}

export default App;
