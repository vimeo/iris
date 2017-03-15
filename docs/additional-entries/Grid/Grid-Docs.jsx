import * as React from 'react';
import { GridBlock, GridCol, Grid } from '../../../src/components/Grid/Grid.jsx';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function GridDocs() {

	return (
		<div>
			<p>The Iris Grid system is a 24 column responsive flexbox based grid. The Grid component provides an engineer-friendly re-useable abstraction of the HTML structure required to use this grid.</p>

			<h3>Easy Fundamentals: The Power of 3</h3>

			<ul>
				<li>Grid is composed of 3 components:
					<ul>
						<li>Container: <code>{'<Grid></Grid>'}</code> The container is the parent of all elements and establishes: max-width for content, gutter spacing outside the content, and the grid styles for its children.</li>
						<li>GridBlocks: <code>{`<GridBlock></GridBlock>`}</code> sets a grid's context and can be used to group grid items together.</li>
						<li>GridColumns: <code>{`<GridCol></GridCol>`}</code> Are vertical structures where the actual content exists and is manipulated onto the grid.</li>
					</ul>
				</li>
				<li>Small Screens First
					<ul>
						<li>
							Grid sizing starts with the xsSpan prop. Values passed to this prop will determine the column sizing from the smallest width available in the browser upwards. Additional span props such as "mdSpan" can be added to resize the column at corresponding breakpoints (see breakpoints). If no xsSpan sizing prop is passed, the column will default to <code>xsSpan={24}</code>.
						</li>
					</ul>
				</li>
			</ul>

			<h3>Simple Set-Up:</h3>
			<p>Import the Grid, GridBlock, and GridColumn components into your working space:</p>
			<ExampleSource>
				{`
					import {GridBlock, GridCol, Grid} from 'iris/Grid';
				`}
			</ExampleSource>
			<p>Set-up your Grid component and place the amount of needed columns into the space:</p>
			<div data-code>
				<Grid className="sg-grid">
					<GridBlock>
						<GridCol className="sg-col">xs.24</GridCol>
						<GridCol className="sg-col">xs.24</GridCol>
					</GridBlock>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
					    <GridBlock>
						    <GridCol className="sg-col">xs.24</GridCol>
						    <GridCol className="sg-col">xs.24</GridCol>
					    </GridBlock>
					</Grid>
				`}
			</ExampleSource>

			<h3>Basic Usage</h3>
			<p>Column widths are controlled by a <code>span</code> prop. Span props accept strings as values that must be between 1-24 or use the keyword <code>half</code>, <code>third</code>, or <code>quarter</code>. To trigger responsive design breakpoints have been set up as props.  <code>xlSpan</code> (105em+), <code>lgSpan</code> (80em+), <code>mdSpan</code> (48em+), and <code>smSpan</code> (30em+). Columns by default are set to span the full 24 column space of its parent.</p>
			<div data-code>
				<Grid className="sg-grid">
					<GridBlock>
						<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
						<GridCol className="sg-col" xsSpan={6} lgSpan={20} mdSpan={16} smSpan={24}>xs.6 lg.20 md.16 sm.24</GridCol>
						<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
						<GridCol className="sg-col" xsSpan={6}>xs. 6</GridCol>
					</GridBlock>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
						<GridBlock>
							<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
							<GridCol className="sg-col" xsSpan={6} lgSpan={20} mdSpan={16} smSpan={24}>xs.6 lg.20 md.16 sm.24</GridCol>
							<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
							<GridCol className="sg-col" xsSpan={6}>xs. 6</GridCol>
						</GridBlock>
					</Grid>
				`}
			</ExampleSource>

			<h3>Nesting</h3>
			<p>Nesting Columns is easy as pie: inside of any <code>{`<GridCol></GridCol>`}</code>  wrap its children in the <code>{`<GridBlock></GridBlock>`}</code> component. This will create a new 24 column grid bound by the width of its containing column. Note that in the example below the nested children <code>{`<GridCol xsSpan={12}></GridCol>`}</code>  map to half of the parents (24/2 = 12 therefore 12 GridColumns is half the space of the parent container).</p>
			<div data-code>
				<Grid className="sg-grid">
					<GridBlock>
						<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
						<GridCol className="sg-col" xsSpan={6}>
							xs.6
							<GridBlock className="sg-block">
								<GridCol className="sg-col" xsSpan={12}>xs.12</GridCol>
								<GridCol className="sg-col" xsSpan={12}>xs.12</GridCol>
							</GridBlock>
						</GridCol>
						<GridCol className="sg-col" xsSpan={6}>xs. 6</GridCol>
						<GridCol className="sg-col" xsSpan={6}>xs. 6</GridCol>
					</GridBlock>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
					    <GridBlock>
							<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
							<GridCol className="sg-col" xsSpan={6}>
								xs.6
								<GridBlock className="sg-block">
									<GridCol className="sg-col" xsSpan={12}>xs.12</GridCol>
									<GridCol className="sg-col" xsSpan={12}>xs.12</GridCol>
								</GridBlock>
							</GridCol>
							<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
							<GridCol className="sg-col" xsSpan={6}>xs.6</GridCol>
						</GridBlock>
					</Grid>
				`}
			</ExampleSource>

			<h3>Offsets</h3>
			<p>Authors can push content to the left or right using the <code>offset</code> prop. Positive numbers will push content in the main writing direction (Ex. left for English and Spanish but right for Arabic) and negative numbers will push content in the opposite of a page’s writing direction. Like <code>span</code>, offset also can be set for responsive breakpoints: <code>lgOffset</code>, <code>mdOffset</code>, and <code>smOffset</code>.</p>
			<div data-code>
				<Grid className="sg-grid">
					<GridBlock>
						<GridCol className="sg-col" xsSpan={4}>xs.4</GridCol>
						<GridCol className="sg-col" xsSpan={8} offset={4}>xs.8 xsOffset.4</GridCol>
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
		</div>

	);
};
