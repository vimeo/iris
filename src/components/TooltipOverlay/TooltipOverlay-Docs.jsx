import React from 'react';
import TooltipOverlay from './TooltipOverlay';
import Button from '../Button/Button';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import DeleteIcon from '../../globals/svg/delete_iris.svg';
import LinkText from '../LinkText/LinkText';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import NotificationWarning from '../NotificationWarning/NotificationWarning';

class TooltipOverlayDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    clickTest = () => {
        alert('click!'); // eslint-disable-line no-alert
    }

    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <ParagraphMd>Tooltips Overlays can be used to add additional information to elements on a page. Note that any prop that can be passed to the Tooltip component can be passed to the TooltipOverlay as well.</ParagraphMd>
                    <ParagraphMd>Any props that are not in the API table below will be spread to to anchor tag that wraps the triggering element</ParagraphMd>
                    <NotificationWarning>
                    <ParagraphMd>The element passed to the component as child must not, itself be interactive. If you use a button, use the <code>isButtonElement=false</code> flag. If you are passing a bit of text formatted by the LinkText component, use <code>element="span"</code></ParagraphMd>
                    </NotificationWarning>
                    <Header3>Tooltip Overlays</Header3>

                    <ParagraphMd>If you are using a plain-text string for a tooltip trigger you must use the <code>LinkText</code> component with the <code>element="string"</code> prop option to style the link while the TootipOverlay component provides the actual linking.</ParagraphMd>

                    <div>
                        <TooltipOverlay
                            tooltipText="Peach's Hometown"
                            data-foo="bar"
                            onClick={this.clickTest}
                        >
                            <LinkText
                                element="span"
                            >
                                mushroom kingdom
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
                    </div>
                    <ExampleSource>
                    {`
<TooltipOverlay tooltipText="Peach's Hometown"
    data-foo="bar"
    onClick={this.clickTest}
>
    <LinkText
        element="span"
    >
        mushroom kingdom
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
                    <TooltipOverlay tooltipText="Kirby's Hometown">
                        <Button isButtonElement={false} autoMargins={false}>Planet Popstar</Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay tooltipText="Star Fox's Home Planet" attachment="bottom">
                        <Button isButtonElement={false} autoMargins={false}>Corneria</Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay tooltipText="Geno's Home world" attachment="left">
                        <Button isButtonElement={false} autoMargins={false}>Star road</Button>
                    </TooltipOverlay>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <TooltipOverlay tooltipText="Mallow's Hometown" attachment="right">
                        <Button isButtonElement={false} autoMargins={false}>Nimbus Land</Button>
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
