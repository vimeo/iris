import React from 'react';
import { LinkText, ParagraphMd, Header2, Header3 } from '../index';

import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';


class LinkTextDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>
                    Text-based links are styled with the <code>{'<LinkText></LinkText>'}</code> component. LinkText should always be used in the context of an Iris type component to ensure typographical consistancy.
                </ParagraphMd>
                <Header3>Formats</Header3>
                <div data-code>
                    <ParagraphMd>
                        <LinkText href="#">Primary (Default)</LinkText>
                    </ParagraphMd>
                    <ParagraphMd>
                        <LinkText format="warning" href="#">Warning</LinkText>
                    </ParagraphMd>

                    <div style={{ backgroundColor: 'black', padding: '1.25rem', marginBottom: '0.875rem' }}>
                        <ParagraphMd><LinkText format="light" href="#">Light</LinkText></ParagraphMd>
                    </div>
                </div>

                <ExampleSource>
                    {`
<LinkText href="#">Primary (Default)</LinkText>
<LinkText format="warning" href="#">Warning</LinkText>
<LinkText format="light" href="#">Light</LinkText>
                    `}
                </ExampleSource>

                <Header3>Decorations</Header3>
                <div data-code>
                    <ParagraphMd><LinkText decoration="loud">Loud</LinkText> makes the link more prominent.</ParagraphMd>

                    <ParagraphMd>The <LinkText decoration="silent">silent</LinkText> makes the link more subtle <strong>This should only be used in a standalone link where there are other contextual clues that the text is a link.</strong></ParagraphMd>

                    <Header2><LinkText decoration="inherit" href="#">The "Inherit" Decorator </LinkText></Header2>

                    <ParagraphMd>The inherit decorator keeps inherits the styles of its containing element and only modifies the text on hover as in the header above.</ParagraphMd>
                </div>

                <ExampleSource>
                    {`
<ParagraphMd>
    <LinkText decoration="loud" href="#">link text...</LinkText>
</ParagraphMd>

<ParagraphMd>
    <LinkText decoration="silent" href="#">link text...</LinkText>
</ParagraphMd>

<Header2>
    <LinkText decoration="inherit" href="#">link text...</LinkText>
</Header2>              
                    `}
                </ExampleSource>

                <Header3>LinkText as a Span in React-Router</Header3>
                <ParagraphMd>
                    When using React-Router the link formatting can be provided within the anchor tag created by React-Router <code>&lt;Link&gt;</code> tags by passing <code>element="span"</code> to the component.
                </ParagraphMd>

                <div>
                    <ParagraphMd>
                    <a href="#"><LinkText element="span">LinkText as Span</LinkText></a>
                    </ParagraphMd>
                </div>

                <ExampleSource>
                    {`
<Link to="/">
    <LinkText element="span">LinkText as Span</LinkText>
</Link>
<Route exact path="/" component={Home}/>
                    `}
                </ExampleSource>
                <Header3>Paragraph Example</Header3>
                <ParagraphMd>
                    My liege, and madam, to expostulate What majesty should be, what duty is, What day is day, night night, and <LinkText href="https://en.wikipedia.org/wiki/Hamlet" target="_blank">time is time</LinkText>, Were nothing but to waste night, day, and time; Therefore, since <LinkText href="https://en.wikipedia.org/wiki/William_Shakespeare" target="_blank">brevity is the soul of wit</LinkText>, And tediousness the limbs and outward flourishes, I will be brief. Your noble son is mad
                </ParagraphMd>
            </div>
        );
    }
}

export default LinkTextDocs;
