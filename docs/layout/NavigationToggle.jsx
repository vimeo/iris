import React from 'react';
import NavHamburger from './NavHamburger';


class NavigationToggle extends React.Component {
    toggleMenu(event) {
        document.getElementById('sgNavigationToggle').classList.toggle('js-NavigationToggle-Open');
        document.getElementById('sgMainLayout').classList.toggle('js-Navigation-Open');
        if (event) event.preventDefault();
    }

    componentDidMount() {
        this.toggleMenu();
    }

    render() {
        return (
            <div id="sgNavigationToggle" className="sg-NavigationToggle">
                <a href="#" onClick={this.toggleMenu}>
                    <NavHamburger />
                </a>
            </div>
        );
    }
};

export default NavigationToggle;
