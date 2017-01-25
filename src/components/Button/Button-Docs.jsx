import * as React from 'react';
import Button from './Button'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import TestIcon from '../TestIcon'

class ButtonDocs extends React.Component {
  clickExample(){
    alert('click');
  }

  render () {
    return (
      <div>
        <h3>Regular Buttons</h3>
        <p>These are the core set of button for Iris. <strong>Primary</strong> is the default.</p>
        <div data-code>
          <Button id="foo" className="someArbitraryClass" onClick={this.clickExample} icon={<TestIcon /> }>Primary</Button>
          <Button type="secondary"  icon={<TestIcon />} iconLocation="afterLabel">Secondary</Button>
          <Button type="positive">Positive</Button>
          <Button type="negative">Negative</Button>
        </div>

        <ExampleSource>
          {`
            <Button id="foo" className="someArbitraryClass" onClick={this.clickExample}>Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="positive">Positive</Button>
            <Button type="negative">Negative</Button>
            `}
          </ExampleSource>


          <h3>Outline Buttons</h3>
          <p>In some cases we want more subtle button styling.</p>
          <div data-code>
            <Button type="primaryOutline">Primary Outline</Button>
            <Button type="secondaryOutline">Secondary Outline</Button>
            <Button type="positiveOutline">Positive Outline</Button>
            <Button type="negativeOutline">Negative Outline</Button>
          </div>

          <ExampleSource>
            {`
              <Button type="primaryOutline">Primary Outline</Button>
              <Button type="secondaryOutline">Secondary Outline</Button>
              <Button type="positiveOutline">Positive Outline</Button>
              <Button type="negativeOutline">Negative Outline</Button>
              `}
            </ExampleSource>

            <h3>Transparent Button</h3>
            <p>The transparent button is used when a button is overlayed over a complex image background.</p>
            <div data-code style={{'backgroundImage': 'url(https://www.fillmurray.com/2400/1200)', 'backgroundSize': 'cover', 'padding': '1em', 'width' : '100%'}}>
            <Button type="transparent" size="large">Transparent</Button>
            <Button type="transparent" size="medium">Transparent</Button>
            <Button type="transparent" size="small">Transparent</Button>
            <Button type="transparent" size="xSmall">Transparent</Button>
          </div>

          <ExampleSource>
            {`
              <Button type="transparent">Transparent</Button>
              <Button type="transparent" size="large">Transparent</Button>
              <Button type="transparent" size="medium">Transparent</Button>
              <Button type="transparent" size="small">Transparent</Button>
              <Button type="transparent" size="xSmall">Transparent</Button>
              `}
            </ExampleSource>

            <h3>Button as Links</h3>
            <p>When buttons should actually be links that look like buttons and not button elements, we set the `buttonElement` prop to "false". This will render the button as a span tag which can be nested in an anchor tag or React Router {`<Link>`} tag</p>
            <div data-code>
              <a href="#"><Button buttonElement={false}>Primary Outline</Button></a>
              <a href="#"><Button buttonElement={false} type="secondaryOutline">Secondary Outline</Button></a>
            </div>

            <ExampleSource>
              {`
                <a href="#"><Button buttonElement={false}>Primary Outline</Button></a>
                <a href="#"><Button buttonElement={false} type="secondaryOutline">Secondary Outline</Button></a>
              `}
              </ExampleSource>

            <h3>Button Sizes</h3>
            <p>Buttons come in four sizes. <strong>Medium</strong> is the default.</p>
            <div data-code>
              <div>
                <Button type="primaryOutline" size="large">Large Button</Button><Button size="large" type="secondaryOutline">Large Button</Button>
              </div>
              <div>
                <Button>Medium Button</Button><Button type="secondary">Medium Button</Button>
              </div>
              <div>
                <Button type="positiveOutline" size="small">Small Button</Button><Button type="negativeOutline" size="small">Small Button</Button>
              </div>
              <div>
                <Button type="positiveOutline" size="xSmall">xSmall Button</Button><Button type="negativeOutline" size="xSmall">xSmall Button</Button>
              </div>
            </div>

            <ExampleSource>
              {`
                <Button type="primaryOutline">Large</Button><Button type="secondaryOutline">Large</Button>
                <Button size="medium">Medium</Button><Button size="medium" type="secondary">Medium</Button>
                <Button type="positiveOutline" size="small">Small</Button><Button type="negativeOutline" size="small">Small</Button>
                `}
              </ExampleSource>

              <h3>Minimum Widths</h3>
              <p>Buttons have enforced minimum widths to ensure buttons with short labels maintain a good proportion.</p>
              <div data-code>
                <div>
                  <Button type="primaryOutline" size="large">Go</Button>
                </div>
                <div>
                  <Button>Go</Button>
                </div>
                <div>
                  <Button type="positiveOutline" size="small">Go</Button>
                </div>
                <div>
                  <Button type="positiveOutline" size="xSmall">Go</Button>
                </div>
              </div>

              <ExampleSource>
                {`
                  <Button type="primaryOutline" size="large">Go</Button>
                  <Button>Go</Button>
                  <Button type="positiveOutline" size="small">Go</Button>
                  <Button type="positiveOutline" size="xSmall">Go</Button>
                  `}
                </ExampleSource>

                <h3>Disabled Buttons</h3>
                <p>All Buttons receive the same visual treatment for disabled buttons. Buttons are made disabled by the presences of the HTML disabled attribute.</p>
                <div data-code>
                  <Button disabled>Primary Disabled</Button>
                  <Button type="secondary" disabled>Secondary Disabled</Button>
                </div>

                <ExampleSource>
                  {`
                    <Button disabled>Primary Disabled</Button>
                    <Button type="secondary" disabled>Secondary Disabled</Button>
                    <Button type="positiveOutline" disabled>Positive Outline Disabled</Button>
                    <Button type="negativeOutline" disabled>Negative Outline Disabled</Button>
                    `}
                  </ExampleSource>


                  <h3>Button Sizing</h3>
                  <p>Butons are full 100% width on small screen and width: auto on default. You can change the point at which the buttons become full width with the <code>autoWidth</code> prop.</p>
                  <div>
                    <h4>autowidth: small</h4>
                    <p>Buttons are always auto width</p>
                    <Button autoWidth="small">Small</Button>
                  </div>
                  <div>
                    <h4>autowidth: medium</h4>
                    <p>Buttons become auto width at the medium breakpoint. (default)</p>
                    <Button autoWidth="medium">Medium</Button>
                  </div>
                  <div>
                    <h4>autowidth: large</h4>
                    <p>Buttons become auto width at the large breakpoint</p>
                    <Button autoWidth="large">Large</Button>
                  </div>
                  <div>
                    <h4>autowidth: xLarge</h4>
                    <p>Buttons become auto width at the xLarge breakpoint</p>
                    <Button autoWidth="xLarge">xLarge</Button>
                  </div>
                  <div>
                    <h4>autowidth: fluid</h4>
                    <p>Buttons are always full width</p>
                    <Button autoWidth="fluid">Fluid</Button>
                  </div>

                  <ExampleSource>
                    {`
                      <Button autoWidth="small">Small</Button>
                      <Button autoWidth="medium">Medium</Button>
                      <Button autoWidth="large">Large</Button>
                      <Button autoWidth="xLarge">xLarge</Button>
                      <Button autoWidth="fluid">Fluid</Button>
                      `}
                    </ExampleSource>

                  </div>

                );
              }
            };
            export default ButtonDocs;
