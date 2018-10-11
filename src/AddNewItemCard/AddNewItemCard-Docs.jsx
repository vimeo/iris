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
                            anchor={<a href="#" />}
                        />
                    </GridCol>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add Another New Item"
                            anchor={
                                <a
                                    href="#"
                                    target="_blank"
                                    data-some-new-attr="false"
                                />
                            }
                        />
                    </GridCol>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add Some Other Item"
                            anchor={
                                <a href="#" data-some-fruit-attr="banana" />
                            }
                        />
                    </GridCol>
                    <GridCol mdSpan={12} lgSpan={6}>
                        <AddNewItemCard
                            text="Add All the Item"
                            anchor={<a href="#" data-some-attr="true" />}
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
                anchor={<a href="#" />}
            />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add Another New Item"
                anchor={
                    <a
                        href="#"
                        target="_blank"
                        data-some-new-attr="false"
                    />
                }
            />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add Some Other Item"
                anchor={<a href="#" data-some-fruit-attr="banana" />}
            />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
            <AddNewItemCard
                text="Add All the Item"
                anchor={<a href="#" data-some-attr="true" />}
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
