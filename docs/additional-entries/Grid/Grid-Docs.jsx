import * as React from 'react';
import {Block, Col, Grid} from  '../../../src/components/Grid/Grid.jsx';
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
						<li>Blocks: <code>{`<Block></Block>`}</code> sets a grid's context and can be used to group grid items together.</li>
						<li>Columns: <code>{`<Col></Col>`}</code> Are vertical structures where the actual content exists and is manipulated onto the grid.</li>
					</ul>
				</li>
				<li>Small Screens First
					<ul>
						<li>
							The grid's columns are be default set for the smallest screen size also called the xsm breakpoint. Therefore a <code>span</code> declaration styles begin at 0 breakpoints and will continue to exist until a <code>sm</code>, <code>md</code>, or <code>lg</code> override has been passed through. In other words larger breakpoints take precedence over the smaller ones that precede them. Style changes for a breakpoint override appear after a browser has reached the minimum width of larger screen size.
						</li>
					</ul>
				</li>
			</ul>

			<h3>Simple Set-Up:</h3>
			<p>Import the Grid, Block, and Column components into your working space:</p>
			<ExampleSource>
				{`
					import {Block, Col, Grid} from 'iris/Grid';
				`}
			</ExampleSource>
			<p>Set-up your Grid component and place the amount of needed columns into the space:</p>
			<div data-code>
				<Grid className="sg-grid">
				    <Block>
				    <Col className="sg-col"></Col>
				    </Block>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
					    <Block>
					    <Col></Col>
					    </Block>
					</Grid>
				`}
			</ExampleSource>

			<h3>Basic Usage</h3>
			<p>Column widths are controlled by a <code>span</code> prop. Span props accept strings as values that must be between 1-24 or use the keyword <code>half</code>, <code>third</code>, or <code>quarter</code>. To trigger responsive design breakpoints have been set up as props.  <code>xlgSpan</code> (105em+), <code>lgSpan</code> (80em+), <code>mdSpan</code> (48em+), and <code>smSpan</code> (30em+). Columns by default are set to span the full 24 column space of its parent.</p>
			<div data-code>
				<Grid className="sg-grid">
					<Block>
					<Col className="sg-col" xsSpan="6-fixed">testing</Col>
					<Col className="sg-col" xsSpan="6" lgSpan="20" mdSpan="16" smSpan="24"></Col>
					<Col className="sg-col" xsSpan="quarter"></Col>
					<Col className="sg-col" xsSpan="6"></Col>
					</Block>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
					    <Block>
					    <Col xsSpan="6"></Col>
					    <Col xsSpan="6" lgSpan="20" mdSpan="16" smSpan="24"></Col>
					    <Col xsSpan="quarter"></Col>
					    <Col xsSpan="6"></Col>
					    </Block>
					</Grid>
				`}
			</ExampleSource>

			<h3>Nesting</h3>
			<p>Nesting Columns is easy as pie, inside of a <code>{`<Col></Col>`}</code>  wrap the children in a <code>{`<Block></Block>`}</code> . It's important to keep in mind that nested children are also built out of a columns. In the example below the nested children <code>{`<Col xsSpan="12"></Col>`}</code>  map to half of the parents (24/2 = 12 therefore 12 columns is half the space of the parent container).</p>
			<div data-code>
				<Grid className="sg-grid">
					<Block>
					<Col className="sg-col" xsSpan="6"></Col>
					<Col className="sg-col" xsSpan="6">
						<Block className="sg-block">
							<Col className="sg-col" xsSpan="12"></Col>
							<Col className="sg-col" xsSpan="12"></Col>
						</Block>
					</Col>
					<Col className="sg-col" xsSpan="6"></Col>
					<Col className="sg-col" xsSpan="6"></Col>
					</Block>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
					    <Block>
					    <Col xsSpan="4"></Col>
					    <Col xsSpan="4">
					        <Block>
					            <Col xsSpan="12"></Col>
					            <Col xsSpan="12"></Col>
					        </Block>
					    </Col>
					    <Col xsSpan="4"></Col>
					    <Col xsSpan="4"></Col>
					    </Block>
					</Grid>
				`}
			</ExampleSource>

			<h3>Offsets</h3>
			<p>Authors can push content to the left or right using the <code>offset</code> prop. Positive numbers will push content in the main writing direction (Ex. left for English and Spanish but right for Arabic) and negative numbers will push content in the opposite of a page’s writing direction. Like <code>span</code>, offset also can be set for responsive breakpoints: <code>lgOffset</code>, <code>mdOffset</code>, and <code>smOffset</code>.</p>
			<div data-code>
				<Grid className="sg-grid">
					<Block>
					<Col className="sg-col" xsSpan="4"></Col>
					<Col className="sg-col" xsSpan="8" offset="4"></Col>
					</Block>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
					    <Block>
					    <Col xsSpan="4"></Col>
					    <Col xsSpan="8" offset="4"></Col>
					    </Block>
					</Grid>
				`}
			</ExampleSource>

			<h3>Additional Styling with Classes</h3>
			<p>Authors can pass through any additional styling needs to all Grid components by using the ‘className’ prop and passing it a string.</p>
			<div data-code>
				<Col className="sg-col my-class"></Col>
			</div>
			<ExampleSource>
				{`
					<Col className="my-class"></Col>
				`}
			</ExampleSource>
		</div>

	);
};
