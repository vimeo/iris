import * as React from 'react';
import Button from './Button'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class ButtonDocs extends React.Component {
  clickExample(){
    alert('click');
  }

  render () {
    return (
      <div>
        <h3>Regular Buttons</h3>
        <div data-code>
          <Button id="foo" className="someArbitraryClass" onClick={this.clickExample}>Primary</Button>
          <Button type="secondary">Secondary</Button>
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
          <div data-code>
            <Button type="primaryOutline">Primary Outline</Button>
            <Button type="secondaryOutline">Secondary Outline</Button>
            <Button type="positiveOutline">Positive Outline</Button>
            <Button type="negativeOutline">Negative Outline</Button>
          </div>

          <h3>Transparent Button</h3>
          <div data-code style={{'backgroundImage': 'url(https://www.fillmurray.com/2400/1200)', 'backgroundSize': 'cover', 'padding': '1em', 'width' : '100%'}}>
            <Button type="transparentOutline">Transparent Outline</Button>
          </div>

          <ExampleSource>
            {`
              <Button type="transparentOutline">Transparent Outline</Button>
              `}
            </ExampleSource>


            <h3>Button Sizes</h3>
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
              <p>All Buttons receive the same visual treatment for disabled buttons.</p>
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
