import * as React from 'react';
import Block from './Block';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class BlockDocs extends React.Component {
    render() {
        return (
			<div>
				<div data-code>
					<Block />
				</div>

				<ExampleSource>
					{`
					<Block />
					`}
				</ExampleSource>
			</div>

        );
    }

}

export default BlockDocs;
