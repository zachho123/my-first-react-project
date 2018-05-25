import React from 'react';

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked');
    }

    return (
        <div>
            <a href="#" onClick={handleClick}>
                Click me
            </a>
        </div>
    );
}

export default ActionLink;
