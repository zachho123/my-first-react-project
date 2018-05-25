import React from 'react';

import HelloWorld from '../components/HelloWorld';
import AlterState from '../components/AlterStateExample';
import PropsExample from '../components/PropsExample';
import PCPE from '../components/ParentChildPropsExample';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello World</h2>
                <HelloWorld />
                <br />
                <h2>Alter State</h2>
                <AlterState />
                <br />
                <h2>Props Example</h2>
                <PropsExample />
                <br />
                <h2>Parent Child Props / State</h2>
                <PCPE />
            </div>
        );
    }
}

export default App;
