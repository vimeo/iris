import React from 'react';
import { Grid, ParagraphMd, LinkText } from '../index';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const GridDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <ParagraphMd>The Grid component is the wrapper for all grid components.</ParagraphMd>
            <ParagraphMd><LinkText href="/pattern/Layout/GridFull">See the full Grid documentation</LinkText></ParagraphMd>
            <div data-code>
                <Grid/>
            </div>

            <ExampleSource>
                {`
<Grid></Grid>
                `}
            </ExampleSource>
        </div>
    );
};

export default GridDocs;
