import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const ColorRibbonDocs = (props) => {
    return (
        <div className="Pattern__docs">
        <p>Adding the <code>.VimeoBrand_ColorRibbon</code> class to the top element of your app will insert the Vimeo brand gradient ribbon above it using a pseudo-element.</p>
            <div data-code>
                    <div className="VimeoBrand_ColorRibbon">
                        <p>Content Here</p>
                    </div>
            </div>

            <ExampleSource>
                {`
<div className="VimeoBrand_ColorRibbon">
    <p>Content Here</p>
</div>
                    `}
                </ExampleSource>
        </div>
    );
};

export default ColorRibbonDocs;
