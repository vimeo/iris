import React from 'react';
import Button from './Button';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import ShareIcon from '../icons/paper-plane.svg';
import HeartIcon from '../icons/heart.svg';
import DownloadIcon from '../icons/download-arrow.svg';
import { ParagraphMd, Header3, Header4 } from '../Type';
class ButtonDocs extends React.Component {
    clickExample() {
        console.log('click');
    }

    render() {
        return (
            <div className="Pattern__docs">
                <Header3>Regular Buttons</Header3>
                <ParagraphMd>These are the core set of button for Iris. The style of the button is determined by the <code>format</code> prop. <strong>Primary</strong> is the default.</ParagraphMd>
                <div data-code>
                    <Button className="someArbitraryClass" onClick={this.clickExample}>Primary</Button>
                    <Button format="secondary">Secondary</Button>
                    <Button format="alternative">Alternative</Button>
                    <Button format="success">Success</Button>
                    <Button format="warning">Warning</Button>
                </div>

                <ExampleSource>
                    {`
<Button className="someArbitraryClass" onClick={this.clickExample}>Primary</Button>
<Button format="secondary">Secondary</Button>
<Button format="alternative">Alternative</Button>
<Button format="success">Success</Button>
<Button format="warning">Warning</Button>
                    `}
                </ExampleSource>


                <Header3>Outline Buttons</Header3>
                <ParagraphMd>In some cases we want more subtle button styling. For these situations use an outline button type.</ParagraphMd>
                <ParagraphMd>Note: These buttons have transparent backgrounds</ParagraphMd>
                <div data-code style={{ 'padding': '1em', 'width': '100%' }}>
                    <Button format="primaryOutline">Primary Outline</Button>
                    <Button format="secondaryOutline">Secondary Outline</Button>
                    <Button format="alternativeOutline">Alternative Outline</Button>
                    <Button format="successOutline">Success Outline</Button>
                </div>

                <div className="Pattern-DarkBlock">

                    <Button format="primaryOutline">Primary Outline</Button>
                    <Button format="secondaryOutline">Secondary Outline</Button>
                    <Button format="successOutline">Success Outline</Button>
                </div>

                <ExampleSource>
                    {`
<Button format="primaryOutline">Primary Outline</Button>
<Button format="secondaryOutline">Secondary Outline</Button>
<Button format="successOutline">Success Outline</Button>
                    `}
                </ExampleSource>

                 <Header3>Text-Only Buttons</Header3>
                <ParagraphMd>In cases where we need a button element but want it to appear like text, we use the Text-only buttons</ParagraphMd>
                <div data-code style={{ 'padding': '1em', 'width': '100%' }}>
                    <Button format="primaryTextOnly" icon={<ShareIcon />}>Primary TextOnly</Button>
                    <Button format="secondaryTextOnly" >Secondary Outline</Button>
                </div>

                <div className="Pattern-DarkBlock">
                    <Button format="primaryTextOnly" icon={<ShareIcon />}>Primary TextOnly</Button>
                    <Button format="lightTextOnly" icon={<ShareIcon />}>Light Outline</Button>
                </div>

                <ExampleSource>
                    {`
<Button format="primaryTextOnly" icon={<ShareIcon />}>Primary TextOnly</Button>
<Button format="secondaryTextOnly">Secondary Outline</Button>
<Button format="lightTextOnly" icon={<ShareIcon />}>Light Outline</Button>
                    `}
                </ExampleSource>

                <div data-code style={{ 'padding': '1em', 'width': '100%' }}>
                    <Button format="primaryTextOnly" size="lg" icon={<ShareIcon />}>Primary TextOnly</Button>
                    <Button format="primaryTextOnly" size="md" icon={<ShareIcon />}>Primary TextOnly</Button>
                    <Button format="primaryTextOnly" size="sm" icon={<ShareIcon />}>Primary TextOnly</Button>
                    <Button format="primaryTextOnly" size="xs" icon={<ShareIcon />}>Primary TextOnly</Button>
                </div>

                <ExampleSource>
                    {`
<Button format="primaryTextOnly" size="lg" icon={<ShareIcon />}>Primary TextOnly</Button>
<Button format="primaryTextOnly" size="md" icon={<ShareIcon />}>Primary TextOnly</Button>
<Button format="primaryTextOnly" size="sm" icon={<ShareIcon />}>Primary TextOnly</Button>
<Button format="primaryTextOnly" size="xs" icon={<ShareIcon />}>Primary TextOnly</Button>
                    `}
                </ExampleSource>

                <Header3>Light Transparent Button</Header3>
                <ParagraphMd>The Light Transparent button type is used when a button is overlayed over a complex image background.</ParagraphMd>
                <div data-code style={{ 'backgroundImage': 'url(https://placekitten.com/1000/800)', 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'padding': '4rem 1rem', 'width': '100%' }}>
                    <Button format="lightTransparent">Light Transparent</Button>
                    <Button format="lightTransparent">Light Transparent</Button>
                    <Button format="lightTransparent">Light Transparent</Button>
                </div>

                <ExampleSource>
                    {`
<Button format="lightTransparent">White Transparent</Button>
                    `}
                </ExampleSource>

                <Header3>Button Sizes</Header3>
                <ParagraphMd>Buttons come in four sizes. <strong>medium (md)</strong> is the default. Size is determined by the <code>size</code> property.</ParagraphMd>
                <div data-code>
                    <div>
                        <Button format="primaryOutline" size="lg">lg Button</Button><Button size="lg" format="secondaryOutline">lg Button</Button>
                    </div>
                    <div>
                        <Button>md Button</Button><Button format="secondary">md Button</Button>
                    </div>
                    <div>
                        <Button format="successOutline" size="sm">sm Button</Button><Button format="warning" size="sm">sm Button</Button>
                    </div>
                    <div>
                        <Button format="successOutline" size="xs">xs Button</Button><Button format="warning" size="xs">xs Button</Button>
                    </div>
                </div>

                <ExampleSource>
                    {`
<Button format="primaryOutline">lg</Button>
<Button format="secondaryOutline">lg</Button>
<Button size="md">md</Button>
<Button size="md" format="secondary">md</Button>
<Button format="successOutline" size="sm">sm</Button>
                    `}
                </ExampleSource>
                <Header3>Buttons with Icons</Header3>
                <ParagraphMd>Buttons can include SVG icons. These icons get passed in as JSX elements to the <code>icon</code> prop. Icons should aways be on the left (the default) unless there is a compelling reason to have it on the right (e.g. forward button with right arrow), using the <code>iconLocation</code></ParagraphMd>
                <div data-code>
                    <div>
                        <Button size="lg" format="warning" icon={<ShareIcon />}>warning lg</Button>
                        <Button size="lg" format="success" icon={<DownloadIcon />} iconLocation="afterLabel">Success lg</Button>
                    </div>
                    <div>
                        <Button format="alternative" icon={<ShareIcon />}>Alternative</Button>
                        <Button format="secondaryOutline" icon={<HeartIcon />} iconLocation="afterLabel">Secondary Outline</Button>
                    </div>
                    <div>
                        <Button size="sm" format="primary" icon={<ShareIcon />}>Primary sm</Button>
                        <Button size="sm" format="secondary" icon={<DownloadIcon />} iconLocation="afterLabel">Secondary sm</Button>
                    </div>

                    <div>
                        <Button size="xs" format="primaryOutline" icon={<ShareIcon />}>Primary xs</Button>
                        <Button size="xs" format="secondaryOutline" icon={<ShareIcon />} iconLocation="afterLabel">Secondary xs</Button>
                    </div>

                </div>

                <ExampleSource>
                    {`
 <div>
    <Button size="lg" format="warning" icon={<ShareIcon />}>warning lg</Button>
    <Button size="lg" format="success" icon={<DownloadIcon />} iconLocation="afterLabel">Success lg</Button>
</div>
<div>
    <Button format="alternative" icon={<ShareIcon />}>Alternative</Button>
    <Button format="secondaryOutline" icon={<HeartIcon />} iconLocation="afterLabel">Secondary Outline</Button>
</div>
<div>
    <Button size="sm" format="primary" icon={<ShareIcon />}>Primary sm</Button>
    <Button size="sm" format="secondary" icon={<DownloadIcon />} iconLocation="afterLabel">Secondary sm</Button>
</div>

<div>
    <Button size="xs" format="primaryOutline" icon={<ShareIcon />}>Primary xs</Button>
    <Button size="xs" format="secondaryOutline" icon={<ShareIcon />} iconLocation="afterLabel">Secondary xs</Button>
</div>

                    `}
                </ExampleSource>


                    <Header3>Button as Links</Header3>
                    <ParagraphMd>When buttons should actually be links that look like buttons and not button elements, we set the <code>isButtonElement</code> prop to "false". This will render the button as a span tag which can be nested in an anchor tag or React Router {'<Link>'} tag</ParagraphMd>
                    <ParagraphMd><strong>Note:</strong> These buttons do not have the automatic margins that the button elements have. Be sure to include spacing around your links</ParagraphMd>
                    <div data-code>
                        <a href="#"><Button isButtonElement={false}>Primary Outline</Button></a>
                        <a href="#"><Button isButtonElement={false} format="secondaryOutline">Secondary Outline</Button></a>
                    </div>

                    <ExampleSource>
                        {`
<a href="#"><Button isButtonElement={false}>Primary Outline</Button></a>
<a href="#"><Button isButtonElement={false} format="secondaryOutline">Secondary Outline</Button></a>
                        `}
                    </ExampleSource>

                    <Header3>Minimum Widths</Header3>
                    <ParagraphMd>Buttons have enforced minimum widths to ensure buttons with short labels maintain a good proportion.</ParagraphMd>
                    <div data-code>
                        <div>
                            <Button format="primaryOutline" size="lg">Go</Button>
                        </div>
                        <div>
                            <Button>Go</Button>
                        </div>
                        <div>
                            <Button format="successOutline" size="sm">Go</Button>
                        </div>
                        <div>
                            <Button format="successOutline" size="xs">Go</Button>
                        </div>
                    </div>

                    <ExampleSource>
                        {`
<Button format="primaryOutline" size="lg">Go</Button>
<Button>Go</Button>
<Button format="successOutline" size="sm">Go</Button>
<Button format="successOutline" size="xs">Go</Button>
                        `}
                    </ExampleSource>

                    <Header3>Disabled Buttons</Header3>
                    <ParagraphMd>All Buttons receive the same visual treatment for disabled buttons. Buttons are made disabled by the presences of the HTML disabled attribute.</ParagraphMd>
                    <div data-code>
                        <Button disabled>Primary Disabled</Button>
                        <Button format="secondary" disabled>Secondary Disabled</Button>
                    </div>

                    <ExampleSource>
                        {`
<Button disabled>Primary Disabled</Button>
<Button format="secondary" disabled>Secondary Disabled</Button>
                        `}
                    </ExampleSource>

                    <Header3>Button AutoMargins</Header3>
                    <ParagraphMd>Buttons will have automatic margin on the bottom and also all but the first of type will have left margins. To suppress this, set "autoMargins" to `false.`</ParagraphMd>
                    <div data-code>
                        <div>
                            <Button autoMargins={false}>autoMargins = false</Button>
                            <Button format="secondary" autoMargins={false}>autoMargins = false</Button>
                        </div>
                        <div>
                            <Button>autoMargins = true</Button>
                            <Button format="secondary">autoMargins = true</Button>
                        </div>
                        <div>
                            <Button autoMargins={false}>autoMargins = false</Button>
                            <Button format="secondary" autoMargins={false}>autoMargins = false</Button>
                        </div>
                    </div>

                    <ExampleSource>
                        {`
<div>
    <Button autoMargins={false}>Primary</Button>
    <Button  format="secondary" autoMargins={false}>Secondary</Button>
</div>
<div>
    <Button>Primary</Button>
    <Button  format="secondary">Secondary</Button>
</div>
<div>
    <Button autoMargins={false}>Primary</Button>
    <Button  format="secondary" autoMargins={false}>Secondary</Button>
</div>
                        `}
                    </ExampleSource>

                     <Header3>Inline Button</Header3>
                    <ParagraphMd>If a button needs to be displayed inline without automatic bottom margins, use the <code>isInline</code> flag.</ParagraphMd>
                    <div data-code>
                        <Button isInline>Primary</Button>
                    </div>

                    <ExampleSource>
                        {`
<Button isInline>Primary</Button>
                        `}
                    </ExampleSource>


                    <Header3>Button Sizing</Header3>
                    <ParagraphMd>Butons are full 100% width on sm screen and width: auto on default. You can change the point at which the buttons become full width with the <code>autoWidth</code> prop.</ParagraphMd>
                    <div>
                        <Header4>autowidth: xs</Header4>
                        <ParagraphMd>Buttons become auto width at the xs</ParagraphMd>
                        <Button autoWidth="xs">xs</Button>
                    </div>
                    <div>
                        <Header4>autowidth: sm</Header4>
                        <ParagraphMd>Buttons are always auto width</ParagraphMd>
                        <Button autoWidth="sm">sm</Button>
                    </div>
                    <div>
                        <Header4>autowidth: md</Header4>
                        <ParagraphMd>Buttons become auto width at the md breakpoint. (default)</ParagraphMd>
                        <Button autoWidth="md">md</Button>
                    </div>
                    <div>
                        <Header4>autowidth: lg</Header4>
                        <ParagraphMd>Buttons become auto width at the lg breakpoint</ParagraphMd>
                        <Button autoWidth="lg">lg</Button>
                    </div>
                    <div>
                        <Header4>autowidth: fluid</Header4>
                        <ParagraphMd>Buttons are always full width</ParagraphMd>
                        <Button autoWidth="fluid">Fluid</Button>
                    </div>

                    <ExampleSource>
                        {`
<Button autoWidth="xs">xs</Button>
<Button autoWidth="sm">sm</Button>
<Button autoWidth="md">md</Button>
<Button autoWidth="lg">lg</Button>
<Button autoWidth="fluid">Fluid</Button>
                        `}
                    </ExampleSource>

                </div>

        );
    }
    }
export default ButtonDocs;
