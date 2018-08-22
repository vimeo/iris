import React from 'react';
import ExampleSource from '../../layout/ExampleSource';
import { ParagraphMd } from '../../../src/Type';

const ColorRibbonDocs = (props) => {
    return (
        <div className="Pattern__docs">
        <ParagraphMd>Adding the <code>.VimeoBrand_ColorRibbon</code> class to the top element of your app will insert the Vimeo brand gradient ribbon above it using a pseudo-element.</ParagraphMd>
            <div data-code>
                    <div className="VimeoBrand_ColorRibbon">
                        <ParagraphMd>Content Here</ParagraphMd>
                    </div>
            </div>

            <ExampleSource>
                {`
<div className="VimeoBrand_ColorRibbon">
    <ParagraphMd>Content Here</ParagraphMd>
</div>
                    `}
                </ExampleSource>
        </div>
    );
};

export default ColorRibbonDocs;
