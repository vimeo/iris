import React from 'react';
import classNames from 'classnames';
import NotificationWarning from '../../../src/NotificationWarning/NotificationWarning';
import {
    ParagraphLg,
    ParagraphSm,
    ParagraphMd,
    ParagraphXs,
    ParagraphAltLg,
    ParagraphAltMd,
    ParagraphAltSm,
    ParagraphAltXs,
    Header1,
    Header2,
    Header3,
    Header4,
    Header5,
    Header6,
    HeaderAltSm,
    BigStat,
} from '../../../src/Type';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

import styles from './Typography.scss';

const TypographyDocs = props => {
    return (
        <div>
            <ParagraphMd>
                Typography handles the font sizes, weights, colors, and spacing
                for text related elements on Vimeo.
            </ParagraphMd>

            <ParagraphMd>
                <a href="page/TypeSpecimen">View Typography Specimen</a>.
            </ParagraphMd>

            <Header3>Type Components</Header3>
            <ParagraphMd>
                Type styles have been abstracted to named type components.
            </ParagraphMd>

            <Header4>Importing the Type Components</Header4>
            <ExampleSource>
                {`
// import just the components you need
import { ParagraphMd, Header1, Header2} from '@vimeo/iris'classnames;
                `}
            </ExampleSource>

            <Header4>Using Type Components</Header4>
            <ParagraphMd>
                The most common use is calling the component by name and having
                it generate the element that matches its name.
            </ParagraphMd>
            <BigStat>12.2k (BigStat)</BigStat>
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
            <ParagraphXs>ParagraphXs</ParagraphXs>
            <ParagraphAltLg>ParagraphLg (Alternative)</ParagraphAltLg>
            <ParagraphAltMd>ParagraphMd (Alternative)</ParagraphAltMd>
            <ParagraphAltSm>ParagraphSm (Alternative)</ParagraphAltSm>
            <ParagraphAltXs>ParagraphXs (Alternative)</ParagraphAltXs>
            <ExampleSource>
                {`
<BigStat>12.2k (BigStat)</BigStat>
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
<ParagraphXs>ParagraphXs</ParagraphXs>
<ParagraphAltLg>ParagraphLg (Alternative)</ParagraphAltLg>
<ParagraphAltMd>ParagraphMd (Alternative)</ParagraphAltMd>
<ParagraphAltSm>ParagraphSm (Alternative)</ParagraphAltSm>
<ParagraphAltXs>ParagraphXs (Alternative)</ParagraphAltXs>
                `}
            </ExampleSource>
            <Header4>Light Text Format</Header4>
            <ParagraphMd>
                For text on a dark background add <code>format="light"</code> to
                the element.
            </ParagraphMd>
            <div className="Pattern-DarkBlock">
                <BigStat format="light">27% (BigStat)</BigStat>
                <Header1 format="light">Header 1</Header1>
                <Header2 format="light">Header 2</Header2>
                <Header3 format="light">Header 3</Header3>
                <Header4 format="light">Header 4</Header4>
                <Header5 format="light">Header 5</Header5>
                <Header6 format="light">Header 6</Header6>
                <HeaderAltSm format="light">
                    Header Small (Alternative)
                </HeaderAltSm>
                <ParagraphLg format="light">ParagraphLg</ParagraphLg>
                <ParagraphMd format="light">ParagraphMd</ParagraphMd>
                <ParagraphSm format="light">ParagraphSm</ParagraphSm>
                <ParagraphXs format="light">ParagraphXs</ParagraphXs>
            </div>

            <ExampleSource>
                {`
<Header4 format="light">Using Type Components</Header4>
<BigStat format="light">27% (BigStat)</BigStat>
<Header1 format="light">Header 1</Header1>
<Header2 format="light">Header 2</Header2>
<Header3 format="light">Header 3</Header3>
<Header4 format="light">Header 4</Header4>
<Header5 format="light">Header 5</Header5>
<Header6 format="light">Header 6</Header6>
<HeaderAltSm format="light">Header Small (Alternative)</HeaderAltSm>
<ParagraphLg format="light">ParagraphLg</ParagraphLg>
<ParagraphMd format="light">ParagraphMd</ParagraphMd>
<ParagraphSm format="light">ParagraphSm</ParagraphSm>
<ParagraphXs format="light">ParagraphXs</ParagraphXs>
                `}
            </ExampleSource>
            <Header4>White Text Format</Header4>
            <ParagraphMd>
                For white text add <code>format="white"</code> to the element.
            </ParagraphMd>
            <div className="Pattern-DarkBlock">
                <BigStat format="white">27% (BigStat)</BigStat>
                <Header1 format="white">Header 1</Header1>
                <Header2 format="white">Header 2</Header2>
                <Header3 format="white">Header 3</Header3>
                <Header4 format="white">Header 4</Header4>
                <Header5 format="white">Header 5</Header5>
                <Header6 format="white">Header 6</Header6>
                <ParagraphLg format="white">ParagraphLg</ParagraphLg>
                <ParagraphMd format="white">ParagraphMd</ParagraphMd>
                <ParagraphSm format="white">ParagraphSm</ParagraphSm>
                <ParagraphXs format="white">ParagraphXs</ParagraphXs>
            </div>
            <ExampleSource>
                {`
<BigStat format="white">27% (BigStat)</BigStat>
<Header1 format="white">Header 1</Header1>
<Header2 format="white">Header 2</Header2>
<Header3 format="white">Header 3</Header3>
<Header4 format="white">Header 4</Header4>
<Header5 format="white">Header 5</Header5>
<Header6 format="white">Header 6</Header6>
<ParagraphLg format="white">ParagraphLg</ParagraphLg>
<ParagraphMd format="white">ParagraphMd</ParagraphMd>
<ParagraphSm format="white">ParagraphSm</ParagraphSm>
<ParagraphXs format="white">ParagraphXs</ParagraphXs>
                `}
            </ExampleSource>
            <Header4>Success Text Format</Header4>
            <ParagraphMd>
                For Success text add <code>format="success"</code> to the element.
            </ParagraphMd>
            <div className="Pattern-DarkBlock">
                <BigStat format="success">27% (BigStat)</BigStat>
                <Header1 format="success">Header 1</Header1>
                <Header2 format="success">Header 2</Header2>
                <Header3 format="success">Header 3</Header3>
                <Header4 format="success">Header 4</Header4>
                <Header5 format="success">Header 5</Header5>
                <Header6 format="success">Header 6</Header6>
                <ParagraphLg format="success">ParagraphLg</ParagraphLg>
                <ParagraphMd format="success">ParagraphMd</ParagraphMd>
                <ParagraphSm format="success">ParagraphSm</ParagraphSm>
                <ParagraphXs format="success">ParagraphXs</ParagraphXs>
            </div>
            <ExampleSource>
                {`
<BigStat format="success">27% (BigStat)</BigStat>
<Header1 format="success">Header 1</Header1>
<Header2 format="success">Header 2</Header2>
<Header3 format="success">Header 3</Header3>
<Header4 format="success">Header 4</Header4>
<Header5 format="success">Header 5</Header5>
<Header6 format="success">Header 6</Header6>
<ParagraphLg format="success">ParagraphLg</ParagraphLg>
<ParagraphMd format="success">ParagraphMd</ParagraphMd>
<ParagraphSm format="success">ParagraphSm</ParagraphSm>
<ParagraphXs format="success">ParagraphXs</ParagraphXs>
                `}
            </ExampleSource>
            <Header3>Type Components With Element Overrides</Header3>
            <ParagraphMd>
                By passing an element name to the <code>element</code> prop of a
                type component, you can change what type of element is actually
                rendered into the HTML, while keeping the visual representation
                associated with the component name.
            </ParagraphMd>
            <ParagraphMd element="h1">I'm really an H1</ParagraphMd>
            <Header1 element="p">I'm really a p tag</Header1>
            <ExampleSource>
                {`
<ParagraphMd element="h1">I'm really an H1</ParagraphMd>
<Header1 element="p">I'm really a p tag</Header1>
                `}
            </ExampleSource>
            <NotificationWarning headerText="Overriding Type Styles">
                <ParagraphMd>
                    There are instances when design may require a modification
                    to Iris type styles, such as a need to remove default
                    treatments of margins or padding. This can be acheived by
                    passing a class to the type component and styling it in your
                    module.
                </ParagraphMd>
                <ParagraphMd>
                    Before pushing changes that adjust Iris type styles be sure
                    to cc the{' '}
                    <a href="https://github.vimeows.com/orgs/Vimeo/teams/iris">
                        Iris
                    </a>{' '}
                    <code>@Vimeo/iris</code> team in your PR for review.
                </ParagraphMd>
            </NotificationWarning>
            <Header3>Suppressing Margins</Header3>
            <ParagraphMd>
                The <code>noMargin</code> boolean prop can be used to suppress
                the default margin-bottom on type elements if required by
                design.
            </ParagraphMd>
            <Header1 noMargin>Header 1, No Margin</Header1>
            <ExampleSource>
                {`
<Header1 noMargin>Header 1, No Margin</Header1>
                `}
            </ExampleSource>
        </div>
    );
};

export default TypographyDocs;
