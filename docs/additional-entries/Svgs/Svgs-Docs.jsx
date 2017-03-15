import React from 'react';
import IrisIconAlert16 from '../../../src/globals/svg/iris_icon_alert_16';

import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const SvgsDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <p>SVGs are loaded in using <a href="https://github.com/jhamlet/svg-react-loader" target="_blank">svg-react-loader</a></p>
            <h4>All Iris Icons</h4>
            <p><a href="/svgPage.html" target="_blank">See all SVG Icons Here</a></p>

            <h4>Using an Iris Icon</h4>
            <p>Icons are loaded with the <a href="https://github.com/jhamlet/svg-react-loader" target="_blank">SVG React Loader</a>.To include an icon you need to know its "Component Name" and File Name.</p>
            <p>Icons are then imported and included as JSX tags. Note: you can pass through any props you would like to this tag. (See example below)</p>
            <ExampleSource>
                {`
// import it
import '{ComponentName}' from 'iris/icons/{fileName}';
//...
// later: use it
<ComponentName />
                    `}
                </ExampleSource>
            <h4>Example: IrisIconAlert16</h4>
            <div style={{'width' : '3em', 'height' : '3em'}} data-code>
                <IrisIconAlert16 title="See your alerts" className="someSVGClass" id="someSVGid" style={{'width': '75%'}} />
            </div>
            <p><strong>ComponentName:</strong> IrisIconAlert16</p>
            <p><strong>File Name:</strong> iris_icon_alert_16.svg</p>
            <p><strong>Import it:</strong></p>
            <ExampleSource>
                {`
import 'IrisIconAlert16' from 'iris/icons/iris_icon_alert_16';
                    `}
                </ExampleSource>
                <p><strong>Use it as a JSX tag:</strong></p>
                <ExampleSource>
                    {`
<IrisIconAlert16 title="See your alerts" className="someSVGClass" id="someSVGid" style={{'width': '75%'}} />
                        `}
                    </ExampleSource>
            </div>
    );
};

export default SvgsDocs;
