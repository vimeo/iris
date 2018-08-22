import React from 'react';
import Grid from '../../../src/Grid';
import GridCol from '../../../src/GridCol';
import GridBlock from '../../../src/GridBlock';
import ExampleSource from '../../layout/ExampleSource';
import InputText from '../../../src/InputText/InputText';
import { ParagraphMd, Header3 } from '../../../src/Type';
import LinkText from '../../../src/LinkText/LinkText';
import ListItem from  '../../../src/ListItem';
import List from  '../../../src/List';

export default function GridFullDocs() {

    return (
        <div className="Pattern__docs">
            <ParagraphMd>The Iris Grid system is a 24 column responsive flexbox based grid. The Grid component provides an engineer-friendly re-useable abstraction of the HTML structure required to use this grid.</ParagraphMd>
            <LinkText style={{marginBottom: '20px', display: 'block'}} href="https://www.dropbox.com/s/2gr5ns35oshxbqy/Iris%20Grid.sketch?dl=0">Grid Sketch Files</LinkText>
                <Header3>Grid Components</Header3>
                <List>
                    <ListItem>Grid: <code>{'<Grid></Grid>'}</code> is the parent container of all elements and establishes: max-width for content, gutter spacing outside the content, and the grid styles for its children. The grid will create a padding around all content by default from the small breakpoint up. If you are using the grid within another layout, this padding can be removed by setting the <code>isNested</code> prop to true. </ListItem>
                    <ListItem>GridBlocks: <code>{`<GridBlock></GridBlock>`}</code> sets a grid's context and can be used to group grid items together.</ListItem>
                    <ListItem>GridColumns: <code>{`<GridCol></GridCol>`}</code> Are vertical structures where the actual content exists and is manipulated onto the grid.</ListItem>
                </List>
                <Header3>Small Screens First</Header3>
                <ParagraphMd> Grid sizing starts with the xsSpan prop. Values passed to this prop will determine the column sizing from the smallest width available in the browser upwards. Additional span props such as "mdSpan" can be added to resize the column at corresponding breakpoints (see breakpoints). If no xsSpan sizing prop is passed, the column will default to <code>xsSpan={24}</code>.</ParagraphMd>

            <Header3>Importing the Grid</Header3>
            <ExampleSource>
                {`
                    import {GridBlock, GridCol, Grid} from '@vimeo/iris';
                `}
            </ExampleSource>
            <ParagraphMd>Set-up your Grid component and place the amount of needed columns into the space.</ParagraphMd>
            <ParagraphMd>The Grid component will generate a <code>&lt;main></code> tag by default. An <code>element</code> prop can be passed to override this.</ParagraphMd>
            <div data-code>
                <Grid className="sg-grid">
                    <GridBlock className="GridBlockDocs">
                        <GridCol className="GridColDocs">xs.24</GridCol>
                        <GridCol className="GridColDocs">xs.24</GridCol>
                    </GridBlock>
                </Grid>
            </div>
            <ExampleSource>
                {`
                    <Grid>
                        <GridBlock>
                            <GridCol>xs.24</GridCol>
                            <GridCol>xs.24</GridCol>
                        </GridBlock>
                    </Grid>
                `}
            </ExampleSource>

            <Header3>Basic Usage</Header3>
            <ParagraphMd>Column widths are controlled by a <code>span</code> prop. Span props accept strings as values that must be between 1-24 or use the keyword <code>half</code>, <code>third</code>, or <code>quarter</code>. To trigger responsive design breakpoints have been set up as props.  <code>xlSpan</code> (105em+), <code>lgSpan</code> (80em+), <code>mdSpan</code> (48em+), and <code>smSpan</code> (30em+). Columns by default are set to span the full 24 column space of its parent.</ParagraphMd>
            <div data-code>
                <Grid className="sg-grid">
                    <GridBlock className="GridBlockDocs">
                        <GridCol className="GridColDocs" xsSpan={6}>xs.6</GridCol>
                        <GridCol className="GridColDocs" xsSpan={6} lgSpan={20} mdSpan={16} smSpan={24}>xs.6 lg.20 md.16 sm.24</GridCol>
                        <GridCol className="GridColDocs" xsSpan={6}>xs.6</GridCol>
                        <GridCol className="GridColDocs" xsSpan={6}>xs. 6</GridCol>
                    </GridBlock>
                </Grid>
            </div>
            <ExampleSource>
                {`
                    <Grid>
                        <GridBlock>
                            <GridCol xsSpan={6}>xs.6</GridCol>
                            <GridCol xsSpan={6} lgSpan={20} mdSpan={16} smSpan={24}>xs.6 lg.20 md.16 sm.24</GridCol>
                            <GridCol xsSpan={6}>xs.6</GridCol>
                            <GridCol xsSpan={6}>xs. 6</GridCol>
                        </GridBlock>
                    </Grid>
                `}
            </ExampleSource>

            <Header3>Nesting</Header3>
            <ParagraphMd>Nesting Columns can be achieved inside of any <code>{`<GridCol></GridCol>`}</code> component. Simply wrap the children in a <code>{`<GridBlock></GridBlock>`}</code> component. This will create a new 24 column grid bound by the width of its containing column. Note that in the example below the nested children <code>{`<GridCol xsSpan={12}></GridCol>`}</code>  map to half of the parents (24/2 = 12 therefore 12 GridColumns is half the space of the parent container).</ParagraphMd>
            <div data-code>
                <Grid className="sg-grid">
                    <GridBlock className="GridBlockDocs">
                        <GridCol className="GridColDocs" xsSpan={6}>xs.6</GridCol>
                        <GridCol className="GridColDocs" xsSpan={6}>
                            xs.6
                            <GridBlock className="sg-block GridBlockDocs">
                                <GridCol className="GridColDocs" xsSpan={12}>xs.12</GridCol>
                                <GridCol className="GridColDocs" xsSpan={12}>xs.12</GridCol>
                            </GridBlock>
                        </GridCol>
                        <GridCol className="GridColDocs" xsSpan={6}>xs. 6</GridCol>
                        <GridCol className="GridColDocs" xsSpan={6}>xs. 6</GridCol>
                    </GridBlock>
                </Grid>
            </div>
            <ExampleSource>
                {`
                    <Grid>
                        <GridBlock>
                            <GridCol xsSpan={6}>xs.6</GridCol>
                            <GridCol xsSpan={6}>
                                xs.6
                                <GridBlock>
                                    <GridCol xsSpan={12}>xs.12</GridCol>
                                    <GridCol xsSpan={12}>xs.12</GridCol>
                                </GridBlock>
                            </GridCol>
                            <GridCol xsSpan={6}>xs.6</GridCol>
                            <GridCol xsSpan={6}>xs.6</GridCol>
                        </GridBlock>
                    </Grid>
                `}
            </ExampleSource>

            <Header3>Fixed & Fluid Columns</Header3>
            <ParagraphMd>Fixed columns are available, <code>{`<GridCol></GridCol>`}</code> can switch between being fluid and fixed at different breakpoint sizes. Fixed Columns
            are paired with fluid columns that fill in the remaining space of a container.</ParagraphMd>
            <ParagraphMd>Columns are made "fluid" by passing a "0" span value as in <code>{`xsSpan={0}`}</code>.</ParagraphMd>
            <ParagraphMd>Accessibility note: when working with aside content/rail content, place the element after the main content in the DOM structure. This ensures that screen readers will read the content first.</ParagraphMd> 

            <div data-code>
                <Grid className="sg-grid">
                    <GridBlock className="GridBlockDocs">
                        <GridCol className="GridColDocs" xsSpan={0} columnElement="main">xs.fluid</GridCol>
                        <GridCol className="GridColDocs" mdSpan={8} mdFixed lgSpan={6} lgFixed alignment="left" columnElement="aside">md.8 lg.6</GridCol>
                    </GridBlock>
                </Grid>
            </div>
            <ExampleSource>
                {`
                    <Grid>
                        <GridBlock>
                            <GridCol xsSpan={0} columnElement="main">xs.fluid</GridCol>
                            <GridCol mdSpan={8} mdFixed lgSpan={6} lgFixed alignment="left" columnElement="aside">md.8 lg.6</GridCol>
                        </GridBlock>
                    </Grid>
                `}
            </ExampleSource>

            <Header3>Offsets</Header3>
            <ParagraphMd>Authors can push content to the left or right using the <code>offset</code> prop. Positive numbers will push content in the main writing direction (Ex. left for English and Spanish but right for Arabic) and negative numbers will push content in the opposite of a page’s writing direction. Like <code>span</code>, offset also can be set for responsive breakpoints: <code>lgOffset</code>, <code>mdOffset</code>, and <code>smOffset</code>.</ParagraphMd>
            <div data-code>
                <Grid className="sg-grid">
                    <GridBlock className="GridBlockDocs">
                        <GridCol className="GridColDocs" xsSpan={4}>xs.4</GridCol>
                        <GridCol className="GridColDocs" xsSpan={8} offset={4}>xs.8 xsOffset.4</GridCol>
                    </GridBlock>
                </Grid>
            </div>
            <ExampleSource>
                {`
                    <Grid>
                        <GridBlock>
                            <GridCol xsSpan={4}>xs.4</GridCol>
                            <GridCol xsSpan={8} offset={4}>xs.8</GridCol>
                        </GridBlock>
                    </Grid>
                `}
            </ExampleSource>

            <Header3>Form Grid</Header3>
            <ParagraphMd>Forms have tighter spacing. Add the <code>formColumn</code> property to the GridCol component to use the grid for forms.</ParagraphMd>
            <div data-code>
                <Grid>
                    <GridBlock className="GridBlockDocs">
                        <GridCol className="GridColDocs"
                            mdSpan={12}
                            formColumn
                        >
                             <InputText
                                name="formGridFirstName"
                                id="formGridFirstName"
                                label="First Name"
                            />
                        </GridCol>
                        <GridCol className="GridColDocs"
                            mdSpan={12}
                            formColumn
                        >
                            <InputText
                                name="formGridLastName"
                                id="formGridLastName"
                                label="Last Name"
                            />
                        </GridCol>
                        <GridCol className="GridColDocs"
                            formColumn
                        >
                            <InputText
                                name="formGridAddress"
                                id="formGridAddress"
                                label="Address"
                            />
                        </GridCol>
                    </GridBlock>
                </Grid>
            <ExampleSource>
                {`
 <Grid>
    <GridBlock>
        <GridCol
            mdSpan={6}
            formColumn
        >
                <InputText
                name="formGridFirstName"
                id="formGridFirstName"
                label="First Name"
            />
        </GridCol>
        <GridCol
            mdSpan={6}
            formColumn
        >
            <InputText
                name="formGridLastName"
                id="formGridLastName"
                label="Last Name"
            />
        </GridCol>
        <GridCol
            formColumn
        >
            <InputText
                name="formGridAddress"
                id="formGridAddress"
                label="Address"
            />
        </GridCol>
    </GridBlock>
</Grid>
                `}
            </ExampleSource>
        </div>
    </div>
    );
};
