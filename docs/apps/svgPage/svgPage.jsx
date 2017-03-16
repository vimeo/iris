import React from 'react';
import ReactDOM from 'react-dom';
import * as Icons from './svgExportList.js';
const svgData = require('json!../../../data/svgList.json');

const SvgList = () => {
    return (
        <div>
            {svgData.map(function (icon, i) {

                return <SvgEntry
                    iconName = {icon.name}
                    fileName = {icon.filename}
                    key = {i}
                />
            })}
        </div>
    )
};

const SvgEntry = (props) => {
    let IconTag = Icons[props.iconName];
    return (
        <div className="sg-svgEntry">
             <h3>{props.iconName}</h3>
            <div className="sg-svgIcon sg-svgIcon--large">
                <IconTag />
            </div>
            <div className="sg-svgIcon sg-svgIcon--medium">
                <IconTag />
            </div>
            <div className="sg-svgIcon sg-svgIcon--small">
                <IconTag />
            </div>
            <div className="sg-svgIconInfo">
                <p><strong>ComponentName:</strong> {props.iconName}</p>
                <p><strong>File Name:</strong> {props.fileName}</p>
            </div>
        </div>
    )
};


const App = () => {
    return (
        <div className="sg-svgIconListWrapper">
            <h1>Svg Icons</h1>
            <SvgList />
        </div>
    )
};


ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);
