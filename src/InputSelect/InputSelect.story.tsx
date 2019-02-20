import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputSelect } from './InputSelect';
import { ParagraphMd } from '../Type';

const $InputSelect = styled(InputSelect)`
  margin: 0 0 2rem;
`;

const demoOptions = (
  <optgroup label="Option Group">
    <option value="" disabled hidden>
      Select something...
    </option>
    <option value="1">Value 1</option>
    <option value="2">Value 2 has a long label</option>
    <option value="3" disabled>
      Value 2 (Disabled)
    </option>
  </optgroup>
);

import { Story } from '../../.storybook/Story';
import styled from 'styled-components';

const componentName = 'Inputs';

storiesOf(`components/${componentName}`, module).add('select', () => (
  <Story title="Input Select" subTitle="Select">
    <div data-code>
      <$InputSelect id="ExampleSelect1XL" label="XL Select" size="xl">
        {demoOptions}
      </$InputSelect>
      <$InputSelect
        id="ExampleSelect1Large"
        label="LG Select"
        size="lg"
      >
        {demoOptions}
      </$InputSelect>
      <$InputSelect id="ExampleSelect1" label="MD select (default)">
        {demoOptions}
      </$InputSelect>
      <$InputSelect id="ExampleSelect1sm" label="SM Select" size="sm">
        {demoOptions}
      </$InputSelect>
      <$InputSelect
        helperMsg={<ParagraphMd>I am helpful text!</ParagraphMd>}
        id="ExampleSelect2"
        label="Default with Helper Text"
      >
        {demoOptions}
      </$InputSelect>
      <$InputSelect
        format="negative"
        id="ExampleSelect2"
        label="Negative"
        errorMsg={<ParagraphMd>This is a problem!</ParagraphMd>}
      >
        {demoOptions}
      </$InputSelect>
      <$InputSelect
        format="positive"
        id="ExampleSelect3"
        label="Positive"
      >
        {demoOptions}
      </$InputSelect>
      <$InputSelect id="ExampleSelect4" label="Disabled" disabled>
        {demoOptions}
      </$InputSelect>
    </div>
    <div className="Pattern-DarkBlock">
      <$InputSelect
        helperMsg={<ParagraphMd>I am helpful text!</ParagraphMd>}
        id="ExampleSelect2"
        label="Default with Helper Text"
        theme="dark"
      >
        {demoOptions}
      </$InputSelect>
      <$InputSelect
        format="negative"
        id="ExampleSelect2"
        label="Negative"
        errorMsg={<ParagraphMd>This is a problem!</ParagraphMd>}
        theme="dark"
      >
        {demoOptions}
      </$InputSelect>
      <$InputSelect
        format="positive"
        id="ExampleSelect3"
        label="Positive"
        theme="dark"
      >
        {demoOptions}
      </$InputSelect>
    </div>
  </Story>
));
