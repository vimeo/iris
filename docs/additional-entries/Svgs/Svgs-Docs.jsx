import React from 'react';
import IrisIconAlert16 from '../../../src/globals/svg/iris_icon_alert_16';
import { ParagraphMd, Header3, Header4 } from '../../../src/utility_components/Type/Type';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const SvgsDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <ParagraphMd>SVGs are loaded in using <a href="https://github.com/jhamlet/svg-react-loader" target="_blank">svg-react-loader</a></ParagraphMd>
            <Header3>All Iris Icons</Header3>
            <ParagraphMd><a href="svgPage.html" target="_blank">See all SVG Icons Here</a></ParagraphMd>

            <Header3>Using an Iris Icon</Header3>
            <ParagraphMd>Icons are loaded with the <a href="https://github.com/jhamlet/svg-react-loader" target="_blank">SVG React Loader</a>.To include an icon you need to know its "Component Name" and File Name.</ParagraphMd>
            <ParagraphMd>Icons are then imported and included as JSX tags. Note: you can pass through any props you would like to this tag. (See example below)</ParagraphMd>
            <ExampleSource>
                {`
// import it
import '{ComponentName}' from 'iris/icons/{fileName}';
//...
// later: use it
<ComponentName />
                    `}
                </ExampleSource>
            <Header4>Example: IrisIconAlert16</Header4>
            <div style={{'width' : '3em', 'height' : '3em'}} data-code>
                <IrisIconAlert16 title="See your alerts" className="someSVGClass" id="someSVGid" style={{'width': '75%'}} />
            </div>
            <ParagraphMd><strong>ComponentName:</strong> IrisIconAlert16</ParagraphMd>
            <ParagraphMd><strong>File Name:</strong> iris_icon_alert_16.svg</ParagraphMd>
            <ParagraphMd><strong>Import it:</strong></ParagraphMd>
            <ExampleSource>
                {`
import 'IrisIconAlert16' from 'iris/icons/iris_icon_alert_16';
                    `}
                </ExampleSource>
                <ParagraphMd><strong>Use it as a JSX tag:</strong></ParagraphMd>
                <ExampleSource>
                    {`
<IrisIconAlert16 title="See your alerts" className="someSVGClass" id="someSVGid" style={{'width': '75%'}} />
                        `}
                    </ExampleSource>
            </div>
    );
};

export default SvgsDocs;
