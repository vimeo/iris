import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
// $FlowFixMe
import { AddNewItemCard, Grid, GridBlock, GridCol } from '../index.js';

const AddNewItemCardDocs = props => {
    return (
        <div className="Pattern__docs">
            <Grid isNested>
                <GridBlock>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add New Item"
                            anchorProps={{ href: '#' }}
                        />
                    </GridCol>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add Another New Item"
                            anchorProps={{
                                onClick: () => console.log('click!'),
                                href: '#',
                                target: '_blank',
                            }}
                        />
                    </GridCol>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add Some Other Item"
                            anchorProps={{
                                onClick: () => console.log('click!'),
                                href: '#',
                            }}
                        />
                    </GridCol>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add All the Item"
                            anchorProps={{
                                onClick: () => console.log('click!'),
                            }}
                        />
                    </GridCol>
                </GridBlock>
            </Grid>
            <ExampleSource>
                {`
<Grid isNested>
    <GridBlock>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add New Item"
                anchorProps={{ href: '#' }}
            />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add Another New Item"
                anchorProps={{
                    onClick: () => console.log('click!'),
                    href: '#',
                    target: '_blank',
                }}
            />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add Some Other Item"
                anchorProps={{
                    onClick: () => console.log('click!'),
                    href: '#',
                }}
            />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add All the Item"
                anchorProps={{
                    onClick: () => console.log('click!'),
                }}
            />
        </GridCol>
    </GridBlock>
</Grid>
                `}
            </ExampleSource>
        </div>
    );
};

export default AddNewItemCardDocs;
