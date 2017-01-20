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
          <ExampleSource>
            {`
              <Button type="primaryOutline">Primary Outline</Button>
              <Button type="secondaryOutline">Secondary Outline</Button>
              <Button type="positiveOutline">Positive Outline</Button>
              <Button type="negativeOutline">Negative Outline</Button>
              `}
            </ExampleSource>


            <h3>Button Sizes</h3>
            <div data-code>
              <div>
                <Button type="primaryOutline">Large</Button><Button type="secondaryOutline">Large</Button>
              </div>
              <div>
                <Button size="medium">Medium</Button><Button size="medium" type="secondary">Medium</Button>
              </div>
              <div>
                <Button type="positiveOutline" size="small">Small</Button><Button type="negativeOutline" size="small">Small</Button>
              </div>
            </div>

            <ExampleSource>
              {`
                <Button type="primaryOutline">Large</Button><Button type="secondaryOutline">Large</Button>
                <br />
                <br />
                <Button size="medium">Medium</Button><Button size="medium" type="secondary">Medium</Button>
                <br />
                <br />
                <Button type="positiveOutline" size="small">Small</Button><Button type="negativeOutline" size="small">Small</Button>
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
              </div>

            );
          }
        };
        export default ButtonDocs;
