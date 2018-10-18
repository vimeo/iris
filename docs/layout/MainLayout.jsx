import React from 'react';
import Navigation from './Navigation';
import NavigationToggle from './NavigationToggle';

const MainLayout = props => (
    <div>
        <Navigation />
        <NavigationToggle />
        <div id="sgMainLayout" className="sg-MainLayout">
            {props.children}
        </div>
    </div>
);

export default MainLayout;
