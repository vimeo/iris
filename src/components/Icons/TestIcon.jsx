
'use strict'

import React from 'react';

class TestIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg { ...this.props }  viewBox="298 390 16 12"><path d="M313.7 391.4l-1.1-1.1c-.4-.4-1-.4-1.4 0l-7.2 7.2-3.2-3.2c-.4-.4-1-.4-1.4 0l-1.1 1.1c-.4.4-.4 1 0 1.4l5 5c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4z"/></svg>
        );
    }
}

export default TestIcon;
