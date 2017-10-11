import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../../../src/utility_components/Type';
const MediaQueriesDocs = (props) => {
    return (
        <div className="Pattern__docs">
                <ParagraphMd>The Named Media Query Mixin can be used in components to ensure that breakpoints in the Grid. The breakpoints sizes are:</ParagraphMd>
                <ParagraphMd>The mixin <code>mq()</code> takes the name of the media queries as its single argument. Valid values are:</ParagraphMd>
                <table className="ApiTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Min Width</th>
                            <th>PX Equivalent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>xs</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>sm</td>
                            <td>30em</td>
                            <td>360px</td>
                        </tr>
                        <tr>
                            <td>md</td>
                            <td>48em</td>
                            <td>768px</td>
                        </tr>
                        <tr>
                            <td>lg</td>
                            <td>80em</td>
                            <td>1280px</td>
                        </tr>
                        <tr>
                            <td>xl</td>
                            <td>90em</td>
                            <td>1440px</td>
                        </tr>
                        <tr>
                            <td>xxl</td>
                            <td>105em</td>
                            <td>1680px</td>
                        </tr>
                    </tbody>
                </table>

                <ParagraphMd>The mixins below can be used in SCSS files:</ParagraphMd>

            <ExampleSource>
                {`
// prints @media screen and (min-width: 0)
@include mq(xs) {
    //...declarations
}

// prints @media screen and (min-width: 30em)
@include mq(sm) {
    //...declarations
}

// prints @media screen and (min-width: 48em)
@include mq(md) {
    //...declarations
}

// prints @media screen and (min-width: 80em)
@include mq(lg) {
    //...declarations
}


// prints @media screen and (min-width: 90em)
@include mq(xl) {
    //...declarations
}

// prints @media screen and (min-width: 105em)
@include mq(xxl) {
    //...declarations
}
                    `}
                </ExampleSource>
            </div>
    );
};

export default MediaQueriesDocs;
