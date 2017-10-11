import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd, Header3} from '../../../src/components/Type';

const ZindexHelperDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <ParagraphMd>The Z-index Helper is a SASS function used to centrally manage the z-index stack.</ParagraphMd>
                <Header3>Step 1: Setting Z-Index order</Header3>
                <ParagraphMd>Z-index is established by <code>src/globals/sass/settings/_z-index.scss</code> where there are two SASS variables:</ParagraphMd>
                <ol>
                    <li><code>$z-index-overrides</code> is a map of element name: z-index value for elements that need special extreme overrides (such as the modals).</li>
                    <li><code>$z-indexed-elements</code> is a list of element names. the get-z-index` will look for the element name passed to it in this list and return its index in the order so that elements will be z-indexed in that order.</li>
                </ol>

                <ExampleSource>
                {`
// Elements will get a z-index equal to their order in this list.
$z-indexed-elements: FocusBloop,
    InlineInputs,
    InlineInputsReplacementElements,
    InputToggleOverlay;

// for elements that need special, usually extreme, z-indexing, this map will provide override values.
$z-index-overrides: (
    modalOverlay: 9998,
    modalContent: 9999
);
                    `}
                </ExampleSource>

                <Header3>Step 2: Use the get-z-index() SASS Function</Header3>

                <ParagraphMd>This function found in src/globals/sass/utilities/_z-index.scss provides the helper function that supports the above settings.</ParagraphMd>


            </div>

            <ExampleSource>
                {`
.exampleSelector {
    position: absolute;
    z-index: get-z-index('exampleSelector');
    top: 0;
    left: 0;
}
                    `}
                </ExampleSource>
            </div>
    );
};

export default ZindexHelperDocs;
