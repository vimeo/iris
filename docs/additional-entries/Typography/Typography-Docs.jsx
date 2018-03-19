import React from 'react';
import classNames from 'classnames';
import NotificationWarning from '../../../src/NotificationWarning/NotificationWarning';
import { ParagraphLg, ParagraphSm, ParagraphMd, ParagraphAltLg, ParagraphAltMd, ParagraphAltSm, Header1, Header2, Header3, Header4, Header5, Header6, HeaderAltSm } from '../../../src/Type';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

import styles from './Typography.scss';

const TypographyDocs = (props) => {

    return (
        <div>
            <ParagraphMd>Typography sits at the heart of every component within the Iris system. Typography handles the font sizes, weights, colors, and spacing for text related elements on Vimeo.</ParagraphMd>

            <ParagraphMd><a href="page/TypeSpecimen">View Typography Specimen</a>.</ParagraphMd>

            <Header3>Type Components</Header3>
            <ParagraphMd>Type styles have been abstracted to named type components.</ParagraphMd>

            <Header4>Importing the Type Components</Header4>
            <ExampleSource>
                {`
// import just the components you need
import { ParagraphMd, Header1, Header2} from '@vimeo/iris'classnames;
                `}
            </ExampleSource>

            <Header4>Using Type Components</Header4>
            <ParagraphMd>The most basic use is by calling the component by name and having it generate the element that matches its name.</ParagraphMd>
            <Header1>Header 1</Header1>
            <Header2>Header 2</Header2>
            <Header3>Header 3</Header3>
            <Header4>Header 4</Header4>
            <Header5>Header 5</Header5>
            <Header6>Header 6</Header6>
            <HeaderAltSm>Header Small (Alternative)</HeaderAltSm>
            <ParagraphLg>ParagraphLg</ParagraphLg>
            <ParagraphMd>ParagraphMd</ParagraphMd>
            <ParagraphSm>ParagraphSm</ParagraphSm>
            <ParagraphAltLg>ParagraphLg (Alternative)</ParagraphAltLg>
            <ParagraphAltMd>ParagraphMd (Alternative)</ParagraphAltMd>
            <ParagraphAltSm>ParagraphSm (Alternative)</ParagraphAltSm>

             <ExampleSource>
                {`
<Header1>Header 1</Header1>
<Header2>Header 2</Header2>
<Header3>Header 3</Header3>
<Header4>Header 4</Header4>
<Header5>Header 5</Header5>
<Header6>Header 6</Header6>
<HeaderAltSm>Header Small (Alternative)</HeaderAltSm>
<ParagraphLg>ParagraphLg</ParagraphLg>
<ParagraphMd>ParagraphMd</ParagraphMd>
<ParagraphSm>ParagraphSm</ParagraphSm>
<ParagraphAltLg>ParagraphLg (Alternative)</ParagraphAltLg>
<ParagraphAltMd>ParagraphMd (Alternative)</ParagraphAltMd>
<ParagraphAltSm>ParagraphSm (Alternative)</ParagraphAltSm>
                `}
            </ExampleSource>
            <Header4>Light Text Format</Header4>
            <ParagraphMd>For text on a dark background add <code>format="light"</code> to the element.</ParagraphMd>
            <div className="Pattern-DarkBlock">

                <Header1 format="light">Header 1</Header1>
                <Header2 format="light">Header 2</Header2>
                <Header3 format="light">Header 3</Header3>
                <Header4 format="light">Header 4</Header4>
                <Header5 format="light">Header 5</Header5>
                <Header6 format="light">Header 6</Header6>
                <ParagraphLg format="light">ParagraphLg</ParagraphLg>
                <ParagraphMd format="light">ParagraphMd</ParagraphMd>
                <ParagraphSm format="light">ParagraphSm</ParagraphSm>
            </div>

             <ExampleSource>
                {`
<Header4 format="light">Using Type Components</Header4>
<Header1 format="light">Header 1</Header1>
<Header2 format="light">Header 2</Header2>
<Header3 format="light">Header 3</Header3>
<Header4 format="light">Header 4</Header4>
<Header5 format="light">Header 5</Header5>
<Header6 format="light">Header 6</Header6>
<ParagraphLg format="light">ParagraphLg</ParagraphLg>
<ParagraphMd format="light">ParagraphMd</ParagraphMd>
<ParagraphSm format="light">ParagraphSm</ParagraphSm>
                `}
            </ExampleSource>

            <Header3>Type Components With Element Overrides</Header3>
            <ParagraphMd>By passing an element name to the <code>element</code> prop of a type component, you can change what type of element is actually rendered into the HTML, while keeping the visual representation associated with the component name.</ParagraphMd>
            <ParagraphMd element="h1">I'm really an H1</ParagraphMd>
            <Header1 element="p">I'm really a p tag</Header1>
            <ExampleSource>
                {`
<ParagraphMd element="h1">I'm really an H1</ParagraphMd>
<Header1 element="p">I'm really a p tag</Header1>
                `}
            </ExampleSource>
            <NotificationWarning
                headerText="Overriding Type Styles"
            >
                <ParagraphMd>There are instances when design may require a modification to Iris type styles, such as a need to remove default treatments of margins or padding. This can be acheived by passing a class to the type component and styling it in your module.</ParagraphMd>
                <ParagraphMd>Before pushing changes that adjust Iris type styles be sure to cc the <a href="https://github.vimeows.com/orgs/Vimeo/teams/iris">Iris</a> <code>@Vimeo/iris</code> team in your PR for review.</ParagraphMd>
            </NotificationWarning>
            <Header3>Suppressing Margins</Header3>
            <ParagraphMd>The <code>noMargin</code> boolean prop can be used to suppress the default margin-bottom on type elements if required by design.</ParagraphMd>
            <Header3>Using Element or Class Selectors With Mixins</Header3>
            <ParagraphMd>
                Type Components should be used whenever possible, but type styles can be accessed through SCSS mixins if necessary. A common use-case for this may be the need to style with element selectors because you are receiving unadorned HTML through a string-manager or user-generated content.
            </ParagraphMd>
            <Header4>Example: Importing Type Mixins</Header4>
            <ParagraphMd>Type styles can also be imported as mixins through 'helpers-all'.</ParagraphMd>

            <ExampleSource>
                {`
@import '../src/globals/sass/helpers-all';                
.NotificationsBody {
    @include ParagraphMD;
}
                    `}
            </ExampleSource>

            <Header4>Example: Using Element Selectors</Header4>
            <div data-code>
                <div className={styles.ExampleComponent}>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>
                </div>
            </div>
            <ExampleSource>
                {`
/* Import Header Styles into the component to use global mixins */                    
@import "../../../src/globals/_helpers-all";
                    
.ExampleComponent {
    h1 {
        @include Header1;
    }
    
    h2 {
        @include Header2;
    }

    h3 {
        @include Header3;
    }

    h4 {
        @include Header4;
    }

    h5 {
        @include Header5;
    }

    h6 {
        @include Header6;
    }
}
                `}
            </ExampleSource>
            <ExampleSource>
                {`
<div className={styles.ExampleComponent}>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h4>Header 4</h4>
</div>
                    `}
            </ExampleSource>
        </div>
    );
};

export default TypographyDocs;
