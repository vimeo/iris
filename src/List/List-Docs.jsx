import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { List, ListItem, ParagraphMd, Header3, Header6 } from '../index';

class ListDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <Header3>Usage</Header3>
                    <ParagraphMd>ists require two compoents: <code>List</code> and <code>ListItem</code>.</ParagraphMd>
                    <ExampleSource>
                        {`
import { List, ListItem } from '@vimeo/iris';
`}
                    </ExampleSource>
                    <ParagraphMd>List type is determined by the <code>format</code> prop. Lists are <code>unordered</code> by default.</ParagraphMd>
                    <Header6>Unordered List</Header6>
                    <List>
                        <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
                        <ListItem>PRO support</ListItem>
                        <ListItem>Advanced privacy settings</ListItem>
                        <ListItem>Private link sharing</ListItem>
                    </List>

                    <ExampleSource>
                        {`
 <List>
    <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
    <ListItem>PRO support</ListItem>
    <ListItem>Advanced privacy settings</ListItem>
    <ListItem>Private link sharing</ListItem>
</List>
                        `}
                    </ExampleSource>
                    <Header6>Ordered and Alphabet Lists</Header6>
                    <List format="ordered">
                        <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
                        <ListItem>Community Values
                            <List format="alphabet">
                                <ListItem>Be cool and play nice.</ListItem>
                                <ListItem>Don’t spam or disrupt Vimeo.</ListItem>
                                <ListItem>Don’t be a creep.</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>PRO support</ListItem>
                        <ListItem>Advanced privacy settings</ListItem>
                        <ListItem>Private link sharing</ListItem>
                    </List>
                    <ExampleSource>
                        {`
<List format="ordered">
    <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
    <ListItem>Community Values
        <List format="alphabet">
            <ListItem>Be cool and play nice.</ListItem>
            <ListItem>Don’t spam or disrupt Vimeo.</ListItem>
            <ListItem>Don’t be a creep.</ListItem>
        </List>
    </ListItem>
    <ListItem>PRO support</ListItem>
    <ListItem>Advanced privacy settings</ListItem>
    <ListItem>Private link sharing</ListItem>
</List>
                        `}
                    </ExampleSource>
                </div>
            </div>
        );
    }
}

export default ListDocs;
