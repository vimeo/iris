import React from 'react';
import {
    Card,
    Grid,
    GridBlock,
    GridCol,
    ParagraphMd,
} from '../index.js';
import ExampleSource from '../../docs/layout/ExampleSource';

class CardDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>The Card component provides styling for card-like items and are used in components like <code>VideoCard</code>.</ParagraphMd>
                <div data-code>
                <Grid isNested>
                        <GridBlock>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <Card style={{ paddingBottom: '100%', marginBottom: '1em' }} />
                            </GridCol>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <Card style={{ paddingBottom: '100%', marginBottom: '1em' }} isSelected/>
                            </GridCol>
                            <GridCol mdSpan={12} lgSpan={8}>
                                <Card style={{ paddingBottom: '100%', marginBottom: '1em' }} isLoading/>
                            </GridCol>
                        </GridBlock>
                    </Grid>
                </div>

                <ExampleSource>
                    {`
<Card style={{ paddingBottom: '100%', marginBottom: '1em' }} />
<Card style={{ paddingBottom: '100%', marginBottom: '1em'  }} isSelected/>
<Card style={{ paddingBottom: '100%', marginBottom: '1em' }} isLoading/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default CardDocs;
