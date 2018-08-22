import React from 'react';
import {
    Button,
    ButtonIconOnly,
    Header3,
    LinkText,
    List,
    ListItem,
    NotificationWarning,
    ParagraphMd,
    TooltipOverlay,
 } from '../index';

import DeleteIcon from '../icons/trash.svg';

import ExampleSource from '../../docs/layout/ExampleSource';
class TooltipOverlayDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const longTooltipContent = 'iggy@koopalings.com, larry@koopalings.com, lemmy@koopalings.com, ludwig@koopalings.com, morton@koopalings.com, roy@koopalings.com, wendy@koopalings.com';

        return (
            <div className="Pattern__docs">
                <div data-code>
                    <ParagraphMd>Tooltips Overlays can be used to add additional information to elements on a page. Note that any prop that can be passed to the Tooltip component can be passed to the TooltipOverlay as well.</ParagraphMd>
                    <ParagraphMd>Any props that are not in the API table below will be spread to to the span tag that wraps the triggering element</ParagraphMd>

                    <NotificationWarning>
                        <ParagraphMd>The element passed to the component as child must not, itself be interactive.</ParagraphMd>
                        <List>
                            <ListItem>
                                If you use a button, use the <code>isButtonElement=false</code> flag.
                            </ListItem>
                        </List>
                    </NotificationWarning>

                    <div>
                        <TooltipOverlay
                            tooltipText={longTooltipContent}
                            data-foo="bar"
                        >
                            <LinkText
                                element="span"
                            >
                                Bowser's Kids
                            </LinkText>
                        </TooltipOverlay>
                    </div>
                    <div>
                        <TooltipOverlay
                            tooltipText="Delete"
                            onClick={this.clickTest}
                        >
                            <ButtonIconOnly
                                icon={<DeleteIcon title="Delete"/>}
                                format="warning"
                                isButtonElement={false}
                                size="md"
                            />
                        </TooltipOverlay>
                        <TooltipOverlay
                            tooltipText="Delete"
                            onClick={this.clickTest}
                        >
                            <ButtonIconOnly
                                disabled
                                icon={<DeleteIcon title="Delete"/>}
                                format="warning"
                                isButtonElement={false}
                                size="md"
                            />
                        </TooltipOverlay>
                        <TooltipOverlay
                            isDisabled
                            tooltipText="Delete"
                            onClick={this.clickTest}
                        >
                            <ButtonIconOnly
                                disabled
                                icon={<DeleteIcon title="Delete"/>}
                                format="warning"
                                isButtonElement={false}
                                size="md"
                            />
                        </TooltipOverlay>
                    </div>
                    <ExampleSource>
                    {`
<TooltipOverlay
    tooltipText={longTooltipContent}
    data-foo="bar"
>
    <LinkText
        element="span"
    >
        Bowser's Kids
    </LinkText>
</TooltipOverlay>
<TooltipOverlay
tooltipText="Delete"
onClick={this.clickTest}
>
    <ButtonIconOnly
        icon={<DeleteIcon title="Delete"/>}
        format="warning"
        isButtonElement={false}
        size="md"
    />
</TooltipOverlay>
<TooltipOverlay
    tooltipText="Delete"
    onClick={this.clickTest}
>
    <ButtonIconOnly
        disabled
        icon={<DeleteIcon title="Delete"/>}
        format="warning"
        isButtonElement={false}
        size="md"
    />
</TooltipOverlay>
<TooltipOverlay
    isDisabled
    tooltipText="Delete"
    onClick={this.clickTest}
>
    <ButtonIconOnly
        disabled
        icon={<DeleteIcon title="Delete"/>}
        format="warning"
        isButtonElement={false}
        size="md"
    />
</TooltipOverlay>
                    `}
                    </ExampleSource>

                    <Header3>Tooltip Overlay on a Button</Header3>
                    <div style={{ marginBottom: '1rem' }}>
                        <TooltipOverlay tooltipText="OOT Link's Hometown">
                            <Button isButtonElement={false} autoMargins={false}>Kokori forest</Button>
                        </TooltipOverlay>
                    </div>

                    <Header3>Auto Multi-line</Header3>
                    <ParagraphMd>
                        All tooltips will convert to multi-line styling if the character length is greater than or equal to 45.
                    </ParagraphMd>
                    <div style={{ marginBottom: '1rem' }}>
                        <TooltipOverlay tooltipText="Is super simple, all you do is follow these patterns.">
                            <Button isButtonElement={false} autoMargins={false}>Exiting the forest</Button>
                        </TooltipOverlay>
                    </div>
                </div>

                <ExampleSource>
                    {`
<TooltipOverlay tooltipText="OOT Link's Hometown">
    <Button isButtonElement={false} autoMargins={false}>Kokori Forest</Button>
</TooltipOverlay>
                        `}
                </ExampleSource>

                <Header3>Trigger on Click</Header3>
                <ParagraphMd>There are time when additional information is best triggered by a clip. Passing <code>{'triggerOnClick'}</code> as a prop will turn off hover and focus event listeners and use a click listener.</ParagraphMd>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay tooltipText="WW Link's Hometown" triggerOnClick>
                        <Button isButtonElement={false} autoMargins={false}>Outset Island</Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay
                        tooltipText="I am a medium tooltip"
                        triggerOnClick
                    >
                        <Button isButtonElement={false} autoMargins={false}>Outset Island</Button>
                    </TooltipOverlay>
                </div>

                <ExampleSource>
                    {`
<TooltipOverlay tooltipText="WW Link's Hometown" triggerOnClick>
    <Button isButtonElement={false} autoMargins={false}>Outset Island</Button>
</TooltipOverlay>
                        `}
                </ExampleSource>
                <Header3>Attachment Directions</Header3>
                <ParagraphMd>Tooltip attachments can be set in the following directions: top, bottom, left, and right using the <code>attachment</code> prop. The default for tooltips is top.</ParagraphMd>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay
                        tooltipText="Kirby's Hometown"
                    >
                        <Button
                        isButtonElement={false}
                        autoMargins={false}
                        >
                            Planet Popstar (Top)
                        </Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay
                        tooltipText="Star Fox's Home Planet"
                        attachment="bottom"
                    >
                        <Button
                            isButtonElement={false}
                            autoMargins={false}
                        >
                            Corneria (Bottom)
                        </Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay
                        tooltipText="Geno's Home world"
                        attachment="left"
                    >
                        <Button
                        isButtonElement={false}
                        autoMargins={false}
                        >
                            Star Road (Left)
                        </Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay
                        tooltipText="Mallow's Hometown"
                        attachment="right"
                    >
                        <Button
                            isButtonElement={false}
                            autoMargins={false}
                        >
                            Nimbus Land (Right)
                        </Button>
                    </TooltipOverlay>
                </div>

                <ExampleSource>
                    {`
<TooltipOverlay tooltipText="Kirby's Hometown">
    <Button isButtonElement={false} autoMargins={false}>Planet Popstar</Button>
</TooltipOverlay>
<TooltipOverlay tooltipText="Star Fox's Home Planet" attachment="bottom">
    <Button isButtonElement={false} autoMargins={false}>Corneria</Button>
</TooltipOverlay>
<TooltipOverlay tooltipText="Geno's Home world" attachment="left">
    <Button isButtonElement={false} autoMargins={false}>Star road</Button>
</TooltipOverlay>
<TooltipOverlay tooltipText="Mallow's Hometown" attachment="right">
    <Button isButtonElement={false} autoMargins={false}>Nimbus Land</Button>
</TooltipOverlay>
                        `}
                </ExampleSource>
            </div>
        );
    }
}

export default TooltipOverlayDocs;
