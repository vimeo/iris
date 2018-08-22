import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import {
    List,
    ListItem,
    NotificationNeutral,
    ParagraphMd,
    VerticalMenuHeaderGroup,
} from '../index';
import CirclePlusIcon from '../icons/circle-plus';


class VerticalMenuHeaderGroupDocs extends React.Component {

    _handleClick = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>VerticalMenuHeaderGroup is used to label a section of Vertical Menu by wrapping it as a child. This label will be an h3 by default but this can be changed with the <code>headerElement</code> prop.</ParagraphMd>
                <ParagraphMd>It optionally includes an action button. For an action button to appear, the following three props must be present:</ParagraphMd>
                <List>
                    <ListItem><code>actionButtonIcon</code> - an SVG component that will be the clickable icon button.</ListItem>
                    <ListItem><code>actionButtonTooltipText</code> - a text string describing the action that clicking the button will activate.</ListItem>
                    <ListItem><code>actionButtonOnClick</code> - a click handler function for the button.</ListItem>
                </List>
                <NotificationNeutral>
                    <ParagraphMd>
                    The <code>labelId</code> prop is required to associate the header with its child menu for assistive technologies.
                    </ParagraphMd>
                </NotificationNeutral>
                <div data-code style={{ width: '20rem' }}>
                    <VerticalMenuHeaderGroup
                        actionButtonIcon={<CirclePlusIcon />}
                        actionButtonTooltipText="Tooltip Text"
                        actionButtonOnClick={this._handleClick}
                        label="Section Label"
                        labelId="Section1"
                    >
                        <ParagraphMd>Child Menu Here</ParagraphMd>
                    </VerticalMenuHeaderGroup>
                </div>

                <ExampleSource>
                    {`
<VerticalMenuHeaderGroup
    actionButtonIcon={<CirclePlusIcon />}
    actionButtonTooltipText="Tooltip Text"
    actionButtonOnClick={this._handleClick}
    label="Section Label"
    labelId="Section1"
>
    ...Child Menu Here
</VerticalMenuHeaderGroup>
                        `}
                </ExampleSource>
                </div>
        );
    }
}

export default VerticalMenuHeaderGroupDocs;
