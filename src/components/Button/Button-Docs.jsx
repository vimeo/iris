import * as React from 'react';
import Button from './Button'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function ButtonDocs() {

  return (
    <div>
      <div data-code>
        <Button>Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="positive">Positive</Button>
        <Button type="negative">Negative</Button>
      </div>
      <ExampleSource>
        {`
          <Button>Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="positive">Positive</Button>
          <Button type="negative">Negative</Button>
          `}
        </ExampleSource>

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
      <div data-code>
        <Button type="primaryOutline">Large</Button><Button type="secondaryOutline">Large</Button>
        <br />
        <br />
        <Button size="medium">Medium</Button><Button size="medium" type="secondary">Medium</Button>
        <br />
        <br />
        <Button type="positiveOutline" size="small">Small</Button><Button type="negativeOutline" size="small">Small</Button>
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

        <div data-code>
          <Button disabled>Primary Disabled</Button>
          <Button type="secondary" disabled>Secondary Disabled</Button>
          <br />
          <br />
          <Button type="positiveOutline" disabled>Positive Outline Disabled</Button>
          <Button type="negativeOutline" disabled>Negative Outline Disabled</Button>
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
  };
