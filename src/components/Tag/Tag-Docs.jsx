import React from 'react';
import Tag from './Tag';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../../../src/utility_components/Type/Type';

class TagDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>Tags are button-like elements that show taxonomical tags</ParagraphMd>
                <div data-code>
                    <Tag size="sm">Animation</Tag>
                    <Tag size="md">Narrative</Tag>
                    <Tag size="lg">Comedy</Tag>
                </div>

                <ExampleSource>
                    {`
<Tag size="sm">Animation</Tag>
<Tag size="md">Narrative</Tag>
<Tag size="lg">Comedy</Tag>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default TagDocs;
