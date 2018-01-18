import React from 'react';
import ReactDOM from 'react-dom';
import * as Icons from './svgIconExportList.js';
import * as Illustrations from './svgIllustrationExportList.js';

const svgData = require('json-loader!../../../data/svgIconList.json');
const illustrationData = require('json-loader!../../../data/svgIllustrationsList.json');

const SvgList = () => {
    return (
        <div>
            <h2 id="icons">Icons</h2>
            {svgData.map(function (icon, i) {

                return <SvgEntry
                    iconName = {icon.name}
                    fileName = {icon.filename}
                    key = {i}
                />
            })}
            <h2 id="illustrations">Illustrations</h2>
            {illustrationData.map(function (icon, i) {

                return <IllustrationEntry
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
                <div className="sg-svgIcon sg-svgIcon--xlarge">
                <IconTag />
            </div>
            <div className="sg-svgIcon sg-svgIcon--large">
                <IconTag />
            </div>
            <div className="sg-svgIcon sg-svgIcon--medium">
                <IconTag />
            </div>
            <div className="sg-svgIcon sg-svgIcon--small">
                <IconTag />
            </div>
            <div className="sg-svgIcon sg-svgIcon--xsmall">
                <IconTag />
            </div>
            <div className="sg-svgIconInfo">
                <p><strong>ComponentName:</strong> {props.iconName}</p>
                <p><strong>File Name:</strong> {props.fileName}.svg</p>
            </div>
        </div>
    )
};

const IllustrationEntry = (props) => {
    let IconTag = Illustrations[props.iconName];
    return (
        <div className="sg-svgEntry">
            <h3>{props.iconName}</h3>
            <div className="sg-svgIllustration">
            <IconTag />
            </div>
            <div className="sg-svgIconInfo">
                <p><strong>ComponentName:</strong> {props.iconName}</p>
                <p><strong>File Name:</strong> {props.fileName}.svg</p>
            </div>
        </div>
    )
};


const App = () => {
    return (
        <div className="sg-svgIconListWrapper">
            <h1>Svgs</h1>
            <p>Jump to: <a href='#icons'>icons</a> | <a href='#illustrations'>illustrations</a></p>
            <SvgList />
        </div>
    )
};


ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);
