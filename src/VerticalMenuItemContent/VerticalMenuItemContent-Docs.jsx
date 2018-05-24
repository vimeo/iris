import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import PopOutIcon from '../icons/pop-out.svg';
import {
    Header3,
    List,
    ListItem,
    ParagraphMd,
    VerticalMenuItem,
    VerticalMenuItemContent,
} from '../index';

const VerticalMenuItemContentDocs = (props) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('Demo Click Handler: You Clicked:', e.target);
    };

    return (
        <div className="Pattern__docs">
            <ParagraphMd>VerticalMenuItemContent provides the inner content for the <code>VerticalMenuItem</code> component and should be wraped in something that generates a link (e.g. anchor tag, React Router Link).</ParagraphMd>
            <ParagraphMd>See the VerticalMenuItem documentation for more examples.</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>isActive</code> should be passed used indicate the a currently active item selection.</ListItem>
                <ListItem><code>truncateLabel</code> will prevent the label from going to multiple lines using an elipsis truncation.</ListItem>
                <ListItem><code>labelIcon</code> adds an icon to the label text.</ListItem>
                <ListItem><code>linkActionIcon</code> adds an icon to the far right of the navigation item, this is usually use to indicate the link's behavior (e.g. "will pop-out a window").</ListItem>
            </List>

            <div style={{ 'maxWidth': '25rem' }}>
                <VerticalMenuItem>
                    <a
                        href="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            label="Stand Alone Link With Link Icon"
                            linkActionIcon={(<PopOutIcon />)}
                        />
                    </a>
                </VerticalMenuItem>
            </div>
            <ExampleSource>
                {`
import { VerticalMenuItem, VerticalMenuItemContent } from '@vimeo/iris';

<VerticalMenuItem>
    <a
        href="#"
        onClick={onClickHandler}
    >
        <VerticalMenuItemContent
            label="Stand Alone Link With Link Icon"
            linkActionIcon={(<PopOutIcon />)}
        />
    </a>
</VerticalMenuItem>
                    `}
            </ExampleSource>
        </div>
    );
};

export default VerticalMenuItemContentDocs;
