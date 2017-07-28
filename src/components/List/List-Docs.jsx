import React from 'react';
import { List, ListItem } from './List';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3, Header6 } from '../../../src/utility_components/Type/Type';

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

                    <Header3>Multi-dimensional Lists</Header3>
                    <ParagraphMd>Ul in Ul example</ParagraphMd>
                    <List>
                        <ListItem>You get to flex brain muscles</ListItem>
                        <ListItem>Everyday is different
                            <List>
                                <ListItem>Monday</ListItem>
                                <ListItem>Tuesday</ListItem>
                                <ListItem>Wednesday</ListItem>
                                <ListItem>Thursday
                                    <List>
                                        <ListItem>Scrum</ListItem>
                                        <ListItem>Design Review</ListItem>
                                        <ListItem>Demos</ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>Friday</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>It can take you in lots of directions</ListItem>
                        <ListItem>Good designers are in demand
                            <List>
                                <ListItem>NYC Job Openings</ListItem>
                                <ListItem>LA Job Openings</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>You can wear trainers to work</ListItem>
                    </List>

                    <ExampleSource>
                    {`
<List>
    <ListItem>You get to flex brain muscles</ListItem>
    <ListItem>Everyday is different
        <List>
            <ListItem>Monday</ListItem>
            <ListItem>Tuesday</ListItem>
            <ListItem>Wednesday</ListItem>
            <ListItem>Thursday
                <List>
                    <ListItem>Scrum</ListItem>
                    <ListItem>Design Review</ListItem>
                    <ListItem>Demos</ListItem>
                </List>
            </ListItem>
            <ListItem>Friday</ListItem>
        </List>
    </ListItem>
    <ListItem>It can take you in lots of directions</ListItem>
    <ListItem>Good designers are in demand
        <List>
            <ListItem>NYC Job Openings</ListItem>
            <ListItem>LA Job Openings</ListItem>
        </List>
    </ListItem>
    <ListItem>You can wear trainers to work</ListItem>
</List>
                        `}
                    </ExampleSource>

                    <ParagraphMd>Ol in Ul example</ParagraphMd>
                    <List>
                        <ListItem>Perseverance and optimism</ListItem>
                        <ListItem>Organization and focus</ListItem>
                        <ListItem>Linear thinking
                            <List isOrdered>
                                <ListItem>Lexical Scoping</ListItem>
                                <ListItem>Synchronous programming</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Adaptability</ListItem>
                        <ListItem>Resourcefulness</ListItem>
                    </List>
                    <ExampleSource>
                    {`
<List>
    <ListItem>Perseverance and optimism</ListItem>
    <ListItem>Organization and focus</ListItem>
    <ListItem>Linear thinking
        <List isOrdered>
            <ListItem>Lexical Scoping</ListItem>
            <ListItem>Synchronous programming</ListItem>
        </List>
    </ListItem>
    <ListItem>Adaptability</ListItem>
    <ListItem>Resourcefulness</ListItem>
</List>
                        `}
                    </ExampleSource>

                    <ParagraphMd>UL in Ol example</ParagraphMd>
                    <List isOrdered>
                        <ListItem>Perseverance and optimism</ListItem>
                        <ListItem>Organization and focus</ListItem>
                        <ListItem>Linear thinking
                            <List>
                                <ListItem>Lexical Scoping</ListItem>
                                <ListItem>Synchronous programming</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Adaptability</ListItem>
                        <ListItem>Resourcefulness</ListItem>
                    </List>
                    <ExampleSource>
                    {`
<List isOrdered>
    <ListItem>Perseverance and optimism</ListItem>
    <ListItem>Organization and focus</ListItem>
    <ListItem>Linear thinking
        <List>
            <ListItem>Lexical Scoping</ListItem>
            <ListItem>Synchronous programming</ListItem>
        </List>
    </ListItem>
    <ListItem>Adaptability</ListItem>
    <ListItem>Resourcefulness</ListItem>
</List>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ListDocs;
