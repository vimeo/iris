import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import PlusIcon from '../icons/plus.svg';
import { CircularButton, ParagraphMd, Header3 } from '../index';

const CircularButtonDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <Header3>Regular Circular Buttons</Header3>
            <ParagraphMd>These are used as an alternative button style to default buttons. The format prop styles the color, fill, and stroke of this component. Primary is the default.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    format="primary"
                    icon={<PlusIcon />}
                />
                <CircularButton
                    format="secondary"
                    icon={<PlusIcon />}
                />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="primary"
    icon={<PlusIcon />}
/>
<CircularButton
    format="secondary"
    icon={<PlusIcon />}
/>
                    `}
            </ExampleSource>

            <Header3>Dashed Circular Buttons</Header3>
            <ParagraphMd>Great for empty states for user related actions.
            </ParagraphMd>
            <div data-code>
                <CircularButton
                    format="secondaryDashed"
                    icon={<PlusIcon />}
                />
            </div>
            <div className="Pattern-DarkBlock">
                <CircularButton
                    format="lightDashed"
                    icon={<PlusIcon />}
                />
            </div>

            <ExampleSource>
                {`
<CircularButton
    format="secondaryDashed"
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
                    size="md"
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
    size="md"
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
