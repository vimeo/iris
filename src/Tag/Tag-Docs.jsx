import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
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
                    <Tag size="xs">Documentary</Tag>
                    <Tag size="sm">Animation</Tag>
                    <Tag size="md">Narrative</Tag>
                    <Tag size="lg">Comedy</Tag>
                    <Tag
                        onDismiss={this._dismissHandler}
                        size="lg"
                    >
                        Comedy
                    </Tag>
                </div>

                <div className="Pattern-DarkBlock">
                    <Tag format="dark" size="xs">Documentary</Tag>
                    <Tag format="dark" size="sm">Animation</Tag>
                    <Tag format="dark" size="md">Narrative</Tag>
                    <Tag format="dark" size="lg">Comedy</Tag>
                    <Tag
                        format="dark"
                        onDismiss={this._dismissHandler}
                        size="lg"
                    >
                        Comedy
                    </Tag>
                </div>

                <ExampleSource>
                    {`
<Tag size="xs">Documentary</Tag>
<Tag size="sm">Animation</Tag>
<Tag size="md">Narrative</Tag>
<Tag size="lg">Comedy</Tag>
<Tag format="dark" size="xs">Documentary</Tag>
<Tag format="dark" size="sm">Animation</Tag>
<Tag format="dark" size="md">Narrative</Tag>
<Tag format="dark" size="lg">Comedy</Tag>
<Tag
    format="dark"
    onDismiss={this._dismissHandler}
    size="lg"
>
    Comedy
</Tag>
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
