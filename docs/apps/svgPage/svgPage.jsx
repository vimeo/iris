import React from 'react';
import ReactDOM from 'react-dom';
import * as Icons from './svgIconExportList.js';
import * as Illustrations from './svgIllustrationExportList.js';

const svgData = require('json-loader!../../../data/svgIconList.json');
const illustrationData = require('json-loader!../../../data/svgIllustrationsList.json');

const SvgList = () => (
    <div>
        <h2 id="icons">Icons</h2>
        {svgData.map((icon, i) => (
            <SvgEntry iconName={icon.name} fileName={icon.filename} key={i} />
        ))}
        <h2 id="illustrations">Illustrations</h2>
        {illustrationData.map((icon, i) => (
            <IllustrationEntry
                iconName={icon.name}
                fileName={icon.filename}
                key={i}
            />
        ))}
    </div>
);

const SvgEntry = ({ iconName, fileName }) => {
    const IconTag = Icons[iconName];
    return (
        <div className="sg-svgEntry">
            <h3>{iconName}</h3>
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
                <p>
                    <strong>ComponentName:</strong> {iconName}
                </p>
                <p>
                    <strong>File Name:</strong> {`${fileName}.svg`}
                </p>
            </div>
        </div>
    );
};

const IllustrationEntry = ({ iconName, fileName }) => {
    let IconTag = Illustrations[iconName];
    return (
        <div className="sg-svgEntry">
            <h3>{iconName}</h3>
            <div className="sg-svgIllustration">
                <IconTag />
            </div>
            <div className="sg-svgIconInfo">
                <p>
                    <strong>ComponentName:</strong> {iconName}
                </p>
                <p>
                    <strong>File Name:</strong> {`${fileName}.svg`}
                </p>
            </div>
        </div>
    );
};

const App = () => (
    <div className="sg-svgIconListWrapper">
        <h1>Svgs</h1>
        <p>
            Jump to: <a href="#icons">icons</a> |{' '}
            <a href="#illustrations">illustrations</a>
        </p>
        <SvgList />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app-root'));
