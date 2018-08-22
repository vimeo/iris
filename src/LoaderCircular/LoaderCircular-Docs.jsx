import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import { LoaderCircular, ParagraphMd, Header4 } from '../index';
const LoaderCircularDocs = (props) => {
    return (
        <div>
            <div data-code>
                <Header4>Dark</Header4>
                <LoaderCircular size="sm" format="dark" />
                <LoaderCircular size="lg" format="dark" />
                <div className="Pattern-DarkBlock">
                    <Header4 format="light">Light</Header4>
                    <LoaderCircular size="md" format="light"/>
                </div>
                <div style={{ color: '#d93636' }}>
                    <Header4>Adaptive</Header4>
                    <ParagraphMd>This div has the style set to <code>color: '#d93636'</code></ParagraphMd>
                    <LoaderCircular format="adaptive"/>
                </div>
            </div>

            <ExampleSource>
                {`
<LoaderCircular size="sm" format="dark" />
<LoaderCircular size="lg" format="dark" />
<LoaderCircular size="md" format="light"/>
<div style={{ color: '#d93636' }}>
    <LoaderCircular format="adaptive"/>
</div>
                    `}
                </ExampleSource>
            </div>
    );
};

export default LoaderCircularDocs;
