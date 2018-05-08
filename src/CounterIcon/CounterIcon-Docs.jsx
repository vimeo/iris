import React from 'react';
import CounterIcon from './CounterIcon';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';
import PlayIcon from '../icons/play.svg';
import CollectionIcon from '../icons/collections.svg';
class CounterIconDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>CounterIcons provide stat counts sybolized by an icon</ParagraphMd>
                <div data-code>
                    <CounterIcon
                        icon = {<PlayIcon />}
                        counterTitle="Download Count (Dark)"
                    >
                        2.12K
                    </CounterIcon>
                     <CounterIcon
                        href="http://www.vimeo.com"
                        icon = {<CollectionIcon />}
                        counterTitle="Play Count (Alternative)"
                    >
                        100
                    </CounterIcon>
                </div>

                <ExampleSource>
                    {`
<CounterIcon
    icon = {<PlayIcon />}
    counterTitle="Download Count (Dark)"
>
    2.12K
</CounterIcon>
    <CounterIcon
    icon = {<CollectionIcon />}
    counterTitle="Play Count (Alternative)"
>
    100
</CounterIcon>

                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default CounterIconDocs;
