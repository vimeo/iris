
'use strict'

import React from 'react';

class TestIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg { ...this.props }  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13 13H3v-1.154C3.997 10.146 5.863 9 8 9s4.003 1.142 5 2.846V13zM8 3c1.243 0 2.25 1.007 2.25 2.25S9.243 7.5 8 7.5 5.75 6.493 5.75 5.25 6.757 3 8 3zm6-3H2C.895 0 0 .895 0 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z"/></svg>
        );
    }
}

export default TestIcon;
