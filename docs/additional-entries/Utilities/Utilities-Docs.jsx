import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const UtilitiesDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <p>Utilities are misc helpers that may be seen in CSS or JS.</p>
            </div>
                <h2>Media Queries Mixins</h2>
                <p>Mixins can be used in components to ensure that breakpoints in the Grid. The breakpoints sizes are:</p>
                <ul>
                    <li><strong>xxs:</strong> min-width: 0px</li>
                    <li><strong>xsm:</strong> min-width: 360px</li>
                    <li><strong>sm:</strong> min-width: 480px</li>
                    <li><strong>md:</strong> min-width: 768px</li>
                    <li><strong>lg:</strong> min-width: 1280px</li>
                    <li><strong>xl:</strong> min-width: 1440px</li>
                    <li><strong>xxl:</strong> min-width: 1680px</li>
                </ul>
                <p>The mixins below can be used in SCSS files:</p>

            <ExampleSource>
                {`
@include mq(xs) {
    //...declarations
}

@include mq(sm) {
    //...declarations
}

@include mq(md) {
    //...declarations
}

@include mq(lg) {
    //...declarations
}

@include mq(xl) {
    //...declarations
}
                    `}
                </ExampleSource>
            </div>
    );
};

export default UtilitiesDocs;
