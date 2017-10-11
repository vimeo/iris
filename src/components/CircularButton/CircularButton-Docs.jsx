import React from 'react';
import CircularButton from './CircularButton';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import PlusIcon from '../../../src/globals/svg/plus.svg';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type';
const CircularButtonDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <Header3>Regular Circular Buttons</Header3>
            <ParagraphMd>These are used as an alternative button style to default buttons. The format prop styles the color, fill, and stroke of this component. Primary is the default.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="secondary"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="alternative"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="negative"
                    icon={<PlusIcon />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    icon={<PlusIcon />}
         />
<CircularButton
    format="secondary"
    icon={<PlusIcon />}
         />
<CircularButton
    format="alternative"
    icon={<PlusIcon />}
     />
<CircularButton
    format="negative"
    icon={<PlusIcon />}
     />
                    `}
            </ExampleSource>


            <Header3>Outline Circular Buttons</Header3>
            <ParagraphMd>In busy UIs sometimes a lighter weight button is necessary. Instances that require a circular button with a less dominant presence are a great use case for outlined
                circular buttons.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    format="primaryOutline"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="secondaryOutline"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="alternativeOutline"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="negativeOutline"
                    icon={<PlusIcon />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="primaryOutline"
    icon={<PlusIcon />}
     />
<CircularButton
    format="secondaryOutline"
    icon={<PlusIcon />}
     />
<CircularButton
    format="alternativeOutline"
    icon={<PlusIcon />}
     />
<CircularButton
    format="negativeOutline"
    icon={<PlusIcon />}
     />
                    `}
            </ExampleSource>


            <Header3>Dashed Circular Buttons</Header3>
            <ParagraphMd>Great for empty states for user related actions.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    format="primaryDashed"
                    size="sm"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="secondaryDashed"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="alternativeDashed"
                    size="lg"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="negativeDashed"
                    size="lg"
                    icon={<PlusIcon />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="primaryDashed"
    icon={<PlusIcon />}
     />
<CircularButton
    format="secondaryDashed"
    icon={<PlusIcon />}
     />
<CircularButton
    format="alternativeDashed"
    icon={<PlusIcon />}
     />
<CircularButton
    format="negativeDashed"
    icon={<PlusIcon />}
     />
                    `}
            </ExampleSource>

            <Header3>White Circular Buttons</Header3>
            <ParagraphMd>For darker UIs, white circular buttons can be used in place of the default filled in buttons.
            </ParagraphMd>
            <div data-code style={{ backgroundColor: '#f6f7f8', padding: '1.25rem' }} >
                <CircularButton
                    format="whitePrimary"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    format="whiteSecondary"
                    icon={<PlusIcon />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="whitePrimary"
    icon={<PlusIcon />}
     />
<CircularButton
    format="whiteSecondary"
    icon={<PlusIcon />}
     />
                    `}
            </ExampleSource>

            <Header3>Sizes</Header3>
            <ParagraphMd>Circular buttons come in three default sizes: sm, md, lg. The size prop can be used to trigger these different states, medium is the default size.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    size="sm"
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    icon={<PlusIcon />}
                     />
                <CircularButton
                    size="lg"
                    icon={<PlusIcon />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    size="sm"
    icon={<PlusIcon />}
     />
<CircularButton
    icon={<PlusIcon />}
     />
<CircularButton
    size="lg"
    icon={<PlusIcon />}
     />
                    `}
            </ExampleSource>

            <Header3>Auto Horizontal Margins</Header3>
            <ParagraphMd>By default, circular buttons follow the same convention as buttons of 8px spacing between two or more circular button siblings. The prop can be turned off by setting the <code>autoMarginsHorizontal</code> prop to false.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    icon={<PlusIcon />} />
                <CircularButton
                    icon={<PlusIcon />}
                    autoMarginsHorizontal={false} />
                <CircularButton
                    icon={<PlusIcon />}
                    autoMarginsHorizontal={false}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    icon={<PlusIcon />} />
<CircularButton
    icon={<PlusIcon />}
    autoMarginsHorizontal={false} />
<CircularButton
    icon={<PlusIcon />}
    autoMarginsHorizontal={false}
        />
                    `}
            </ExampleSource>
        </div>
    );
};

export default CircularButtonDocs;
