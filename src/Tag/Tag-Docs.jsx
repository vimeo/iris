import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Tag } from '../index';

class TagDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    _dismissHandler = () => {
        alert('deleted this tag'); // eslint-disable-line no-alert
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
                    <ParagraphMd>Tags can also be delete-able by passing a handler function to <code>onDismiss</code></ParagraphMd>
                <div data-code>
                    <Tag
                        onDismiss={this._dismissHandler}
                        size="md"
                    >
                        Animation
                    </Tag>
                    <Tag
                        onDismiss={this._dismissHandler}
                        size="md"
                    >
                        Narrative
                    </Tag>
                </div>

                <ExampleSource>
                    {`
<Tag
    onDismiss={this._dismissHandler}
    size="md"
>
    Animation
</Tag>
<Tag
    onDismiss={this._dismissHandler}
    size="md"
>
    Narrative
</Tag>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default TagDocs;
