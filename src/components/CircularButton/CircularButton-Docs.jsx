import React from 'react';
import CircularButton from './CircularButton';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import IrisIconDelete16 from '../../../src/globals/svg/iris_icon_delete_16';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';
const CircularButtonDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <Header3>Regular Circular Buttons</Header3>
            <ParagraphMd>These are used as an alternative button style to default buttons. The format prop styles the color, fill, and stroke of this component. Primary is the default.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="secondary"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="alternative"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="negative"
                    icon={<IrisIconDelete16 />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    icon={<IrisIconDelete16 />}
         />
<CircularButton
    format="secondary"
    icon={<IrisIconDelete16 />}
         />
<CircularButton
    format="alternative"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="negative"
    icon={<IrisIconDelete16 />}
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
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="secondaryOutline"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="alternativeOutline"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="negativeOutline"
                    icon={<IrisIconDelete16 />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="primaryOutline"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="secondaryOutline"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="alternativeOutline"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="negativeOutline"
    icon={<IrisIconDelete16 />}
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
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="secondaryDashed"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="alternativeDashed"
                    size="lg"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="negativeDashed"
                    size="lg"
                    icon={<IrisIconDelete16 />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="primaryDashed"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="secondaryDashed"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="alternativeDashed"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="negativeDashed"
    icon={<IrisIconDelete16 />}
     />
                    `}
            </ExampleSource>

            <Header3>White Circular Buttons</Header3>
            <ParagraphMd>For darker UIs, white circular buttons can be used in place of the default filled in buttons.
            </ParagraphMd>
            <div data-code style={{ backgroundColor: '#f6f7f8', padding: '1.25rem' }} >
                <CircularButton
                    format="whitePrimary"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    format="whiteSecondary"
                    icon={<IrisIconDelete16 />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="whitePrimary"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    format="whiteSecondary"
    icon={<IrisIconDelete16 />}
     />
                    `}
            </ExampleSource>

            <Header3>Sizes</Header3>
            <ParagraphMd>Circular buttons come in three default sizes: sm, md, lg. The size prop can be used to trigger these different states, medium is the default size.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    size="sm"
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    icon={<IrisIconDelete16 />}
                     />
                <CircularButton
                    size="lg"
                    icon={<IrisIconDelete16 />}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    size="sm"
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    icon={<IrisIconDelete16 />}
     />
<CircularButton
    size="lg"
    icon={<IrisIconDelete16 />}
     />
                    `}
            </ExampleSource>

            <Header3>Auto Horizontal Margins</Header3>
            <ParagraphMd>By default, circular buttons follow the same convention as buttons of 8px spacing between two or more circular button siblings. The prop can be turned off by setting the <code>autoMarginsHorizontal</code> prop to false.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    icon={<IrisIconDelete16 />} />
                <CircularButton
                    icon={<IrisIconDelete16 />}
                    autoMarginsHorizontal={false} />
                <CircularButton
                    icon={<IrisIconDelete16 />}
                    autoMarginsHorizontal={false}
                     />
            </div>

            <ExampleSource>
                {`
<CircularButton
    icon={<IrisIconDelete16 />} />
<CircularButton
    icon={<IrisIconDelete16 />}
    autoMarginsHorizontal={false} />
<CircularButton
    icon={<IrisIconDelete16 />}
    autoMarginsHorizontal={false}
        />
                    `}
            </ExampleSource>
        </div>
    );
};

export default CircularButtonDocs;
