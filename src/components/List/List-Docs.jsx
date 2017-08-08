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
                <div>
                    <ParagraphMd>Lists can be added to your component by importing both the <code>List</code> and <code>ListItem</code> components.</ParagraphMd>
                </div>
                <ExampleSource>
{`
import { List, ListItem } from './List';
`}
                </ExampleSource>
                <div data-code>
                    <Header3>Usage</Header3>
                    <ParagraphMd>List items can be styled as either <code>ul</code> or <code>ol</code> using the <code>format</code> prop.</ParagraphMd>
                    <Header6>Unordered List</Header6>
                    <List>
                        <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
                        <ListItem>PRO support</ListItem>
                        <ListItem>Advanced privacy settings</ListItem>
                        <ListItem>Private link sharing</ListItem>
                    </List>
                    <Header6>Ordered List</Header6>
                    <List format="ordered">
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
<List format="ordered">
    <ListItem>Gorgeous, high-quality video sharing on desktop, mobile, tablet, and TV</ListItem>
    <ListItem>PRO support</ListItem>
    <ListItem>Advanced privacy settings</ListItem>
    <ListItem>Private link sharing</ListItem>
</List>
                        `}
                    </ExampleSource>

                    <Header3>Multi-dimensional Lists</Header3>
                    <Header6>Ul in Ul example</Header6>
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
                                <ListItem>UI/Interation</ListItem>
                                <ListItem>Brand</ListItem>
                                <ListItem>Motion</ListItem>
                                <ListItem>3D</ListItem>
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

                    <Header6>Ol in Ul example</Header6>
                    <List>
                        <ListItem>Perseverance and optimism</ListItem>
                        <ListItem>Organization and focus</ListItem>
                        <ListItem>Linear thinking
                            <List format="ordered">
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
        <List format="ordered">
            <ListItem>Lexical Scoping</ListItem>
            <ListItem>Synchronous programming</ListItem>
        </List>
    </ListItem>
    <ListItem>Adaptability</ListItem>
    <ListItem>Resourcefulness</ListItem>
</List>
                        `}
                    </ExampleSource>

                    <Header6>UL in Ol example</Header6>
                    <ParagraphMd>Lowercase alphabtical lists can be created as well, but should only be used when needed. In most cases bullets and numbers are the preferred options.</ParagraphMd>
                    <List format="ordered">
                        <ListItem>Perseverance and optimism</ListItem>
                        <ListItem>Organization and focus</ListItem>
                        <ListItem>Linear thinking
                            <List format="alphabet">
                                <ListItem>Lexical Scoping</ListItem>
                                <ListItem>Synchronous programming</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>Adaptability</ListItem>
                        <ListItem>Resourcefulness</ListItem>
                    </List>
                    <ExampleSource>
                    {`
<List format="ordered">
    <ListItem>Perseverance and optimism</ListItem>
    <ListItem>Organization and focus</ListItem>
    <ListItem>Linear thinking
        <List format="alphabet">
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
