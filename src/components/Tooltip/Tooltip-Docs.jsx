import React from 'react';
import Tooltip from './Tooltip';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class TooltipDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>The tooltip base is a stateless component that can be used for other components who require a tooltip but may not want all the event handlers tat come with the overlay.</ParagraphMd>

                <Header3>Sizes 'sm' and 'lg'</Header3>
                <ParagraphMd>The default size for tooltips is set for single line short bits of information. Multi-line tooltips are handled by changing the size prop to <code>lg</code>.</ParagraphMd>

                <div data-code>
                    <div style={{ marginBottom: '1rem' }}>
                        <Tooltip>Default Small Tooltip</Tooltip><br />
                        <Tooltip size="lg">Large Tooltip: a mind needs books as a sword needs a whetstone, if it is to keep its edge</Tooltip>
                    </div>
                </div>
                <ExampleSource>
                {`
<Tooltip>Default Small Tooltip</Tooltip>
<Tooltip size="lg">Large Tooltip: a mind needs books as a sword needs a whetstone, if it is to keep its edge</Tooltip>
                `}
                </ExampleSource>
            </div>
        );
    }
}

export default TooltipDocs;
