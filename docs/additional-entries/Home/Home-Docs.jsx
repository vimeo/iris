import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {
    Header3,
    ParagraphMd,
    LinkText,
} from '../../../src';
const HomeDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <ParagraphMd>Iris is a reuseable UI framework for Vimeo's Web Applications.</ParagraphMd>
            <Header3>Using Iris</Header3>
            <ParagraphMd>Iris can be imported from Vimeo's Artifactory instance through npm or yarn as <code>@vimeo/iris</code>.</ParagraphMd>
            <ExampleSource>
                {`
                    import {Button} from '@vimeo/iris';
                `}
            </ExampleSource>
            <Header3>Contributing to Iris</Header3>
            <ParagraphMd>To open a PR or report a bug, visit the <LinkText href="https://github.vimeows.com/Vimeo/iris" target="_blank">Iris GitHub Repo</LinkText>.</ParagraphMd>
            <Header3>Getting Help</Header3>
            <ParagraphMd>Reach out to the Iris team on Slack: <strong>#web-iris</strong></ParagraphMd>
        </div>
    );
};

export default HomeDocs;
