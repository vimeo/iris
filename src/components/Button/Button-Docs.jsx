import * as React from 'react';
import Button from './Button';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import TestIcon from '../Icons/TestIcon';
import TestCheckIcon from '../Icons/TestCheckIcon';

class ButtonDocs extends React.Component {
    clickExample() {
        console.log('click');
    }

    render() {
        return (
            <div>
                <h3>Regular Buttons</h3>
                <p>These are the core set of button for Iris. The style of the button is determined by the <code>format</code> prop. <strong>Primary</strong> is the default.</p>
                <div data-code>
                    <Button id="foo" className="someArbitraryClass" onClick={this.clickExample}>Primary</Button>
                    <Button format="alternative">Alternative</Button>
                    <Button format="secondary">Secondary</Button>
                    <Button format="success">Success</Button>
                    <Button format="warning">Warning</Button>
                </div>

                <ExampleSource>
                    {`
<Button id="foo" className="someArbitraryClass" onClick={this.clickExample}>Primary</Button>
<Button format="alternative">Alternative</Button>
<Button format="secondary">Secondary</Button>
<Button format="success">Success</Button>
<Button format="warning">Warning</Button>
                    `}
                </ExampleSource>


                <h3>Outline Buttons</h3>
                <p>In some cases we want more subtle button styling. For these situations use an outline button type.</p>
                <p>Note: These buttons have transparent backgrounds</p>
                <div data-code style={{ 'padding': '1em', 'width': '100%' }}>
                    <Button format="primaryOutline">Primary Outline</Button>
                    <Button format="secondaryOutline">Secondary Outline</Button>
                    <Button format="successOutline">Success Outline</Button>
                </div>

                <div style={{ 'backgroundColor': '#f2f9e5', 'padding': '1em', 'width': '100%' }}>

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


                <p>The Light Transparent button type is used when a button is overlayed over a complex image background.</p>
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

                <h3>Button Sizes</h3>
                <p>Buttons come in four sizes. <strong>medium (md)</strong> is the default. Size is determined by the <code>size</code> property.</p>
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
                <h3>Buttons with Icons</h3>
                <p>Buttons can include SVG icons. These icons get passed in as JSX elements to the <code>icon</code> prop. Icons should aways be on the left (the default) unless there is a compelling reason to have it on the right (e.g. forward button with right arrow), using the <code>iconLocation</code></p>
                <div data-code>
                    <div>
                        <Button size="lg" format="warning" icon={<TestCheckIcon />}>warning lg</Button>
                        <Button size="lg" format="success" icon={<TestIcon />} iconLocation="afterLabel">Success lg</Button>
                    </div>
                    <div>
                        <Button format="alternative" icon={<TestCheckIcon />}>Alternative</Button>
                        <Button format="secondaryOutline" icon={<TestIcon />} iconLocation="afterLabel">Secondary Outline</Button>
                    </div>
                    <div>
                        <Button size="sm" format="primary" icon={<TestIcon />}>Primary sm</Button>
                        <Button size="sm" format="secondary" icon={<TestCheckIcon />} iconLocation="afterLabel">Secondary sm</Button>
                    </div>

                    <div>
                        <Button size="xs" format="primaryOutline" icon={<TestIcon />}>Primary xs</Button>
                        <Button size="xs" format="secondaryOutline" icon={<TestCheckIcon />} iconLocation="afterLabel">Secondary xs</Button>
                    </div>

                </div>

                <ExampleSource>
                    {`
<Button size="lg" format="warning" icon={<TestCheckIcon />}>warning lg</Button>
<Button size="lg" format="success"  icon={<TestIcon />} iconLocation="afterLabel">Success lg</Button>
<Button format="alternative" icon={<TestCheckIcon />}>Alternative</Button>
<Button format="secondaryOutline" icon={<TestIcon />} iconLocation="afterLabel">Secondary Outline</Button>
<Button size="sm" format="primary" icon={<TestIcon />}>Primary sm</Button>
<Button size="sm" format="secondary"  icon={<TestCheckIcon />} iconLocation="afterLabel">Secondary sm</Button>
<Button size="xs" format="primaryOutline" icon={<TestIcon />}>Primary xs</Button>
<Button size="xs" format="secondaryOutline"  icon={<TestCheckIcon />} iconLocation="afterLabel">Secondary xs</Button>
                    `}
                </ExampleSource>


                    <h3>Button as Links</h3>
                    <p>When buttons should actually be links that look like buttons and not button elements, we set the <code>isButtonElement</code> prop to "false". This will render the button as a span tag which can be nested in an anchor tag or React Router {'<Link>'} tag</p>
                    <p><strong>Note:</strong> These buttons do not have the automatic margins that the button elements have. Be sure to include spacing around your links</p>
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

                    <h3>Minimum Widths</h3>
                    <p>Buttons have enforced minimum widths to ensure buttons with short labels maintain a good proportion.</p>
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

                    <h3>Disabled Buttons</h3>
                    <p>All Buttons receive the same visual treatment for disabled buttons. Buttons are made disabled by the presences of the HTML disabled attribute.</p>
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


                    <h3>Button Sizing</h3>
                    <p>Butons are full 100% width on sm screen and width: auto on default. You can change the point at which the buttons become full width with the <code>autoWidth</code> prop.</p>
                    <div>
                        <h4>autowidth: xs</h4>
                        <p>Buttons become auto width at the xs</p>
                        <Button autoWidth="xs">xs</Button>
                    </div>
                    <div>
                        <h4>autowidth: sm</h4>
                        <p>Buttons are always auto width</p>
                        <Button autoWidth="sm">sm</Button>
                    </div>
                    <div>
                        <h4>autowidth: md</h4>
                        <p>Buttons become auto width at the md breakpoint. (default)</p>
                        <Button autoWidth="md">md</Button>
                    </div>
                    <div>
                        <h4>autowidth: lg</h4>
                        <p>Buttons become auto width at the lg breakpoint</p>
                        <Button autoWidth="lg">lg</Button>
                    </div>
                    <div>
                        <h4>autowidth: fluid</h4>
                        <p>Buttons are always full width</p>
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
