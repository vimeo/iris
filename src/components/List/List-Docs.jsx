import React from 'react';
import { List, ListItem } from './List';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header6 } from '../../../src/utility_components/Type/Type';

class ListDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <ParagraphMd>List items can be styled as either <code>ul</code> or <code>ol</code> using the <code>isOrdered</code> prop.</ParagraphMd>
                    <Header6>Unordered List</Header6>
                    <List>
                        <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
                        <ListItem>PRO support</ListItem>
                        <ListItem>Advanced privacy settings</ListItem>
                        <ListItem>Private link sharing</ListItem>
                    </List>
                    <Header6>Ordered List</Header6>
                    <List isOrdered>
                        <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
                        <ListItem>PRO support</ListItem>
                        <ListItem>Advanced privacy settings</ListItem>
                        <ListItem>Private link sharing</ListItem>
                    </List>
                </div>

                <ExampleSource>
                    {`
<List>
    <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
    <ListItem>PRO support</ListItem>
    <ListItem>Advanced privacy settings</ListItem>
    <ListItem>Private link sharing</ListItem>
</List>
<List isOrdered>
    <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
    <ListItem>PRO support</ListItem>
    <ListItem>Advanced privacy settings</ListItem>
    <ListItem>Private link sharing</ListItem>
</List>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ListDocs;
